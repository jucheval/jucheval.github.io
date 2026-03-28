# Detailed KMT Construction (Wiener-Poisson Pairing)

This note follows the section **"Construction of paired Wiener and Poisson processes"** from the arXiv source in [_posts/arXiv/after_revision_final.tex](_posts/arXiv/after_revision_final.tex), and rewrites the construction in a step-by-step form.

## 1. Objective and Setting

We want to construct, on the same probability space, a discretized Wiener path and a discretized Poisson path that are strongly coupled.

Work on a grid:

$$
\{0,\Delta,2\Delta,\ldots,n\Delta\},\qquad n=2^K.
$$

Given i.i.d. standard normal increments $\bar W_0,\ldots,\bar W_{n-1}$, define Wiener partial sums (with $T_0=0$):

$$
T_k = \sum_{i=0}^{k-1} \bar W_i, \qquad k=1,\ldots,n.
$$

We seek standardized Poisson increments $\bar N_0,\ldots,\bar N_{n-1}$ with partial sums (with $S_0=0$)

$$
S_k = \sum_{i=0}^{k-1} \bar N_i,
$$

such that $(S_k)$ is coupled to $(T_k)$ with KMT-type logarithmic maximal error.

Then the physical (non-standardized) processes are reconstructed as

$$
N(k\Delta) = \sum_{i=0}^{k-1}\left(\sqrt\Delta\,\bar N_i + \Delta\right),
\qquad
W(k\Delta) = \sum_{i=0}^{k-1}\left(\sqrt\Delta\,\bar W_i + \Delta\right).
$$

### Rademacher Translation

In the toy model from the post, replace standardized Poisson increments by Rademacher increments:

$$
X_i\in\{-1,1\},\qquad \mathbb P(X_i=1)=\mathbb P(X_i=-1)=\tfrac12,
$$

and fix the discrete time step to

$$
\Delta=1.
$$

and define

$$
S_k=\sum_{i=0}^{k-1}X_i.
$$

The Wiener side still starts from Gaussian increments $\bar W_i\sim\mathcal N(0,1)$ and

$$
T_k=\sum_{i=0}^{k-1}\bar W_i.
$$

So the pairing target is now $(S_k,T_k)$ directly, without Poisson centering/scaling.

## 2. Dyadic Notation Used in the Paper

The section introduces dyadic block-sum notation for Wiener partial sums $T_k$.

### 2.1 Main block sums

$$
V_j = T_{2^j}, \qquad j=0,1,\ldots,K.
$$

Interpretation: $V_j$ is the Wiener sum over the first block of length $2^j$.

### 2.2 Shifted block sums

$$
V_{j,k} = T_{(k+1)2^j} - T_{k2^j}.
$$

Interpretation: $V_{j,k}$ is the Wiener sum over dyadic block $[k2^j+1,(k+1)2^j]$.

For fixed $j$, the valid range is typically

$$
k=0,1,\ldots,2^{K-j}-1,
$$

with some matrix layouts in the paper using shifted labels and zero padding for convenience.

### 2.3 Dyadic left-right contrasts

$$
\tilde V_{q,k} = V_{q-1,2k} - V_{q-1,2k+1}.
$$

Interpretation: at scale $q$, this is the difference between neighboring child blocks (left minus right), each of length $2^{q-1}$.

These contrasts are central because the KMT recursion couples conditional distributions of the analogous Poisson quantities given parent sums.

### Rademacher Translation

The Wiener notation is unchanged. In the toy case, use the same dyadic structure for the random walk partial sums:

$$
U_{j,k}=S_{(k+1)2^j}-S_{k2^j},
\qquad
\tilde U_{q,k}=U_{q-1,2k}-U_{q-1,2k+1}.
$$

Only the law of $U_{j,k}$ changes: it is a centered binomial sum of $2^j$ Rademacher variables, not a centered/scaled Poisson increment sum.

## 3. Analogous Poisson-Side Quantities

