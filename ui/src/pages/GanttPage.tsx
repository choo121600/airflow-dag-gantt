import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Box, Flex, Heading, Text, HStack, Button, Input } from "@chakra-ui/react";
import type { DagStats } from "src/types";

const PALETTE = [
  "#4fc3f7", "#81c784", "#ffb74d", "#e57373", "#ba68c8",
  "#4dd0e1", "#aed581", "#ff8a65", "#f06292", "#7986cb",
];

const LIMIT_OPTIONS = [10, 25, 50, 100, 0] as const;

function dagPrefix(dagId: string): string {
  const parts = dagId.split("_");
  if (parts.length <= 1) return dagId;
  if (parts[0] === "mdi") return "mdi";
  if (dagId.startsWith("wisereport") || dagId.startsWith("pdf_") || dagId.startsWith("report_")) return "wisereport";
  if (dagId.startsWith("dart")) return "dart";
  if (dagId.startsWith("news")) return "news";
  return parts[0];
}

function buildPrefixColors(data: DagStats[]): Record<string, string> {
  const prefixes = [...new Set(data.map((d) => dagPrefix(d.dag_id)))].sort();
  const map: Record<string, string> = {};
  prefixes.forEach((p, i) => {
    map[p] = PALETTE[i % PALETTE.length];
  });
  return map;
}

function minutesOfDay(isoStr: string): number {
  const dt = new Date(isoStr);
  return dt.getHours() * 60 + dt.getMinutes() + dt.getSeconds() / 60;
}

