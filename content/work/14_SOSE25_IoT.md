---
title: "IoT-based Indoor Ambient Monitoring"
date: 2025-07-07
description: "Proposed a smart, low-cost indoor monitoring and analytics system using IoT sensors. Data is contextualized with GML/BIM on Cesium for Digital Twin–oriented visualization and analysis."
tags: ["Project", "IoT", "Digital Twin", "Munich, Germany"]
image: "img/works/14_SOSE25_IoT/cover.webp"
coverFit: "contain"
---

{{< work-header
  subtitle="25SS Geo Sensor Web and the Internet of Things Course Project"
  affiliation="Chair of Geoinformatics, School of Engineering and Design, TUM"
  supervisors="Univ.-Prof. Dr. rer. nat. Thomas H. Kolbe, Joseph Gitahi, M.Sc., Benedikt Schwab, M.Sc."
  team="Meng-Ju Hsieh, Pei-Ling Song, Kit-Lung Chan"
>}}



### Introduction
This project delivers a low‑cost indoor monitoring pipeline. Seeeduino LoRaWAN sensor nodes stream observations to TTN and the FROST Server (MongoDB), and a Cesium‑based web dashboard provides synchronized charts, historical playback, and a comfort index.

<a href="https://xmruuu.github.io/25SS_IoT_Indoor-Ambient-Monitoring/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 underline">Open Demo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg></a>
![image](img/works/14_SOSE25_IoT/cover.webp)

### System Framework
The system architecture is divided into hardware and software components. On the hardware side, multiple indoor environmental sensors (measuring CO, PM2.5, temperature, humidity, etc.) transmit data via LoRa using the CayenneLPP encoding format through a LoRaWAN gateway to IoT cloud platforms such as TTN and SWM. On the software side, these platforms forward the data to the FROST Server via the standardized SensorThings API, where it is stored in MongoDB. Meanwhile, the semantic building model of TUM in CityGML LOD 3.0 is processed with FME and converted into Cesium-compatible 3D Tiles. Finally, JavaScript is used to fetch live or historical data from the FROST Server and MongoDB, integrating it into Cesium 3D visualizations and interactive dashboards for end-user applications.

{{< figure src="/img/works/14_SOSE25_IoT/Architecture.png" alt="System Architecture" caption="Figure 1. System Architecture" class="mx-auto w-full md:w-4/5 lg:w-2/3" >}}

### Sensor Architecture

{{< figure src="/img/works/14_SOSE25_IoT/sensors.png" alt="Sensors" caption="Figure 2. Sensor Architecture" class="mx-auto w-full md:w-4/5 lg:w-2/3" >}}

**Required hardware:**
- Mainboard — 1× [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/)
- Power — 1× [Battery 2000 mAh](https://akkuplus.de/Einzelzelle-634169-37-Volt-2000mAh-Li-Polymer)
- Temperature, Humidity, Pressure and Air Quality — [BME680 Bosch I2C Bus](https://wiki.seeedstudio.com/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/)
- PM2.5 & PM10 — [Grove HM3301](https://wiki.seeedstudio.com/Grove-Laser_PM2.5_Sensor-HM3301/)
- CO, NO₂, C2H5CH and VOC — [Multichannel Gas Sensor V2](https://wiki.seeedstudio.com/Grove-Multichannel-Gas-Sensor-V2/)

### Deployment
{{< figure src="/img/works/14_SOSE25_IoT/deploy.png" alt="Box Process" caption="Figure 3. Equipment" class="mx-auto w-full md:w-4/5 lg:w-2/3" >}}

In order to protect the system and its sensors, we designed a 3D equipment box and fabricated it using 3D printing. The system was deployed in the BIM Lab (Room 4170) and operated for one week of data collection (10–17 July).

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
  <figure class="m-0">
    <img src="/img/works/14_SOSE25_IoT/bim_lab2.png" alt="BIM Lab (Room 4170)" style="width:100%;height:auto;">
    <figcaption>Figure 4. Deployment</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/img/works/14_SOSE25_IoT/bim_lab1.png" alt="Our Sensor System in BIM Lab" style="width:100%;height:auto;">
    <figcaption>Figure 5. BIM Lab (Room 4170)</figcaption>
  </figure>
</div>

### Validation
The dashboard aggregates a Cesium 3D context with time‑series charts and a comfort index, enabling spatiotemporal exploration of indoor conditions. Validation shows the system captures real‑world dynamics. A rain event on 16.07 aligns with a temperature drop and humidity spike; on 11–12.07, CO/NO₂ rise with occupancy/ventilation.

{{< figure src="/img/works/14_SOSE25_IoT/validation1.png" alt="Rain Event" caption="Figure 6. Rain event – temperature drop and humidity spike (UTC)" class="mx-auto w-full md:w-4/5 lg:w-2/3" >}}

{{< figure src="/img/works/14_SOSE25_IoT/validation2.png" alt="Occupancy Gas" caption="Figure 7. Occupancy/ventilation – CO and NO₂ increase (UTC)" class="mx-auto w-full md:w-4/5 lg:w-2/3" >}}

### Conclusion
Current limits are a single node and sparse activity records. The present system already delivers LoRaWAN monitoring with a FROST + Cesium analytics pipeline for spatiotemporal visualization. Next steps are refined placement, multi‑room switching, and door/window or occupancy signals, then evaluating control actions (smart glass/ventilation) with proper response timing.