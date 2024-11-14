---
sort: 10
title: "3S Nugget"
description: "Steering wheel radio controls translator"
updatedDate: "2014"
status: "deployed"
cardIcon: "hardware"
---

3S Nugget is a device that interprets the steering wheel control signals in a Mitsubishi 3000GT VR4 (2nd-gen) to the type of signal commonly used by Android car stereo systems.

## Implementation
The device is implemented in an 8-bit Atmel AVR RISC processor. It interprets incoming signals from the steering wheel controls, which are a proprietary serial protocol that I have reverse engineered using a logic analyzer. It then outputs a variable resistance signal as typically required by common Android car stereos. The device is hands-off and lives behind the dashboard in the car.
