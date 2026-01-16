---
layout: distill
title: Coupling for point processes
date: 2025-12-14
description: introduction to two methods used to represent and couple point processes
tags: makie coupling point-process
categories: probability
bibliography: posts.bib
featured: true
---

For several years, I have been studying and teaching the theory of point processes. Over the years, I have made up and improved several visualizations of key results and concepts. Two of them are detailed below.

Ogata's thinning, a.k.a. Poisson embedding, has accompanied me since the beginning of my mathematical research. Mathematical details about this result can be found in Section 14.7 of (Daley and Vere-Jones, 2008)<d-cite key="daley2008introduction"></d-cite>. I made a video to present how it can be used as a simulation and a coupling tool. 

<div style="text-align: center;">
{% include video.liquid path="https://www.youtube.com/embed/jSYkYP0qm5g" class="img-fluid rounded z-depth-1" %}
</div>

Time change is a general tool for stochastic processes and so in particular for temporal point processes. For continuous processes, it is also known as [Dubbins-Schwarz theorem](https://en.wikipedia.org/wiki/Dubins–Schwarz_theorem). Mathematical details about this result (in the context of point processes) can be found in Section II.5.2.3 of (Gill et al., 1997)<d-cite key="gill1997statistical"></d-cite>. I made a video to present how it can be used as a simulation and a coupling tool. 

<div style="text-align: center;">
{% include video.liquid path="https://www.youtube.com/embed/1k4S1GcfB44" class="img-fluid rounded z-depth-1" %}
</div>

The animations used in both videos are made thanks to [Makie.jl](https://docs.makie.org/stable/). Their source code (amongst lots of other stuff) can be found in [the slides I used for my HDR defense](https://github.com/jucheval/HDR/blob/ef36c24a25e02db1cf1fec56e566c6015592eec3/notebooks/slides.jl).