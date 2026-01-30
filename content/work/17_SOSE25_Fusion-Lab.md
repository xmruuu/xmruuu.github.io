---
title: "Multi-Modal Hybrid RAG for Digital Twin Q&A"
date: 2026-01-25
description: "A multi-modal hybrid RAG framework integrating IFC-based BIM, geospatial data, and design documentation for Digital Twin-based question answering."
tags: ["Project", "RAG", "Digital Twin", "Knowledge Graph", "Neo4j", "Munich, Germany"]
image: "img/works/17_SOSE25_Fusion-Lab/main_page.webp"
coverFit: "cover"
---
{{< work-header
  subtitle="WS2025/26 Fusion Lab - Multi-Modal RAG System for Built Environment"
  affiliation="Chair of Computational Modeling and Simulation, School of Engineering and Design, TUM"
  supervisors="Prof. Dr.-Ing. André Borrmann"
  team="Meng-Ju Hsieh, Pei-Ling Song, Hongyu Jiang, Omar Haddadin, Mohamed Ali"
>}}

### Introduction
This project explores a **multi-modal hybrid RAG (Retrieval-Augmented Generation) framework** for Digital Twin-based question answering in the built environment. The system integrates heterogeneous data sources including **IFC-based BIM models** stored in Neo4j graph database, **multi-version BIM comparison** with as-built vs proposed states tracking, **design documentation** with vector embeddings, and **geospatial data** via PostGIS for location-based queries. The architecture employs **knowledge graph augmentation** combined with **vector similarity search**, enabling context-aware reasoning across spatial, semantic, and temporal dimensions.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
  <figure class="m-0">
    <img src="/img/works/17_SOSE25_Fusion-Lab/pj13-3.png" alt="System Interface Transparent" style="width:100%;height:auto;">
  </figure>
  <figure class="m-0">
    <img src="/img/works/17_SOSE25_Fusion-Lab/main_page.webp" alt="System Demo" style="width:100%;height:auto;">
  </figure>
</div>
<p class="text-center text-sm">Figure 1. Multi-Modal RAG System Interface with Cesium 3D Viewer</p>

### System Architecture
The backend employs a **multi-agent orchestration** approach where an Orchestrator Agent routes user queries to specialized Expert Agents: **BIM Agent** for structured building queries via Graph Tool, **Design Agent** for semantic search through Vector embeddings, and **GIS Agent** for spatial analysis via PostGIS. This tool-based routing enables the system to handle diverse query types—from "How many doors are there?" (Graph DB) to "What is the design concept?" (Vector DB) to "Show buildings near the site" (Spatial DB).

{{< figure
    src="/img/works/17_SOSE25_Fusion-Lab/flowchart.webp"
    alt="System Architecture"
    caption="Figure 2. Multi-Agent RAG Architecture with Expert Routing"
    class="mx-auto text-center"
>}}

### Multi-Version BIM Support
A key innovation is the **dual-version BIM architecture** supporting evolution tracking between as-built (historical/existing) and proposed (future/design) states. Each IFC model receives a `model_version` property, with `EVOLVED_TO`/`EVOLVED_FROM` relationships linking corresponding spaces across versions. This enables version-aware queries—"How many rooms in the new design?" automatically filters to proposed version, while "What changed between versions?" leverages evolution links for comparative analysis.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
  <figure class="m-0">
    <img src="/img/works/17_SOSE25_Fusion-Lab/graph2.webp" alt="Multi-Version BIM Schema" style="width:100%;height:auto;">
  </figure>
  <figure class="m-0">
    <img src="/img/works/17_SOSE25_Fusion-Lab/graph3.webp" alt="Knowledge Graph Visualization" style="width:100%;height:auto;">
  </figure>
</div>
<p class="text-center text-sm">Figure 3-4. Neo4j Graph Schema with Version Evolution Tracking & Knowledge Graph Visualization</p>

### Technology Stack
The full-stack implementation includes a **Next.js frontend** with Cesium 3D viewer for spatial visualization, **FastAPI backend** with LangChain-based RAG orchestration, **Neo4j** for both graph storage and vector indexing, and **PostGIS** for geospatial queries. The ETL pipeline processes IFC models via IfcOpenShell, generates vector embeddings for design documents, and establishes cross-version relationships automatically.

{{< figure
    src="/img/works/17_SOSE25_Fusion-Lab/pj13-4.png"
    alt="VCMap GIS Viewer Implementation"
    caption="Figure 5. VCMap GIS Viewer Implementation"
    class="mx-auto text-center"
>}}

{{< figure
    src="/img/works/17_SOSE25_Fusion-Lab/pj13-5.png"
    alt="Parametric Facade Design"
    caption="Figure 6. Parametric Facade Design"
    class="mx-auto text-center"
>}}

### My Contributions
- Backend development and FastAPI service architecture
- ETL pipeline for IFC-to-Neo4j ingestion with multi-version support
- RAG system implementation with query decomposition and tool routing
- Cesium viewer development and frontend-backend integration
