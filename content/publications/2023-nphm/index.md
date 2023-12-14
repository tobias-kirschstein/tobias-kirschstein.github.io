+++
title = 'NPHM: Learning Neural Parametric Head Models'
conference = 'CVPR 2023'
date = 2023-06-01
authors = [ 'Simon Giebenhain', 'Tobias Kirschstein', 'Markos Georgopoulos', 'Martin Rünz', 'Lourdes Agapito', 'Matthias Nießner' ]
cover1 = 'cover.jpg'
cover2 = 'cover.mp4'
bibtex = 'giebenhain2023nphm.bib'

[[links]]
name = 'Project'
url = 'https://simongiebenhain.github.io/NPHM/'

[[links]]
name = 'Paper'
url = 'https://simongiebenhain.github.io/NPHM/static/NPHM.pdf'

[[links]]
name = 'Video'
url = 'https://www.youtube.com/watch?v=0mDk2tFOJCg'

[[links]]
name = 'Code'
url = 'https://github.com/SimonGiebenhain/NPHM#learning-neural-parametric-head-models-nphm'

[[links]]
name = 'Dataset'
url = 'https://forms.gle/66xWfAxzCvsoqcNZ8'
+++

NPHM is a field-based neural parametric model for human heads, which represents identity geometry implicitly in a cononical space and models expressions as forward deformations.
The SDF in canonical space is represented as an ensemble of local MLPs centered around facial anchor points.
To train our model, we capture a large dataset of complete head geometry containing over 250 people in 23 expressions each, using high quality structured light scanners.