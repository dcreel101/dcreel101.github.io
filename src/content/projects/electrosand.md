---
sort: 0
title: "Electrosand"
description: "Kinetic sand art table, powered by ESP32 and Ikea"
updatedDate: "2023-5-16"
status: "Deployed"
heroImage: "/electrosand.jfif"
---

<div class="projectSection">
<p>Electrosand is a kinetic sand art table built into an Ikea side table with a glass top. The table has two MDF platforms below the glass: one for holding the sand and another for mounting the mechanical components. The system includes a SCARA arm, RGB LED lighting, and a magnet for dragging a steel ball to create patterns in the sand.</p>

<h2>Idea</h2>
<p>
The idea is not my own - I was inspired by a random post somewhere on the internet. I was staying in a Coliving/Sharehouse at the time, and I thought
it would be pretty cool to have one around the common areas, so I decided to design and build my own version. I even thought I could make a retrofit kit for other DIY'ers to build their own with, but Ikea discontinued the table shortly after I finished the design.</p>
<p>

<h2>Design and Fabrication</h2>
<p>The project uses two laser-cut MDF pieces made at FabLab Zurich. The upper MDF holds the sand, while the lower one mounts the mechanical parts, including a SCARA arm made from random aluminum rails I already had. The arm is driven by timing belts, pulleys, and stepper motors (TMC2209 drivers). A slip ring allows motor and sensor wiring to rotate with the arm. Some of the mechanical parts are 3D printed, and those were also made at FabLab Zurich.</p>
<p>Actually, the upper MDF is two half circles, because I was traveling by motorcycle and it wouldn't otherwise fit in my backpack. The lower MDF has a concave star shape, which was able to fit in one piece.</p>
<p>I ended up doing most of the design and coding while hanging out in the common areas of the Coliving in the evenings, so it took a few months altogether.</p>

<h2>Lighting System</h2>
<p>A ring of individually addressable RGB LEDs (WS2811) is mounted below the tabletop and shines onto the sand. There are some predefined patterns, as well as random patterns with random colors. The speed can ramp up and down for each pattern, but it can be distracting to some people.</p>

<h2>Electronics and Control</h2>
<p>The system uses an ESP32 module for controlling the SCARA arm and performing other functions related to drawing on the sand. One cool feature I added was Alexa integration via MQTT, so it could be controlled by voice commands, but this feature has been deprecated. You could say, for example: 'Hey Alexa, tell sand table to draw Scooby Doo.'.
Now it can be controlled via Bluetooth BLE via a custom Android app, and an SD card slot allows for pattern files (GCODE, Theta-Rho) and settings files (JSON) to be loaded and easily modified externally.</p>

<h2>Manual Control</h2>
<p>Two wooden knobs and three LEDs on the tabletop allow performing various actions like skipping the current pattern or manually controlling the arm like an Etch-a-Sketch. The LEDs indicate different possible actions using blinking patterns, and the actions are executed by clicking the knobs.</p>

<h2>Key Features</h2>
<ul>
    <li>SCARA arm with stepper motors and home position sensors</li>
    <li>Individually addressable RGB LED lighting</li>
    <li>ESP32-based control system with WiFi and BLE</li>
    <li>SD card support for pattern files and settings files</li>
    <li>Manual control with knobs and LED feedback</li>
</ul>

<h2>Software</h2>
<p>The software was initially based on the open-source RBotFirmware project, but with my own added features like Alexa integration, scheduled tasks (auto-off, auto-erase, etc), and Bluetooth control. I have since completely rewritten the software to improve efficiency and reliability. Most dynamic memory allocation has been eliminated, and strings (especially Arduino strings) are not used where primitive types like enums are more appropriate. I also rewrote the motion control system to use OS primitives like queues and events, and to better support the manual drawing mode.</p>

<h2>Links and Downloads</h2>
<ul>
    <li><a href="https://github.com/dcreel101/electrosand" target="_blank">GitHub Repository (might be private)</a></li>
    <li><a href="https://github.com/robdobsn/RBotFirmware" target="_blank">RBotFirmware</a></li>
</ul>
</div>
