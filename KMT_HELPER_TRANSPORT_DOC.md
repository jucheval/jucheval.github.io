# KMT Helper Transport Documentation

## Overview
This page documents the helper module and the helper-based transport visualization:
- `assets/js/kmt_helper.js`
- `assets/html/kmt_coupling.html`

The goal is to animate a dyadic KMT-style coupling between:
- a rescaled random walk `X_n` (always visible), and
- a Brownian path `B` (revealed by levels).

## File Responsibilities

### `assets/js/kmt_helper.js`
Provides reusable numerical and coupling utilities:
- Gaussian CDF approximation: `normal_cdf(x)`
- Brownian simulation with optional seed: `simulateB(...)`
- Dyadic block variables:
  - `computeVj(partialSums)`
  - `computeVjk(partialSums)`
  - `compute_tildeVqk(partialSums)`
- Rademacher quantile maps:
  - `computeRademacherGj(j, t)`
  - `computeRademacherConditionalGq(q, t, y)`
- Full recursive construction from Brownian path:
  - `computeXfromB(path)`

### `assets/html/kmt_coupling.html`
Implements the interactive UI and plotting:
- left panel controls (`n`, next-step button, new seed)
- right Plotly chart
- level-by-level guide-line reveal
- optional final Brownian bridge refinement to `dt = 1/1024`
- a dynamic table under the seed button

## Step Logic
The page alternates two substeps while coupling levels are not finished:
1. show interpolation times (red vertical guides)
2. apply quantile coupling for that level

After all dyadic levels are finished, the button becomes Brownian filling and refines the Brownian path to a full `1/1024` grid by Brownian bridges.

## Interpolation-Time Grouping
Guide lines are grouped by level using the corrected schedule.

Example for `n = 8`:
- level 1: `1, 2, 4`
- level 2: `3, 6`
- level 3: `5, 7`

Gray lines are accumulated history; current level is red.

## Table Behavior
The table has 3 columns in this order:
1. `U` or `Ũ`
2. `prob.`
3. `V` or `Ṽ`

Header switch:
- dyadic level `< 2`: headers are `U`, `V`
- dyadic level `>= 2`: headers are `Ũ`, `Ṽ`

Row semantics:
- Level 1:
  - column 1: random-walk block increments between anchors `[0, guides..., n]`
  - column 3: matching Brownian increments
  - column 2: `Phi(DeltaB / sqrt(Delta t))`
- Levels `>= 2`:
  - column 1: `tildeU`
  - column 3: `tildeV`
  - column 2: `Phi(tildeV / sqrt(2^q))`