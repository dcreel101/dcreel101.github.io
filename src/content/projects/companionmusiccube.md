---
sort: 3
title: "Companion Music Cube"
description: "Silver pendant that plays a song"
updatedDate: "2014"
status: "Completed"
heroImage: "/cube.jpg"
mediaFolder: "cube"
---

<div class="projectSection">
    <p>This project is a pendant made of silver that contains a tiny speaker, some electronics, a button, and
        rechargeable batteries. It looks like a Companion Cube from the game Portal, and it plays a single song from the
        game. The pendant is waterproof, including the speaker, button, and charging contacts. Later on, I also made a
        charging base in the style of the incinerator where you're forced to destroy the cube in the game. It has a
        backlight that looks like fire while it is charging.</p>
    <p>To use it, you basically press the heart-shaped button and put the heart on the opposite side close to your ear,
        and you'll hear the song stored in the cube. You can press again to stop it before it's finished. I don't think
        of this as a limitation, but more of the style I wanted from the beginning - an intimate experience. However, it
        is also a natural consequence of having thick silver walls, a tiny speaker, and waterproofing. The sound can
        only exit a small hole with a sealed waterproof speaker behind it.</p>
    <h2>Cube Electronics</h2>
    <p>The processor is an Atmel AVR ATTiny44 with 4KB FLASH and 0.25KB RAM running at 8MHz, and the storage for the
        song is an SST25V series 2MB FLASH chip. Those two are mounted on opposite sides of a very small custom PCB. The
        first one was a very ugly hand-made prototype, but afterwards I did a real layout and had it fabricated. The
        PCB, speaker, button, batteries, and wiring all need to fit into a 2cm cube, so space is valuable.</p>
    <h2>Cube Case</h2>
    <p>The interior space of the cube is 2cm^3 and is packed full of parts, and the walls are around 1.6mm thick if I'm
        not mistaken, meaning it's pretty heavy for a necklace. It's designed in such a way that it can fit a pretty
        hefty chain through the eye loop, at least.</p>
    <p>Initially, I 3D printed it and then tried to lost-plastic cast it in silver myself (see media). I was not very
        successful because the walls were thin and they cooled too quickly in my equipment, and ended up incomplete in a
        couple of places. I ended up getting a company to do it for me with 3D printed lost-wax casting.</p>
    <h2>Charging Base</h2>
    <p>The charging base was added later. Initially, the cube did not have rechargeable batteries. Later on, I decided
        that it could be tricky for someone unfamiliar with the design to open the case and replace the batteries if
        case I am not around to do it, so I switched to rechargeables with all of the charging circuitry being in the
        base. There is no change it would fit inside the case without going to QFN or BGA packages and doing a
        completely custom
        PCB with the charger onboard with the processor and FLASH.</p>
    <p>The charger connects to isolated screws in the case via homemade spring-pin contacts (I could not easily get pogo
        pins at the time). When the cube is placed on the charger, the charger LEDs flicker like flames (thanks to my
        reusable candlelight algorithm), much like in the game when the player is forced to destroy the beloved
        companion cube.
        When charging is complete, the flames go out.</p>
</div>