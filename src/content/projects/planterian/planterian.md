---
sort: 2
title: "Planterian"
description: "LoRaWAN Garden Monitoring Device"
updatedDate: "2019"
status: "prototype"
heroImage: "prototype.jpg"
---

Planterian is a garden or potted plant monitoring device designed to measure key environmental parameters and transmit the data via LoRaWAN. The device has a long battery life (3+ years) and does not require WiFi, Bluetooth, or frequent manual data collection via an app. Although it was developed with a focus on efficiency and the potential for community-driven monitoring and management, it has a whimsical design that goes well with any garden: that of a red and white-spotted mushroom.

## Features
  * LoRaWAN connectivity for long-range, low-power data transmission
  * Soil moisture measurement at two different depths
  * Ambient light sensor
  * Diffuse LED for non-intrusive status indication
  * Air temperature and humidity measurement
  * Soil temperature measurement
  * 3+ year battery life without needing recharging
  * Organic and whimsical exterior concealing a space-saving and weather-resistant mechanical design

## Idea
The original idea was proposed by a coworker at the time, and it grew as a result of many lunchtime conversations among 3 of us. The finished product would integrate with a comprehensive website (and accompanying app) to allow monitoring, alerts, and community interaction.

## Hardware
The device is powered by an ATMega RISC processor, with a LoRa transceiver module for communication. This combination allows for low-power operation and reliable data transmission. The current prototype periodically sends data through LoRaWAN, using TheThingsNetwork for cloud communication.

## Software
The prototype system includes a basic Android app that displays recent data sent from the garden monitoring device. However, the app remains in the early stages of development, and more comprehensive features, such as historical data viewing, alerts, and community interaction, are planned for future iterations.

## Status
A basic working prototype is completed, capable of measuring all intended parameters and sending the data via LoRaWAN. The hardware is functional, and the system successfully reports data periodically. The prototype Android app provides a minimal interface for viewing recent sensor data, but further development is needed.

## TODO
  * Add a MAC chip to simplify joining the LoRa backend
  * Create a full-featured website with monitoring, alerts, and community-based features
  * Develop a real mobile app for data visualization and alerts
  * Scale up production with injection-molded enclosure parts
