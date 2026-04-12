# airflow-dag-gantt

Airflow 3.x plugin that visualizes Dag execution times as a 24-hour Gantt chart.

Shows average/median start and end times for each Dag based on recent successful runs. Uses `react_apps` to render natively within the Airflow UI.

## Installation

```bash
pip install git+https://github.com/choo121600/airflow-dag-gantt.git
```

Or clone and deploy manually to `~/airflow/plugins/`:

```bash
git clone https://github.com/choo121600/airflow-dag-gantt.git
cp src/airflow_dag_gantt/plugin.py ~/airflow/plugins/dag_gantt_plugin.py
mkdir -p ~/airflow/plugins/dist
cp src/airflow_dag_gantt/dist/main.umd.cjs ~/airflow/plugins/dist/
```

## Configuration

No additional configuration required. The plugin uses the logged-in user's session to call Airflow's REST API directly from the browser.

After installation, restart the webserver:

```bash
sudo systemctl restart airflow-webserver
```

## Features

- **24h timeline Gantt chart** with responsive width
- **Mean/Median toggle** for execution time statistics
- **Run count selector**: 10, 25, 50, 100, or All
- **Prefix-based color grouping**: mdi, wisereport, dart, news, etc.
- **Clickable legend filtering**: click a prefix to show/hide Dags
- **Text search**: filter Dags by name
- **Hover tooltips**: mean/median start/end, duration, run count, tags
- **Session-based auth**: uses logged-in user's session to call Airflow REST API `/api/v2/` directly

## UI Development

```bash
cd ui
pnpm install
pnpm dev          # Dev server at localhost:5173
pnpm build        # Build UMD bundle to dist/main.umd.cjs
```

After building, copy the bundle:

```bash
cp ui/dist/main.umd.cjs src/airflow_dag_gantt/dist/
```

## Tech Stack

- **Frontend**: React 19, ChakraUI v3, Vite (UMD build)
- **Backend**: FastAPI (Airflow plugin, static file serving only)
- **Integration**: Airflow 3.x `react_apps` plugin API

## License

Apache License 2.0
