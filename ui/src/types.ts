export interface DagStats {
  dag_id: string;
  tags: string[];
  avg_start: string;
  avg_end: string;
  median_start: string;
  median_end: string;
  avg_duration_min: number;
  median_duration_min: number;
  display_start: number;
  display_end: number;
  run_count: number;
}
