"""Airflow 3.x plugin: Dag execution time Gantt chart."""

from __future__ import annotations

import mimetypes
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from airflow.plugins_manager import AirflowPlugin

mimetypes.add_type("application/javascript", ".cjs")

app = FastAPI(title="Dag Gantt Chart", version="0.2.2")

_dist_dir = Path(__file__).parent / "dist"
if _dist_dir.exists():
    app.mount("/dist", StaticFiles(directory=_dist_dir), name="dag_gantt_dist")


class DagGanttPlugin(AirflowPlugin):
    name = "dag_gantt"

    fastapi_apps = [
        {
            "app": app,
            "url_prefix": "/dag-gantt",
            "name": "Dag Gantt Chart",
        }
    ]

    react_apps = [
        {
            "name": "Dag Gantt Chart",
            "url_route": "dag-gantt",
            "bundle_url": "/dag-gantt/dist/main.umd.cjs",
            "destination": "nav",
            "category": "browse",
        }
    ]
