---
sort: 10
title: "Tiny BC"
description: "Tiny turbocharger boost controller"
updatedDate: "2010"
status: "deployed/deprecated"
heroImage: "/logo.svg"
---

<div class="projectSection">
<p>TinyBC is a turbocharger boost controller. I finished the basic functionality and deployed it for a while. However, I later replaced my ECU with a MegaSquirt and used the built-in boost control features instead. That turned out to be problematic due to sensor heat-soaking issues, so I redeployed it and created a nice enclosure. Even later, I replaced the MegaSquirt with a Chrome ECU (tuneable 3000GT ECU), and the TinyBC was finally retired.</p>
<p>Had I continued to use it, I would have implemented a full CAN control system that could integrate with the MegaSquirt and sense multiple physical conditions from the motor itself (spark, knock, fuel injector duty cycle, etc).</p>
</div>
