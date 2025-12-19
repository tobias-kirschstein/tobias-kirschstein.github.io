+++
title = 'FlexAvatar: Learning Complete 3D Head Avatars with Partial Supervision'
conference = 'arXiv 2025'
date = 2025-12-01
authors = [ 'Tobias Kirschstein', 'Simon Giebenhain', 'Matthias Nießner']
cover1 = 'cover.jpg'
cover2 = 'cover.mp4'
bibtex = 'kirschstein2025flexavatar.bib'

[[links]]
name = 'Project'
url = 'https://tobias-kirschstein.github.io/flexavatar/'

[[links]]
name = 'Paper'
url = 'https://arxiv.org/pdf/2512.15599'

[[links]]
name = 'Video'
url = 'https://youtu.be/g8wxqYBlRGY'
+++

FlexAvatar creates high-quality and complete 3D head avatars from as few as a single input image. Creating a new avatar only takes 2 minutes and the result can be animated and viewed in real-time. To achieve effective joint training on both monocular and multi-view video datasets, we introduce bias sinks. These are learnable tokens that indicate from which dataset a training sample comes from. During inference, we always use the multi-view token. This design combines the generalizability from monocular data and the completeness of multi-view data.  