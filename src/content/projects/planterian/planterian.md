---
sort: 2
title: "Planterian"
description: "LoRaWAN Garden Monitoring Device"
updatedDate: "2019"
status: "prototype"
heroImage: "prototype.jpg"
---

<div class="projectSection">
<p>Planterian is a garden or potted plant monitoring device designed to measure key environmental parameters and transmit the data via LoRaWAN. The device has a long battery life (3+ years) and does not require WiFi, Bluetooth, or frequent manual data collection via an app. Although it was developed with a focus on efficiency and the potential for community-driven monitoring and management, it has a whimsical design that goes well with any garden: that of a red and white-spotted mushroom.</p>

<h2>Features</h2>
<ul>
    <li>LoRaWAN connectivity for long-range, low-power data transmission</li>
    <li>Soil moisture measurement at two different depths</li>
    <li>Ambient light sensor</li>
    <li>Diffuse LED for non-intrusive status indication</li>
    <li>Air temperature and humidity measurement</li>
    <li>Soil temperature measurement</li>
    <li>3+ year battery life without needing recharging</li>
    <li>Organic and whimsical exterior concealing a space-saving and weather-resistant mechanical design</li>
</ul>

<h2>Idea</h2>
<p>
The original idea was proposed by a coworker at the time, and it grew as a result of many lunchtime conversations among 3 of us. The finished product would integrate with a comprehensive website (and accompanying app) to allow monitoring, alerts, and community interaction.</p>

<h2>Hardware</h2>
<p>The device is powered by an ATMega RISC processor, with a LoRa transceiver module for communication. This combination allows for low-power operation and reliable data transmission. The current prototype periodically sends data through LoRaWAN, using TheThingsNetwork for cloud communication.</p>

<h2>Software</h2>
<p>The prototype system includes a basic Android app that displays recent data sent from the garden monitoring device. However, the app remains in the early stages of development, and more comprehensive features, such as historical data viewing, alerts, and community interaction, are planned for future iterations.</p>

<h2>Status</h2>
<p>A basic working prototype is completed, capable of measuring all intended parameters and sending the data via LoRaWAN. The hardware is functional, and the system successfully reports data periodically. The prototype Android app provides a minimal interface for viewing recent sensor data, but further development is needed.</p>

<h2>TODO</h2>
<ul>
    <li>Add a MAC chip to simplify joining the LoRa backend</li>
    <li>Create a full-featured website with monitoring, alerts, and community-based features</li>
    <li>Develop a real mobile app for data visualization and alerts</li>
    <li>Scale up production with injection-molded enclosure parts</li>
</ul>

</div>
