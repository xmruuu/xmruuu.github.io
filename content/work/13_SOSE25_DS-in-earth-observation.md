---
title: "Multi-Model Comparison for Tree Species Classification in Germany"
date: 2025-07-02
description: "Project of Data Science in Earth Observation, evaluating five models for tree species classification."
tags: ["Research", "Data Science", "ML", "Munich, Germany"]
image: "img/works/13_SOSE25_DS-in-earth-observation/cover.webp"
coverFit: "contain"
---

{{< work-header
  subtitle="SS25 Data Science in Earth Observation Project Report"
  affiliation="Chair of Data Science in Earth Observation, School of Engineering and Design, TUM"
  supervisors="Prof. Dr. Xiaoxiang Zhu, Dr. Muhammad Shahzad, Dr. Andrés Camero Unzueta"
  team="Meng-Ju Hsieh, Pei-Ling Song, Hongyu Jiang, Hoi-Wang Lo, Kit-Lung Chan"
>}}

### Introduction
The aim of this project is to classify dominant tree species across Germany by leveraging satellite image time series. Forest management
practices benefit from knowledge of species distribution, which supports site-adapted tree selection and climate-resilient forest
planning. Tree species labels in the TreeSatAI dataset are organised hierarchically (leaf type, genus, species), allowing us to develop
classification methods that exploit this structure to improve model performance.

We integrate **Sentinel‑2 multi‑spectral imagery** (10 spectral bands, 5 vegetation indices) into a data processing pipeline that extracts monthly composites (March–October 2022) and generates **5×5 pixel patches** for each reference point. We trained and evaluated five classification models: **Random Forest**, **XGBoost**, **Convolutional Neural Networks (CNN)**, **Recurrent Neural Networks (RNN)**, and **Transformer** architectures. **Hierarchical labels (L1, L2)** significantly improved accuracy for both traditional machine learning and deep learning models (CNN, RNN). Furthermore, **data augmentation** with rotation and translation enhanced the generalisation ability of deep learning models. Among all methods, **XGBoost** achieved the highest test accuracy (**83.6%**).

<a href="/img/works/13_SOSE25_DS-in-earth-observation/25SS_DSEO_report.pdf#zoom=page-width&pagemode=none" target="_blank" rel="noopener" class="inline-flex items-center gap-1 underline">Open Fullscreen <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg></a>

*In respect of publication policies and team contributions, only the sections authored by me are shared.*

<div class="not-prose" style="margin-top: 0.5rem; max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 2rem; padding-right: 2rem; width: 100%;">
  <embed src="/img/works/13_SOSE25_DS-in-earth-observation/25SS_DSEO_report.pdf#zoom=page-width&pagemode=none" type="application/pdf" style="display:block; width:100%; height:82vh; border:0;">
</div>
