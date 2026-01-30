# PORTFOLIO

**Meng-Ju Hsieh**
Technical University of Munich (TUM), Germany
Website: [xmruuu.github.io](https://xmruuu.github.io/)

<div style="page-break-after: always;"></div>

## 01. Multi-Modal Hybrid RAG for Digital Twin Q&A

**Date:** January 2026
**Location:** Munich, Germany
**Keywords:** RAG, Digital Twin, Knowledge Graph, Neo4j, BIM

### Abstract

This project explores a multi-modal hybrid RAG (Retrieval-Augmented Generation) framework for Digital Twin-based question answering in the built environment. The system integrates heterogeneous data sources including IFC-based BIM models stored in Neo4j graph database, multi-version BIM comparison with as-built vs proposed states tracking, design documentation with vector embeddings, and geospatial data via PostGIS for location-based queries. The architecture employs knowledge graph augmentation combined with vector similarity search, enabling context-aware reasoning across spatial, semantic, and temporal dimensions.

### Methodology

The backend employs a multi-agent orchestration approach where an Orchestrator Agent routes user queries to specialized Expert Agents: BIM Agent for structured building queries via Graph Tool, Design Agent for semantic search through Vector embeddings, and GIS Agent for spatial analysis via PostGIS. This tool-based routing enables the system to handle diverse query types across different data modalities.

### Contributions

- Backend development and FastAPI service architecture
- ETL pipeline for IFC-to-Neo4j ingestion with multi-version support
- RAG system implementation with query decomposition and tool routing
- Cesium viewer development and frontend-backend integration

**Affiliation:** Chair of Computational Modeling and Simulation, School of Engineering and Design, TUM
**Supervisor:** Prof. Dr.-Ing. André Borrmann
**Team:** Meng-Ju Hsieh, Pei-Ling Song, Hongyu Jiang, Omar Haddadin, Mohamed Ali

<img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/pj13-3.png" width="420"> <img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/main_page.webp" width="420">

*Figure 1-2. Multi-Modal RAG System Interface with Cesium 3D Viewer (Transparent & Full View)*

<img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/flowchart.webp" width="420"> <img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/graph.webp" width="420">

*Figure 3-4. Multi-Agent RAG Architecture with Expert Routing & Knowledge Graph Structure*

<img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/graph2.webp" width="420"> <img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/graph3.webp" width="420">

*Figure 5-6. Neo4j Graph Schema with Version Evolution Tracking & Knowledge Graph Visualization*

<img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/pj13-4.png" width="420"> <img src="https://xmruuu.github.io/img/works/17_SOSE25_Fusion-Lab/pj13-5.png" width="420">

*Figure 7-8. VCMap GIS Viewer Implementation & Parametric Facade Design*

**Link:** [View Project](https://xmruuu.github.io/work/17_sose25_fusion-lab/)

<div style="page-break-after: always;"></div>

## 02. Ensemble Learning for IFC Feature Prediction

**Date:** July 2025
**Location:** Munich, Germany
**Keywords:** IFC, Data Science, Machine Learning, BIM

### Abstract

Analyzing IFC models provides valuable insights into design processes and supports the development of intelligent model evaluation frameworks. This study employs IfcOpenShell to extract geometric, attribute, topological, and relational features from IFC data. Building on the original scope of IFC model analysis, the study constructs a dataset of more than 300 IFC models, which are used to train and evaluate predictive frameworks. The focus is on selected attributes (U-Value, FireRating, IsExternal) with comparison of prediction tasks across different value types (Boolean, numeric, categorical).

### Methodology

To achieve robust performance, an ensemble learning strategy is adopted that integrates rule-based systems, traditional machine learning, and deep learning models. This multi-model approach enables assessment of model-specific strengths, improves semantic inference of IFC attributes, and establishes a comprehensive evaluation of prediction accuracy across heterogeneous property types.

**Affiliation:** Chair of Computing in Civil and Building Engineering, School of Engineering and Design, TUM
**Supervisors:** Prof. Dr.-Ing. Sebastian Esser, Dr. Zijian Wang, Dr. Matthias Weise (AEC3)
**Team:** Meng-Ju Hsieh, Tan-An Ha, Kai Dietmair

<img src="https://xmruuu.github.io/img/works/16_SOSE25_Software_Lab/fcv7_final.webp" width="400"> <img src="https://xmruuu.github.io/img/works/16_SOSE25_Software_Lab/table.webp" width="400">

*Figure 1-2. Research Framework & Phase I Prediction Results*

**Link:** [View Project](https://xmruuu.github.io/work/16_sose25_software_lab/)

<div style="page-break-after: always;"></div>

## 03. IFC to Graph Structure Semantic Modeling

**Date:** August 2025
**Location:** Munich, Germany
**Keywords:** IFC, Semantic Modeling, Data Science, Visualization

### Abstract

This research developed a complete IFC-to-graph structure pipeline, leveraging IfcOpenShell for data extraction and D3.js for visualization. The system unfolds each hierarchical level of an IFC model and maps its attributes and values into an interactive graph, enabling intuitive exploration of complex building projects. This represents the first step toward decomposing and understanding architectural data.

### Future Directions

Future plans include integrating LLMs (e.g., LangGraph) for semantic interpretation and extending the framework to support refined analyses of physical environments, structural properties, and topological relationships. Establishing semantic modeling as the foundation is essential for enabling computers and machines to read building information clearly and accurately.

**Team:** Personal Research

<img src="https://xmruuu.github.io/img/works/15_SOSE25_Semantic-Modeling/home_page.webp" width="420">

*Figure 1. IFC Graph Structure Visualization Interface*

**Link:** [View Project](https://xmruuu.github.io/work/15_sose25_semantic-modeling/)

<div style="page-break-after: always;"></div>

## 04. IoT-based Indoor Ambient Monitoring

**Date:** July 2025
**Location:** Munich, Germany
**Keywords:** IoT, Digital Twin, Sensor Network, CityGML

### Abstract

This project delivers a low-cost indoor monitoring pipeline utilizing IoT sensors and Digital Twin technology. Seeeduino LoRaWAN sensor nodes stream observations to TTN and the FROST Server (MongoDB), while a Cesium-based web dashboard provides synchronized charts, historical playback, and a comfort index for spatiotemporal exploration of indoor conditions.

### System Architecture

The system architecture is divided into hardware and software components. On the hardware side, multiple indoor environmental sensors (measuring CO, PM2.5, temperature, humidity) transmit data via LoRa using the CayenneLPP encoding format through a LoRaWAN gateway to IoT cloud platforms. On the software side, the semantic building model of TUM in CityGML LOD 3.0 is processed with FME and converted into Cesium-compatible 3D Tiles for visualization.

### Validation

Validation shows the system captures real-world dynamics. A rain event on 16.07 aligns with a temperature drop and humidity spike; on 11-12.07, CO/NO2 rise with occupancy/ventilation changes.

**Affiliation:** Chair of Geoinformatics, School of Engineering and Design, TUM
**Supervisors:** Univ.-Prof. Dr. rer. nat. Thomas H. Kolbe, Joseph Gitahi, M.Sc., Benedikt Schwab, M.Sc.
**Team:** Meng-Ju Hsieh, Pei-Ling Song, Kit-Lung Chan

<img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/cover.webp" width="380"> <img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/Architecture.webp" width="380">

*Figure 1-2. IoT Dashboard with Cesium 3D Viewer & System Architecture*

<img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/sensors.webp" width="380"> <img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/deploy.webp" width="380">

*Figure 3-4. Sensor Architecture & 3D Printed Equipment Box and Deployment*

<img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/bim_lab1.webp" width="380"> <img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/bim_lab2.webp" width="380">

*Figure 5-6. BIM Lab Deployment*

<img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/validation1.webp" width="380"> <img src="https://xmruuu.github.io/img/works/14_SOSE25_IoT/validation2.webp" width="380">

*Figure 7-8. Validation Results*

**Link:** [View Project](https://xmruuu.github.io/work/14_sose25_iot/) | [Demo](https://xmruuu.github.io/25SS_IoT_Indoor-Ambient-Monitoring/)

<div style="page-break-after: always;"></div>

## 05. Multi-Model Comparison for Tree Species Classification in Germany

**Date:** July 2025
**Location:** Munich, Germany
**Keywords:** Data Science, Machine Learning, Earth Observation, Remote Sensing

### Abstract

The aim of this project is to classify dominant tree species across Germany by leveraging satellite image time series. Forest management practices benefit from knowledge of species distribution, which supports site-adapted tree selection and climate-resilient forest planning. Tree species labels in the TreeSatAI dataset are organized hierarchically (leaf type, genus, species), allowing development of classification methods that exploit this structure to improve model performance.

### Methodology

Sentinel-2 multi-spectral imagery (10 spectral bands, 5 vegetation indices) is integrated into a data processing pipeline that extracts monthly composites (March-October 2022) and generates 5x5 pixel patches for each reference point. Five classification models were trained and evaluated: Random Forest, XGBoost, Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), and Transformer architectures.

### Results

Hierarchical labels (L1, L2) significantly improved accuracy for both traditional machine learning and deep learning models. Data augmentation with rotation and translation enhanced the generalization ability of deep learning models. Among all methods, XGBoost achieved the highest test accuracy (83.6%).

**Affiliation:** Chair of Data Science in Earth Observation, School of Engineering and Design, TUM
**Supervisors:** Prof. Dr. Xiaoxiang Zhu, Dr. Muhammad Shahzad, Dr. Andrés Camero Unzueta
**Team:** Meng-Ju Hsieh, Pei-Ling Song, Hongyu Jiang, Hoi-Wang Lo, Kit-Lung Chan

<img src="https://xmruuu.github.io/img/works/13_SOSE25_DS-in-earth-observation/cover.webp" width="420">

*Figure 1. Tree Species Classification Results*

**Link:** [View Project](https://xmruuu.github.io/work/13_sose25_ds-in-earth-observation/)

<div style="page-break-after: always;"></div>

## 06. Harvesting the Sun: Dyson Swarm Animation

**Date:** June 2025
**Location:** Munich, Germany
**Keywords:** Blender, Animation, Visualization, XR

### Abstract

This course was carried out in collaboration with XR HUB Bavaria, focusing on the production of an animation themed around future energy. The final work was showcased in the dome theater at 1E9 & Festival der Zukunft. The team selected the Dyson Swarm as the central concept, and most of the modeling was accomplished using Blender, where extensive use of parametric node systems generated environments and handled complex geometries.

### Technical Approach

Producing an animation tailored for a spherical dome theater presented a unique challenge in terms of projection mapping and spatial composition. The team successfully completed the project and received applause from the audience at the conclusion of the event.

**Affiliation:** Chair of Architectural Informatics, School of Engineering and Design, TUM
**Supervisors:** Prof. Dr.-Ing. Frank Petzold, Dr.-Ing. Gerhard Schubert, M.A. Lars Wuestemann
**Team:** Meng-Ju Hsieh, Li Zhou, Kit-Lung Chan, Mathias Gunnarshaug, Oemer Faruk Secim

<img src="https://xmruuu.github.io/img/works/12_SOSE25_Interactive-Visualization/Slide6.webp" width="420"> <img src="https://xmruuu.github.io/img/works/12_SOSE25_Interactive-Visualization/IV_2025_final_film.webp" width="420">

*Figure 1-2. Dyson Swarm Scene - Energy Collection & Final Film Frame*

<img src="https://xmruuu.github.io/img/works/12_SOSE25_Interactive-Visualization/event2.webp" width="320">

*Figure 3. Group Photo at Festival der Zukunft*

**Link:** [View Project](https://xmruuu.github.io/work/12_sose25_interactive-visualization/)

<div style="page-break-after: always;"></div>

## 07. Modeling of Scheduling in Engineering Project

**Date:** June 2025
**Location:** Munich, Germany
**Keywords:** Simulation, Project Management, System Theory

### Abstract

This experimental report is part of the System-Theoretical Principles of Project Management course, focusing on how system-theoretical methods can be applied to analyze project scheduling and verify the impact of different strategies on project duration and resource allocation.

### Methodology

The analysis began by modeling project activities as a causal network and conducting scheduling analysis to identify the critical path and overall project duration, which served as the baseline for subsequent scenario comparisons. Three different scheduling strategies were designed and compared to examine how variations in resource allocation influence project duration and constrained conditions. Different scheduling flexibility settings were simulated by adjusting the strength of boundary conditions to observe the effects of task concentration versus dispersion.

### Conclusions

The overall analysis shows that resource allocation and flexibility strategies significantly affect project outcomes, highlighting the value of systematic modeling in complex project management.

**Affiliation:** Chair of Construction Process Management, School of Engineering and Design, TUM
**Supervisors:** Univ.-Prof. Dr.-Ing. Konrad Nuebel, Dr. rer. nat. Wolfgang Eber
**Team:** Meng-Ju Hsieh, Pei-Ling Song, Hongyu Jiang

<img src="https://xmruuu.github.io/img/works/11_SOSE25_Project-Management/cover.webp" width="420">

*Figure 1. Project Scheduling Model Visualization*

**Link:** [View Project](https://xmruuu.github.io/work/11_sose25_project-management/)

<div style="page-break-after: always;"></div>

## 08. Building Information Modeling Practice

**Date:** May 2025
**Location:** Munich, Germany
**Keywords:** BIM, Architecture, IFC

### Abstract

This project was part of the SS25 BIM Fundamental Course, aimed at developing a deeper understanding of the potential of Building Information Modeling (BIM) and the structure of the IFC schema. The assignment required creating a semantically enriched and detailed BIM model, acting simultaneously as designers and engineers.

### Approach

The structure, appearance, and material definitions of the model were carefully examined, ensuring semantic accuracy and consistency throughout. This process not only strengthened modeling skills but also provided a solid foundation in comprehending the logic and framework of IFC-based data representation.

**Affiliation:** Chair of Computing in Civil and Building Engineering, School of Engineering and Design, TUM
**Supervisors:** Prof. Dr.-Ing. André Borrmann, Prof. Dr.-Ing. Sebastian Esser
**Team:** Personal Work

<img src="https://xmruuu.github.io/img/works/10_SOSE25_BIM-Fundamental/1-model.webp" width="420"> <img src="https://xmruuu.github.io/img/works/10_SOSE25_BIM-Fundamental/2-model.webp" width="420">

*Figure 1-2. BIM Model Overview & Detail*

<img src="https://xmruuu.github.io/img/works/10_SOSE25_BIM-Fundamental/3-Exterior.webp" width="320"> <img src="https://xmruuu.github.io/img/works/10_SOSE25_BIM-Fundamental/4-Interior.webp" width="320">

*Figure 3-4. Exterior View & Interior View*

**Link:** [View Project](https://xmruuu.github.io/work/10_sose25_bim-fundamental/)

<div style="page-break-after: always;"></div>

## 09. Constraints Design in Timber Modular Process

**Date:** November 2024
**Location:** Munich, Germany
**Keywords:** Hackathon, BIM, Plugin Development, Timber Construction

### Abstract

This project explores communication challenges in the timber modular prefabrication design process, building upon solutions developed during the 2024 AEC Hackathon Munich. To address coordination issues among stakeholders in design and construction, a Constraint Design (CD) approach is introduced, which employs abstract bounding-box models to represent constraints and exchange data via the Speckle platform.

### Implementation

A custom Revit plugin was developed to provide real-time visualization of manufacturing constraints and to facilitate collaboration between design and production teams. By incorporating constraints in the early design phases, the system minimizes redesign iterations and improves overall efficiency.

### Conclusions

Constraint Design serves as an intermediary abstraction layer between design and manufacturing. By integrating bounding boxes with the collaborative infrastructure of Speckle, this approach enhances coordination efficiency, reduces rework, and fosters more transparent communication across stakeholders.

**Affiliation:** AEC HACKATHON & TUM Venture Lab Built Environment
**Collaboration:** Drees & Sommer
**Team:** Meng-Ju Hsieh, Wanlin Zhang, Pei-Ling Song

<img src="https://xmruuu.github.io/img/works/09_WISE24_Fast-Track-Design-Method/1.webp" width="320"> <img src="https://xmruuu.github.io/img/works/09_WISE24_Fast-Track-Design-Method/2.webp" width="320">

*Figure 1-2. Formation process through mesh analysis & Collaboration process between manufacturer and designer*

<img src="https://xmruuu.github.io/img/works/09_WISE24_Fast-Track-Design-Method/3.webp" width="420"> <img src="https://xmruuu.github.io/img/works/09_WISE24_Fast-Track-Design-Method/group_pic.webp" width="420">

*Figure 3-4. Constraint visualization system in Revit & Group picture from AEC Hackathon Munich*

**Link:** [View Project](https://xmruuu.github.io/work/09_wise24_fast-track-design-method/)

<div style="page-break-after: always;"></div>

## Bachelor Projects (2018-2023)

For my undergraduate works at Chung Yuan Christian University, Taiwan, please visit:

**[Synthesis Horizons - Selected Works 2018-2023](https://xmruuu.github.io/work/08_bf2023_synthesis-horizons-portfolio-2018-2023/)**

This portfolio documents my architectural explorations during the bachelor's program, featuring projects that integrate computational design, Geographic Information Systems, and algorithmic methodologies within Taiwan's socio-cultural context.

---

*Visit [xmruuu.github.io](https://xmruuu.github.io/) for more projects and details.*
*Meng-Ju Hsieh | Technical University of Munich*
