---
title: "Constraints Design in Timber Modular Process"
date: 2024-11-09
description: "A prototype add-in developed at AEC Hackathon Munich to support coordination in timber modular prefab process."
tags: ["Hackathon", "BIM", "Add-in", "Dev", "Munich, Germany"]
image: "img/works/09_WISE24_Fast-Track-Design-Method/aec_hackathon_1.webp"
coverFit: "contain"
---


{{< work-header 
  subtitle="24' AEC Hackathon Munich"
  affiliation="<a href='https://hackaec.com/events.html' target='_blank' rel='noopener'>AEC HACKATHON</a> & <a href='https://www.tum-venture-labs.de/labs/built-environment/' target='_blank' rel='noopener'>TUM Venture Lab Built Environment</a>"
  team="Meng-Ju Hsieh, Wanlin Zhang, and Pei-Ling Song, in collaboration with <a href='https://www.dreso.com/de/' target='_blank' rel='noopener'>Drees & Sommer</a>"
>}}

### Introduction
This project explores communication challenges in the **timber modular prefabrication design process**, building upon solutions developed during the **2024 AEC Hackathon Munich**. To address coordination issues among stakeholders in design and construction, we introduce a **Constraint Design (CD)** approach, which employs abstract bounding-box models to represent constraints and exchange data via the **Speckle platform**. A custom **Revit plugin** was developed to provide real-time visualization of manufacturing constraints and to facilitate collaboration between design and production teams. By incorporating constraints in the early design phases, the system minimizes redesign iterations and improves overall efficiency. Furthermore, the study highlights future directions in information transmission and process automation, contributing to the broader digital transformation of the Architecture, Engineering, and Construction (AEC) industry. This approach demonstrates how integrated digital solutions can effectively address complex coordination challenges in construction practices.

### Concept
The development of the original model begins with mesh analysis, which identifies surface properties of geometric elements. Instead of relying on detailed semantics, dimensional features are simplified into bounding boxes. This abstraction allows constraints to be directly applied to bounding dimensions and accommodates manufacturing constraints at the earliest design stage. By doing so, the process reduces unnecessary complexity while ensuring flexibility for downstream integration.

Designers and manufacturers collaborate in real time through the Speckle platform, which acts as a version-control and data-transfer hub similar to GitHub. Through this environment, stakeholders exchange models, add or adjust constraints, and visualize modifications across different software ecosystems. This bidirectional interaction enables designers to respond immediately to manufacturing feedback, thereby minimizing redesign iterations and aligning design decisions with production feasibility.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
  <figure class="m-0">
    <img src="/img/works/09_WISE24_Fast-Track-Design-Method/1.jpg" alt="The formation process of the original model through mesh analysis" style="width:100%;height:300px;object-fit:cover;">
    <figcaption>The formation process of the original model through mesh analysis</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/img/works/09_WISE24_Fast-Track-Design-Method/2.jpg" alt="The collaboration process between the manufacturer and the designer" style="width:100%;height:300px;object-fit:contain;background-color:white;">
    <figcaption>The collaboration process between the manufacturer and the designer</figcaption>
  </figure>
</div>

### Revit Plugin Prototype
A Python-based plugin built on pyRevit was developed to support bounding box conversion and synchronization. The plugin provides pushbutton functions for transforming design entities into abstract bounding boxes, transmitting them via Speckle, and retrieving constraint-modified versions back into Revit. Furthermore, it enables visualization of constraint relationships, allowing designers to validate and adjust parameters in response to stakeholder input, demonstrating the feasibility of constraint design as a practical tool.

{{< figure src="/img/works/09_WISE24_Fast-Track-Design-Method/3.jpg" alt="Successful display of the constraint visualization system" caption="Successful display of the constraint visualization system" class="mx-auto w-full" >}}

### Conclusion
In summary, Constraint Design serves as an intermediary abstraction layer between design and manufacturing. By integrating bounding boxes with the collaborative infrastructure of Speckle, this approach enhances coordination efficiency, reduces rework, and fosters more transparent communication across stakeholders. Looking forward, the framework holds potential to integrate real-time visualization, process automation, and machine learning, paving the way for greater digitalization and intelligence in the AEC industry.

{{< figure src="/img/works/09_WISE24_Fast-Track-Design-Method/group_pic.jpg" alt="Group picture from AEC Hackathon Munich" caption="Group picture from AEC Hackathon Munich" class="mx-auto w-full" >}}