Define

$$
U_j = S_{2^j},
\qquad
U_{j,k} = S_{(k+1)2^j} - S_{k2^j},
\qquad
\tilde U_{q,k} = U_{q-1,2k} - U_{q-1,2k+1}.
$$

Unknowns are the Poisson objects $(U_{j,k})$ (hence $(\bar N_i)$), and they are generated from the known Wiener-side objects $(V_{j,k},\tilde V_{q,k})$ through quantile maps.

### Rademacher Translation

In the toy construction, the same symbols $U_j,U_{j,k},\tilde U_{q,k}$ are kept, but they are built from $X_i\in\{-1,1\}$:

$$
U_{0,k}=X_k,\qquad U_{j,k}=\sum_{i=k2^j}^{(k+1)2^j-1}X_i.
$$

Hence $U_{j,k}$ takes values in

$$
\{-2^j,-2^j+2,\ldots,2^j-2,2^j\},
$$

with parity constraint matching $2^j$.

## 4. Distribution Functions and Quantile Maps

For each scale, define:

$$
F_j(x)=\mathbb P(U_j < x),
\qquad
G_j(t)=\sup\{x: F_j(x)\le t\}.
$$

For conditional contrasts:

$$
F_q(x\mid y)=\mathbb P(\tilde U_{q,k}<x\mid U_{q,k}=y),
\qquad
G_q(t\mid y)=\sup\{x:F_q(x\mid y)\le t\}.
$$

In the Poisson specialization of the section, $F_j$ corresponds to a centered/scaled Poisson law with parameter $2^j\Delta$.

### Rademacher Translation

For the toy model, replace Poisson CDFs by random-walk CDFs:

$$
F_j(x)=\mathbb P\!\left(U_j\le x\right),
$$

where $U_j$ is a $2^j$-step Rademacher sum. Conditionally, $F_q(\cdot\mid y)$ is the law of left-right difference given the parent block sum equals $y$ (a hypergeometric-type discrete law).

The quantile maps $G_j$ and $G_q(\cdot\mid y)$ are still defined as generalized inverses and applied exactly the same way.

## 5. Construction Logic (Hungarian/Dyadic Recursion)

The coupling is not pointwise-increment quantile matching. It is a **multiscale conditional quantile construction**:

1. Couple coarse block sums first.
2. At each finer level, couple block contrasts conditionally on already fixed parent block sums.
3. Recover left/right child block sums from parent sum and contrast.
4. Continue until level $j=0$, where block sums are single standardized increments.

This is exactly the mechanism that produces the logarithmic maximal deviation scale.

### Rademacher Translation

The recursion is identical in structure:

1. Couple the top random-walk block sum with the top Gaussian block sum by one quantile variable.
2. Descend level by level.
3. At each node, couple conditional left-right splits through one new uniform variable.
4. Recover both children by sum/difference constraints.

What changes from Poisson to Rademacher is only the discrete laws used inside the quantile transforms.

## 6. Explicit Recursion in Formulas

Given $U_{j,k}$ at some level and position, define

$$
\tilde U_{j,k} = G_j\!\left(\Phi\!\left(2^{-j/2}\tilde V_{j,k}\right)\mid U_{j,k}\right),
$$

where $\Phi$ is standard normal CDF.

Then recover children by sum-difference inversion:

$$
U_{j-1,2k} = \frac12\left(U_{j,k} - \tilde U_{j,k}\right),
\qquad
U_{j-1,2k+1} = \frac12\left(U_{j,k} + \tilde U_{j,k}\right).
$$

(Depending on sign convention for $\tilde U_{j,k}$, the two formulas may swap. The paper uses one fixed convention consistently with its definition of $\tilde U_{j,k}$.)

For first-column/coarse initializations, the section also states quantile assignments which in 0-based style read

$$
U_{j,0} = G_j\!\left(\Phi\!\left(2^{-j/2}V_{j,0}\right)\right),
$$

