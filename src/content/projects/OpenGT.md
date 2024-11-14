---
sort: 10
title: "OpenGT"
description: "Automotive Tuning and Data-logging apps for Android"
updatedDate: "2016"
status: "work in progress"
cardIcon: "software"
---

OpenGT is a suite of Android apps for data-logging and tuning a Mitsubishi 3000GT equipped with a tuneable ECU by using the Tactrix Openport tuning cable. The Tactrix hardware uses a proprietary USB protocol, but I've managed to reverse engineer most of it.

## Implementation
The core of OpenGT is a JNI (Java native) library that communicates with the tuning cable and implements the ECU communications. I initially implemented this in Java, but it was just too slow to keep up with the massive amounts of data.

The UI is a typical Android app, implemented in Xamarin (outdated), which uses the JNI library to filter the data for display and logging.

## Status
The logging UI has been implemented, but tuning is still in progress. As the target automobile is nearly always unregistered and/or non-functional, I have had little motivation to finish the project.