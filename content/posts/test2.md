---
title: "TikZ test"
description: "Testing TikZ-cd"
publishDate: "23 August 2026"
tags: ["test"]
---

# TikZ test

This is a diagram:

```tikzcd
A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
C \arrow[r,"k"'] & D
```

And this one:

```tikzcd
\begin{tikzcd}
I1 & true \\
I2 & true \arrow[u, no head] \\
A  & true \arrow[u, no head]
\end{tikzcd}
```

And ordinary mathematics remains:

$\varphi$

$$
\varphi = \frac{1}{2}
$$
