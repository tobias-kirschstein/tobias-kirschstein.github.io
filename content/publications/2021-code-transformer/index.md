+++
title = 'Language-agnostic representation learning of source code from structure and context'
conference = 'ICLR 2021'
date = 2021-06-01
authors = [ 'Daniel Zügner', 'Tobias Kirschstein', 'Michele Catasta', 'Jure Leskovec', 'Stephan Günnemann']
cover1 = 'cover.jpg'
bibtex = 'zuegner2021codetransformer.bib'

[[links]]
name = 'Paper'
url = 'https://arxiv.org/pdf/2103.11318.pdf'

[[links]]
name = 'Video'
url = 'https://iclr.cc/virtual/2021/poster/2838'

[[links]]
name = 'Code'
url = 'https://github.com/danielzuegner/code-transformer'

[[links]]
name = 'Demo'
url = 'http://code-transformer.org/'

[[links]]
name = 'Slides'
url = 'https://iclr.cc/media/iclr-2021/Slides/2838.pdf'

+++

We present CodeTransformer, which combines source code (Context) and parsed abstract syntax trees (ASTs; Structure) for representation learning on code.
Code and Structure are two complementary representations of the same computer program, and we show the benefit of combining both for the task of method name prediction.
To achieve this, we propose an extension to transformer architectures that can handle both graph and sequential inputs.