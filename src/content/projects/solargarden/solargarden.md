---
sort: 1
title: "Solar Garden"
description: "Solar-powered Japanese garden fountain and Buddhist stone lantern with WiFi control"
updatedDate: "2017"
status: "demolished"
heroImage: "solargarden.png"
mediaFolder: "solargarden"
---

<div class="projectSection">
    <p>This project is a solar-powered fountain and lantern designed in a traditional Japanese style. The fountain
        consists of water pouring from a bamboo spout onto a large stone, giving the illusion that the water disappears
        into the ground after it runs over the stone. The lantern is a Buddhist five-tiered stone lantern, illuminated by internal lights to create a soft,
        diffused glow.</p>
    <h2>Aesthetics</h2>
    <p> The fountain features a large stone, weighing about 80kg, which I acquired in the Swiss mountains. It is placed on a
        bed of smaller stones, mostly white and gray, with a few smooth black stones for contrast. The water pours from
        a bamboo spout onto the stone, then flows into a basin hidden below the bed of stones, where the pump is also located.</p>
    <p> The lantern is an authentic five-level stone lantern with small wooden window panes. Inside the lantern, I
        installed LED lights and white backgrounds behind the window panes to diffuse the light, giving the sense of lit candles behind rice paper doors.</p>
    <p>I eventually made myself a desktop version of the fountain as well (see Media).</p>
    <h2>Electronics and Control</h2>
    <p>The system is controlled by an ESP8266 module, allowing remote control via WiFi and MQTT. The controller manages
        the water pump's flow rate and the brightness of the lantern’s lights. The lights can also be set to "candle
        mode," using a custom algorithm to simulate flickering candlelight, which produces a highly realistic effect.
        Additionally, the system includes a scheduling feature that turns the pump and lights on or off at preset times.
    </p>
    <h2>Power System</h2>
    <p>The fountain and lantern are powered by a solar panel that charges a large pack of NiMH batteries. This allows
        the system to run independently without needing mains power in most cases. However, due to occasional
        insufficient sunlight, there is an option to switch to mains power if needed.</p>
    <p> The lights are from an old set of white LED Christmas lights, which are driven by a separate LED driver module.</p>
    <h2>Key Features</h2>
    <ul>
        <li>Traditional Japanese aesthetic with bamboo water fountain and stone lantern</li>
        <li>ESP8266-based control system with WiFi and MQTT for remote control</li>
        <li>Solar-powered with a NiMH battery pack, capable of running on mains power as a backup</li>
        <li>Realistic candlelight simulation using a custom algorithm</li>
        <li>Scheduling system for automatic operation</li>
    </ul>
</div>