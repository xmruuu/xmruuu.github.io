---
title: "Esemble Learning for IFC Feature Prediction"
date: 2025-07-12
description: "Using IfcOpenShell to extract features from models to predict properties such as U-Value, FireRating, IsExternal."
tags: ["Project", "IFC", "Data Science", "ML", "Munich, Germany"]
image: "img/works/16_SOSE25_Software_Lab/cover.webp"
coverFit: "contain"
---
{{< work-header 
  subtitle="2025 Software Lab - IFC model analysis to gain insights into design processes "
  affiliation="Chair of Computing in Civil and Building Engineering, School of Engineering and Design, TUM"
  supervisors="Prof. Dr.-Ing. Sebastian Esser, Dr. Zijian Wang, Dr. Matthias Weise (AEC3)"
  team="Meng-Ju Hsieh, Tan-An Ha, Kai Dietmair"
>}}

### Introduction
Analyzing IFC models provides valuable insights into design processes and supports the development of intelligent model evaluation frameworks. We employ **IfcOpenShell** to extract **geometric**, **attribute**, **topological**, and **relational features** from IFC data. Building on the original scope of IFC model analysis, our study constructs a dataset of more than 300 IFC models, which are used to train and evaluate predictive frameworks. We focus on selected attributes (e.g., **U-Value**, **FireRating**, **IsExternal**) and compare prediction tasks across different value types (**Boolean**, **numeric**, **categorical**). To achieve robust performance, we adopt an ensemble learning strategy that integrates **rule-based systems**, **traditional machine learning**, and **deep learning** models. This multi-model approach enables us to assess model-specific strengths, improve semantic inference of IFC attributes, and establish a comprehensive evaluation of prediction accuracy across heterogeneous property types.


{{< figure
    src="/img/works/16_SOSE25_Software_Lab/fcv7_final.webp"
    alt="Research Framework"
    caption="Figure 1. Research Framework"
    class="mx-auto text-center"
>}}


{{< figure
    src="/img/works/16_SOSE25_Software_Lab/table.webp"
    alt="Phase I Prediction Results (Ongoing)"
    caption="Figure 2. Phase I Prediction Results (Ongoing)"
    width="520px"
    class="mx-auto text-center"
>}}

### Final Report

<div class="not-prose" style="margin-top: 0.5rem; max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 2rem; padding-right: 2rem; width: 100%;">
  <embed src="/img/works/16_SOSE25_Software_Lab/G14A_FinalReport_mj.pdf#zoom=page-width&pagemode=none" type="application/pdf" style="display:block; width:100%; height:82vh; border:0;">
</div>


