---
sort: 10
title: "OpenGT"
description: "Automotive Tuning and Data-logging apps for Android"
updatedDate: "2016"
status: "work in progress"
heroImage: "/logo.svg"
---

<div class="projectSection">
<p>OpenGT is a suite of Android appa for data-logging and tuning a Mitsubishi 3000GT equipped with a tuneable ECU by using the Tactrix Openport tuning cable. The Tactrix hardware uses a proprietary USB protocol, but I've managed to reverse engineer most of it.</p>
<h2>Implementation</h2>
<p>The core of OpenGT is a JNI (Java native) library that communicates with the tuning cable and implements the ECU communications. I initially implemented this in Java, but it was just too slow to keep up with the massive amounts of data.</p>
<p>The UI is a typical Android app, implemented in Xamarin (outdated), which uses the JNI library to filter the data for display and logging.</p>

<h2>Status</h2>
<p>The logging UI has been implemented, but tuning is still in progress. As the target automobile is nearly always unregistered and/or non-functional, I have had little motivation to finish the project.
</p>
</div>
