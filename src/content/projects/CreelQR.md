---
sort: 5
title: "CreelQR"
description: ".NET QR Code Library"
updatedDate: 2024-11-19
lastActiveDate: "2018"
status: "work in progress"
cardIcon: "software"
---

CreelQR is a .NET library for generating QR Codes. Many previous libraries seem to be ported from a certain existing implementation that basically uses strings for all of its data storage, leading to very inefficient .NET adaptations. This library implements the QR Code from scratch according to the documentation and by using efficient data structures and algorithms.

The library provides an abstraction for rendering the output, as well as example implementations for Bitmap and similar. The library is also covered by unit tests, and there is an ascii renderer implemented for testing.

## Status
The library is basically done and tested, but there is a bug in my polynomial long division code, which results in a divide-by-zero error. I think I need to educate myself better on this topic before fixing it.
