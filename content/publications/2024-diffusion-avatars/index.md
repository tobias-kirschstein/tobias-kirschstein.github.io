+++
title = ' DiffusionAvatars: Deferred Diffusion for High-fidelity 3D Head Avatars'
conference = 'CVPR 2024'
date = 2024-06-03
authors = [ 'Tobias Kirschstein', 'Simon Giebenhain', 'Matthias Nießner' ]
cover1 = 'cover.jpg'
cover2 = 'cover.mp4'
bibtex = 'kirschstein2024diffusionavatars.bib'

[[links]]
name = 'Project'
url = 'https://tobias-kirschstein.github.io/diffusion-avatars/'

[[links]]
name = 'Paper'
url = 'https://arxiv.org/pdf/2311.18635.pdf'

[[links]]
name = 'Video'
url = 'https://youtu.be/nSjDiiTnp2E'

[[links]]
name = 'Code'
url = 'https://github.com/tobias-kirschstein/diffusion-avatars'
+++

DiffusionAvatar uses diffusion-based, deferred neural rendering to translate geometric cues from an underlying neural parametric head model (NPHM) to photo-realistic renderings.
The underlying NPHM provides accurate control over facial expressions, while the deferred neural rendering leverages the 2D prior of StableDiffusion, in order to generate compelling images.