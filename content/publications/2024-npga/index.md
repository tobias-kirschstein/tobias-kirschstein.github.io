+++
title = 'NPGA: Neural Parametric Gaussian Avatars'
conference = 'SIGGRAPH Asia 2024'
date = 2024-12-10
authors = [ 'Simon Giebenhain', 'Tobias Kirschstein', 'Martin Rünz', 'Lourdes Agapito', 'Matthias Nießner' ]
cover1 = 'cover.jpg'
cover2 = 'cover.mp4'
bibtex = 'giebenhain2024npga.bib'

[[links]]
name = 'Project'
url = 'https://simongiebenhain.github.io/NPGA/'

[[links]]
name = 'Paper'
url = 'https://arxiv.org/pdf/2405.19331'

[[links]]
name = 'Video'
url = 'https://www.youtube.com/watch?v=t0S0OK7WnA4&ab_channel=MatthiasNiessner'
+++

NPGA creates an animatable and photo-realistic 3D Gaussian representation from multi-view video recordings of a person's head. The avatar can be animated via NPHM's expression codes.
To obtain high-quality results, NPGA models facial expressions in two ways: NPHM's deformation field models coarse expressions while a second, learnable deformation field models the residual detailed expressions.