function minutesToHhmm(min: number): string {
  const h = Math.floor(min / 60);
  const m = Math.floor(min % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function mean(arr: number[]): number {
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

function median(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

interface DagRunRaw {
  start_date: string | null;
  end_date: string | null;
}

interface DagInfo {
  dag_id: string;
  tags: Array<{ name: string } | string>;
}

function computeStats(runs: DagRunRaw[]): Omit<DagStats, "dag_id" | "tags"> | null {
  const starts: number[] = [];
  const ends: number[] = [];
  const durations: number[] = [];

  for (const run of runs) {
    if (!run.start_date || !run.end_date) continue;
    starts.push(minutesOfDay(run.start_date));
    ends.push(minutesOfDay(run.end_date));
    durations.push(
      (new Date(run.end_date).getTime() - new Date(run.start_date).getTime()) / 60000
    );
  }

  if (starts.length === 0) return null;

  return {
    avg_start: minutesToHhmm(mean(starts)),
    avg_end: minutesToHhmm(mean(ends)),
    median_start: minutesToHhmm(median(starts)),
    median_end: minutesToHhmm(median(ends)),
    avg_duration_min: Math.round(mean(durations) * 10) / 10,
    median_duration_min: Math.round(median(durations) * 10) / 10,
    display_start: Math.round(mean(starts) * 10) / 10,
    display_end: Math.round(mean(ends) * 10) / 10,
    run_count: starts.length,
  };
}

export const GanttPage = () => {
  const [data, setData] = useState<DagStats[]>([]);
  const [metric, setMetric] = useState<"mean" | "median">("mean");
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string> | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  const [tooltip, setTooltip] = useState<{
    dag: DagStats;
    x: number;
    y: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const dagsResp = await fetch("/api/v2/dags?only_active=true&paused=false");
      if (!dagsResp.ok) throw new Error(`Dags API: ${dagsResp.status}`);
      const dagsData = await dagsResp.json();
      const dags: DagInfo[] = dagsData.dags || [];

      const runParams = new URLSearchParams({
        state: "success",
        order_by: "-start_date",
      });
      if (limit > 0) runParams.set("limit", String(limit));

      const runPromises = dags.map(async (dag) => {
        try {
          const resp = await fetch(
            `/api/v2/dags/${dag.dag_id}/dagRuns?${runParams}`
          );
          if (!resp.ok) return { dag_id: dag.dag_id, runs: [] as DagRunRaw[] };
          const data = await resp.json();
          return { dag_id: dag.dag_id, runs: (data.dag_runs || []) as DagRunRaw[] };
        } catch {
          return { dag_id: dag.dag_id, runs: [] as DagRunRaw[] };
        }
      });

      const results = await Promise.all(runPromises);

      const tagMap: Record<string, string[]> = {};
      for (const dag of dags) {
        tagMap[dag.dag_id] = (dag.tags || []).map((t) =>
          typeof t === "string" ? t : t.name
        );
      }

      const statsList: DagStats[] = [];
      for (const { dag_id, runs } of results) {
        const stats = computeStats(runs);
        if (!stats) continue;
        statsList.push({ dag_id, tags: tagMap[dag_id] || [], ...stats });
      }

      statsList.sort((a, b) => a.display_start - b.display_start);
      setData(statsList);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    obs.observe(el);
    setContainerWidth(el.clientWidth);
    return () => obs.disconnect();
  }, []);

  const prefixColors = buildPrefixColors(data);

  // Collect all unique tags sorted by frequency
  const allTags = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const d of data) {
      for (const t of d.tags) {
        counts[t] = (counts[t] || 0) + 1;
      }
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [data]);

  const TAG_PREVIEW_COUNT = 12;
  const visibleTags = showAllTags ? allTags : allTags.slice(0, TAG_PREVIEW_COUNT);

  const filteredData = useMemo(() => {
    let result = data;
    if (activeTags !== null) {
      result = result.filter((d) =>
        d.tags.some((t) => activeTags.has(t))
      );
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (d) =>
          d.dag_id.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [data, activeTags, search]);

  const displayData = useMemo(() => {
    return filteredData.map((d) => ({
      ...d,
      display_start:
        metric === "mean"
          ? parseFloat(d.avg_start.split(":")[0]) * 60 + parseFloat(d.avg_start.split(":")[1])
          : parseFloat(d.median_start.split(":")[0]) * 60 + parseFloat(d.median_start.split(":")[1]),
      display_end:
        metric === "mean"
          ? parseFloat(d.avg_end.split(":")[0]) * 60 + parseFloat(d.avg_end.split(":")[1])
          : parseFloat(d.median_end.split(":")[0]) * 60 + parseFloat(d.median_end.split(":")[1]),
    }));
  }, [filteredData, metric]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      if (prev === null) {
        return new Set([tag]);
      }
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
        return next.size === 0 ? null : next;
      } else {
        next.add(tag);
        return next;
      }
    });
  };

  const ROW_H = 28;
  const GAP = 3;
  const LABEL_W = 300;
  const PAD_RIGHT = 20;
  const PAD_TOP = 36;
  const PAD_BOTTOM = 16;
  const CHART_W = Math.max(600, containerWidth - LABEL_W - PAD_RIGHT);
  const TOTAL_W = containerWidth;
  const TOTAL_H = PAD_TOP + displayData.length * (ROW_H + GAP) + PAD_BOTTOM;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;
    const idx = target.getAttribute("data-idx");
    if (idx === null) {
      setTooltip(null);
      return;
    }
    const dag = displayData[parseInt(idx)];
    if (!dag) {
      setTooltip(null);
      return;
    }
    setTooltip({ dag, x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => setTooltip(null);

  const hasFilters = activeTags !== null || search.trim().length > 0;

  return (
    <Box p={4} ref={containerRef}>
      <Flex justify="space-between" align="center" mb={3} wrap="wrap" gap={3}>
        <Heading size="lg">Dag Gantt Chart</Heading>
        <HStack gap={2}>
          <Text fontSize="sm" color="fg.muted">Metric</Text>
          <Button size="sm" variant={metric === "mean" ? "solid" : "outline"} colorPalette="blue" onClick={() => setMetric("mean")}>Mean</Button>
          <Button size="sm" variant={metric === "median" ? "solid" : "outline"} colorPalette="blue" onClick={() => setMetric("median")}>Median</Button>
          <Text fontSize="sm" color="fg.muted" ml={2}>Runs</Text>
          {LIMIT_OPTIONS.map((l) => (
            <Button key={l} size="sm" variant={limit === l ? "solid" : "outline"} colorPalette="gray" onClick={() => setLimit(l)}>
              {l === 0 ? "All" : l}
            </Button>
          ))}
        </HStack>
      </Flex>

      {/* Color legend + search */}
      <Flex gap={3} mb={2} wrap="wrap" align="center">
        <Text fontSize="xs" color="fg.muted" whiteSpace="nowrap">
          {hasFilters ? `${displayData.length}/` : ""}{data.length} Dags / {displayData.reduce((s, d) => s + d.run_count, 0)} runs
        </Text>
        {Object.entries(prefixColors).map(([prefix, color]) => (
          <HStack key={prefix} gap={1}>
            <Box w="10px" h="10px" borderRadius="2px" bg={color} />
            <Text fontSize="xs" color="fg.muted">{prefix}</Text>
          </HStack>
        ))}
        <Input
          size="sm"
          placeholder="Search name or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          maxW="200px"
          ml="auto"
        />
      </Flex>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <Flex gap={1} mb={2} wrap="wrap" align="center">
          <Text fontSize="xs" color="fg.muted" mr={1}>Tags</Text>
          {visibleTags.map((tag) => {
            const isActive = activeTags !== null && activeTags.has(tag);
            return (
              <Button
                key={tag}
                size="xs"
                variant={isActive ? "solid" : "outline"}
                colorPalette={isActive ? "blue" : "gray"}
                onClick={() => toggleTag(tag)}
                fontWeight="normal"
              >
                {tag}
              </Button>
            );
          })}
          {allTags.length > TAG_PREVIEW_COUNT && (
            <Button
              size="xs"
              variant="ghost"
              onClick={() => setShowAllTags(!showAllTags)}
              color="fg.muted"
            >
              {showAllTags ? "Less" : `+${allTags.length - TAG_PREVIEW_COUNT} more`}
            </Button>
          )}
          {hasFilters && (
            <Button
              size="xs"
              variant="ghost"
              onClick={() => { setActiveTags(null); setSearch(""); }}
              ml={1}
            >
              Reset
            </Button>
          )}
        </Flex>
      )}

      {loading && (
        <Text color="fg.muted" textAlign="center" py={16}>Loading Dag run data...</Text>
      )}
      {error && (
        <Text color="red.500" textAlign="center" py={8}>Failed to load: {error}</Text>
      )}

      {!loading && !error && displayData.length > 0 && (
        <Box overflowX="auto">
          <svg
            width={TOTAL_W}
            height={TOTAL_H}
            style={{ fontFamily: "inherit" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {Array.from({ length: 25 }, (_, h) => {
              const x = LABEL_W + (h / 24) * CHART_W;
              const major = h % 3 === 0;
              return (
                <g key={h}>
                  <line x1={x} y1={PAD_TOP - 4} x2={x} y2={TOTAL_H - PAD_BOTTOM}
                    stroke={major ? "var(--chakra-colors-border)" : "var(--chakra-colors-border-muted, #e2e8f0)"}
                    strokeWidth={major ? 1 : 0.5} opacity={major ? 0.6 : 0.3} />
                  {major && (
                    <text x={x} y={PAD_TOP - 10} textAnchor="middle" fill="var(--chakra-colors-fg-muted, #888)" fontSize={11}>
                      {`${String(h % 24).padStart(2, "0")}:00`}
                    </text>
                  )}
                </g>
              );
            })}

            {displayData.map((dag, i) => {
              const y = PAD_TOP + i * (ROW_H + GAP);
              const barX = LABEL_W + (dag.display_start / 1440) * CHART_W;
              let barW = ((dag.display_end - dag.display_start) / 1440) * CHART_W;
              if (barW < 4) barW = 4;
              const color = prefixColors[dagPrefix(dag.dag_id)] || PALETTE[0];
              const durVal = metric === "mean" ? dag.avg_duration_min : dag.median_duration_min;
              const durStr = durVal < 60 ? `${durVal.toFixed(0)}m` : `${(durVal / 60).toFixed(1)}h`;
              const displayName = dag.dag_id.length > 38 ? dag.dag_id.slice(0, 36) + ".." : dag.dag_id;

              return (
                <g key={dag.dag_id}>
                  <rect data-idx={i} x={0} y={y} width={TOTAL_W} height={ROW_H} fill="transparent" />
                  <text x={LABEL_W - 8} y={y + ROW_H / 2 + 4} textAnchor="end" fill="var(--chakra-colors-fg, #333)" fontSize={12}>
                    {displayName}
                  </text>
                  <rect data-idx={i} x={barX} y={y + 4} width={barW} height={ROW_H - 8} rx={4} fill={color} opacity={0.85} />
                  {barW > 36 && (
                    <text x={barX + barW / 2} y={y + ROW_H / 2 + 4} textAnchor="middle" fill="#111" fontSize={10} fontWeight={600}>
                      {durStr}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </Box>
      )}

      {!loading && !error && displayData.length === 0 && (
        <Text color="fg.muted" textAlign="center" py={16}>
          {data.length > 0 ? "No Dags match the current filter." : "No successful Dag runs found."}
        </Text>
      )}

      {tooltip && (
        <Box position="fixed" left={`${tooltip.x + 12}px`} top={`${tooltip.y + 12}px`}
          bg="bg.panel" border="1px solid" borderColor="border" borderRadius="md"
          p={3} shadow="lg" zIndex={100} pointerEvents="none" fontSize="xs" lineHeight="1.8" maxW="280px">
          <Text fontWeight="bold" color="blue.400" mb={1}>{tooltip.dag.dag_id}</Text>
          <Flex justify="space-between" gap={4}>
            <Text color="fg.muted">Mean</Text>
            <Text>{tooltip.dag.avg_start} ~ {tooltip.dag.avg_end}</Text>
          </Flex>
          <Flex justify="space-between" gap={4}>
            <Text color="fg.muted">Median</Text>
            <Text>{tooltip.dag.median_start} ~ {tooltip.dag.median_end}</Text>
          </Flex>
          <Flex justify="space-between" gap={4}>
            <Text color="fg.muted">Duration ({metric})</Text>
            <Text>{(metric === "mean" ? tooltip.dag.avg_duration_min : tooltip.dag.median_duration_min).toFixed(1)} min</Text>
          </Flex>
          <Flex justify="space-between" gap={4}>
            <Text color="fg.muted">Runs</Text>
            <Text>{tooltip.dag.run_count}</Text>
          </Flex>
          {tooltip.dag.tags.length > 0 && (
            <Flex justify="space-between" gap={4}>
              <Text color="fg.muted">Tags</Text>
              <Text>{tooltip.dag.tags.slice(0, 5).join(", ")}</Text>
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
};
