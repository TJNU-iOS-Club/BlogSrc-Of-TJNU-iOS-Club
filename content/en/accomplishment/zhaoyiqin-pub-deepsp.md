+++
title = "[Publication] Deep Spectrum Feature Representations for Speech Emotion Recognition"
summary = "Oral paper on ACM Multimedia 2018 ASMMC-MMAC workshop."

date = "2018-10-26T00:00:00+00:00"
tags = ["Publication", "Affective Computing"]
authors = ["zhaoyiqin"]

[header]
image = ""
caption = ""
+++

[Download](https://dl.acm.org/citation.cfm?doid=3267935.3267948)

# Abstract
Automatically detecting emotional state in human speech, which plays an effective role in areas of human machine interactions, has been a difficult task for machine learning algorithms. Previous work for emotion recognition have mostly focused on the extraction of carefully hand-crafted and tailored features. Recently, spectrogram representations of emotion speech have achieved competitive per- formance for automatic speech emotion recognition. In this work we propose a method to tackle the problem of deep features, herein denoted as deep spectrum features, extraction from the spectrogram by leveraging Attention-based Bidirectional Long Short-Term Mem- ory Recurrent Neural Networks with fully convolutional networks. The learned deep spectrum features are then fed into a deep neural network (DNN) to predict the final emotion. The proposed model is then evaluated on the Interactive Emotional Dyadic Motion Cap- ture (IEMOCAP) dataset to validate its effectiveness. Promising results indicate that our deep spectrum representations extracted from the proposed model perform the best, 65.2% for weighted accuracy and 68.0% for unweighted accuracy when compared to other existing methods. We then compare the performance of our deep spectrum features with two standard acoustic feature repre- sentations for speech-based emotion recognition. When combined with a support vector classifier, the performance of the deep feature representations extracted are comparable with the conventional features. Moreover, we also investigate the impact of different fre- quency resolutions of the input spectrogram on the performance of the system.

# Cite
```
@inproceedings{Zhao:2018:DSF:3267935.3267948,
 author = {Zhao, Ziping and Zhao, Yiqin and Bao, Zhongtian and Wang, Haishuai and Zhang, Zixing and Li, Chao},
 title = {Deep Spectrum Feature Representations for Speech Emotion Recognition},
 booktitle = {Proceedings of the Joint Workshop of the 4th Workshop on Affective Social Multimedia Computing and First Multi-Modal Affective Computing of Large-Scale Multimedia Data},
 series = {ASMMC-MMAC'18},
 year = {2018},
 isbn = {978-1-4503-5985-6},
 location = {Seoul, Republic of Korea},
 pages = {27--33},
 numpages = {7},
 url = {http://doi.acm.org/10.1145/3267935.3267948},
 doi = {10.1145/3267935.3267948},
 acmid = {3267948},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {attention mechanism, bidirectional long short-term memory, fully convolutional networks, spectrogram representation, speech emotion recognition},
}
```