plus base initialization for the very first increment.

### Rademacher Translation

In the toy model, this is the same formula-level recursion used by [assets/js/kmt_quantile_transport.js](assets/js/kmt_quantile_transport.js):

$$
\text{left walk child }\sim \mathcal L\big(U_{j-1,2k}\mid U_{j,k}\big),
$$

with quantile argument inherited from Gaussian-side normalized contrast $2^{-j/2}\tilde V_{j,k}$, then right child obtained by additivity:

$$
U_{j-1,2k+1}=U_{j,k}-U_{j-1,2k}.
$$

So the algorithmic skeleton is unchanged; only the conditional table is binomial/hypergeometric rather than Poisson-based.

## 7. Matrix View from the Section

The section stores Wiener block data in a matrix $\mathbb V$ and contrast data in $\tilde{\mathbb V}$:

1. Rows correspond to scale.
2. Columns correspond to block index.
3. Missing entries at coarse scales are padded by zero in displayed tables.

Poisson-side matrices $\mathbb U$ and $\tilde{\mathbb U}$ have the same structure and are filled recursively from coarse to fine.

This matrix organization is only an implementation convenience; mathematically, the construction is the dyadic tree recursion above.

### Rademacher Translation

For the toy case, the same matrix organization can be used:

1. $\mathbb V,\tilde{\mathbb V}$ from Gaussian increments.
2. $\mathbb U,\tilde{\mathbb U}$ from Rademacher block sums.
3. Fill coarse-to-fine by conditional quantile recursion.

The current JS animation stores this information as a level dictionary (tree by scales) rather than explicit dense matrices, but it is mathematically equivalent.

## 8. End Product

After recursion reaches $j=0$:

$$
U_{0,k} = \bar N_k,
$$

so all standardized Poisson increments are obtained. Then construct the paired paths

$$
S_k=\sum_{i=0}^{k-1}\bar N_i,
\qquad
T_k=\sum_{i=0}^{k-1}\bar W_i,
$$

and finally $(N(k\Delta),W(k\Delta))$ via the affine rescaling in Section 1.

### Rademacher Translation

In the toy model, once level $j=0$ is complete, we obtain directly

$$
U_{0,k}=X_k\in\{-1,1\},
$$

with the same convention $\Delta=1$, so time is indexed directly by integer steps $k$.

hence

$$
S_k=\sum_{i=0}^{k-1}X_i,
\qquad
T_k=\sum_{i=0}^{k-1}\bar W_i.
$$

After scaling by $\sqrt n$, these produce the coupled paths shown in the animation.

## 9. Why These Notations Matter

The three families

$$
V_j,\quad V_{j,k},\quad \tilde V_{q,k}
$$

encode exactly what the recursive coupling needs:

1. coarse sums ($V_j$),
2. local block sums ($V_{j,k}$),
3. left-right contrasts ($\tilde V_{q,k}$).

KMT strength comes from coupling these quantities at every dyadic scale through conditional quantiles, rather than only coupling one-step increments independently.

### Rademacher Translation

In the toy case this point is especially transparent: independent one-step quantile coupling would accumulate error like $\sqrt n$, while dyadic conditional coupling controls errors across only $\log_2 n$ scales, yielding the sharp logarithmic behavior for maximal path discrepancy.

## 10. Practical Indexing Note

The source mixes 0-based and 1-based display conventions in text/tables. A robust implementation should choose one convention (usually 0-based for code) and enforce:

$$
0\le j\le K,\qquad 0\le k\le 2^{K-j}-1,
$$

with child indices $(2k,2k+1)$ always interpreted at the next finer level.

### Rademacher Translation

The same indexing rule is used in the toy implementation:

$$
\text{levels } j=m,m-1,\ldots,0,\qquad k=0,\ldots,2^{m-j}-1,
$$

with children $(2k,2k+1)$ and terminal leaves $U_{0,k}=X_k$. This is exactly the code-style convention used by the animation logic.
