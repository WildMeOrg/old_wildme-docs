---
id: ia_pipeline
title: Image Analysis Pipeline
---

As the price of photography and video equipment drops while quality and availability improve (think “GoPro”), images and video from tourism are becoming the most abundant and inexpensive sources of wildlife data. If these images could be widely obtained, rapidly analyzed and combined with related data (e.g., location, date, behavior), then ecologists could benefit from larger and broader data sets to understand and prevent further wildlife population declines. An increase in well managed data input and processing power enables advances in analysis and modeling of animal populations, supporting deeper insight and better methods of protection for threatened and endangered animals.

In support of speeding and scaling wildlife research, Wildbook includes a very sophisticated machine learning (ML) server called [Wildbook Image Analysis (WBIA)](../developers/wbia/wbia_overview) that provides a multi-stage pipeline for finding one or more animals of one or more species in photos and then routing each detected animal on to the correct individual ID algorithm. WBIA also supports a plug-and-play approach to integrating and wrapping third party machine learning (e.g., new ID algorithms emerging from academic research or competitions), allowing WBIA to serve as the easiest and fastest way to get new AI techniques into the hands of wildlife researchers in the field. Ultimately, the purpose of WBIA is to allow users of Wildbook to more rapidly curate large volumes of wildlife photography in support of research and population analysis.

WBIA generally supports the following stages of execution.

## Detection

Our detection pipeline is a cascade of deep convolutional neural networks (DCNNs) that applies a fully-connected classifier on extracted features. Separate networks produce: (1) whole-scene classifications looking for specific species of animals in the photograph, (2) object annotation bounding box localizations, (3) bounding box rotation prediction and normalization, and (4) the viewpoint, quality, and final species classifications for the candidate bounding boxes. In Wildbook, bounding boxes created by WBIA are called "Annotations".

[![wacvDetectionPoster](../../static/img/wacvDetectionPoster.png)](https://cthulhu.dyn.wildme.io/public/posters/parham_wacv_2018.pdf)

*A poster presentation summarizing some of the stages of WBIA's detection pipeline.*

![detection](../../static/img/ia_pipeline_1.png)

*Resulting bounding boxes predicted by WBIA's Detection pipeline after running on a photo of three cheetahs.*

At the end of the Detection stage, WBIA should have created the following in preparation for one or more downstream individual ID algorithms:

- Annotations (i.e. bounding boxes) around each animal in each photo and potentially "parts" bounding boxes, which denote a feature about that animal, such as a fin bounding box "part" on an Orca body bounding box
- species labels on each Annotation
- viewpoint labels (e.g., left, right, top, bottom, etc.) on each Annotation
- OPTIONAL: background segmentation on each Annotation to remove as many non-animal pixels as possible
- OPTIONAL: rotational correct, standardizing the rotation of Annotations to maximize their comparability in downstream ID algorithms

### FAQ

*Can WBIA detect and label any species?*

No. Detection relies on pre-trained ML models, which may be trained on one or more specific species (e.g., a model for snow leopards, a separate model for orcas, and yet a separate model trained on multiple species of finned whales). WBIA provides the tools to manually annotate training data for new species to create these ML models, but this must be done as a pre-cursor to using WBIA for a specific species in Wildbook.

*What does manual annotation look like for ML training for a detector for a new species?*

[Here is a link to an example training video for annotation for a new species.](https://youtu.be/qD7LKWQIfeM)

*What happens if detection doesn't find one or more animals in the photo?*

Even machine learning makes mistakes. If detection doesn't find an animal, [Wildbook allows users to manually annotate the photo to add Annotations and support matching of individuals missed by detection. Click here to learn more.](manual_annotation.md)

*I am a software developer of ML engineer. How can I learn more about WBIA?*

See [Wildbook Image Analysis (WBIA)](../developers/wbia/wbia_overview).

## Identification
The second major computer vision step is Identification, which assigns a name label (or ID) to each annotation from Detection. Depending on the type of detection (e.g., a dolphin fin is labeled differently from a jaguar flank), the Wildbook pipeline routes the Annotation to one or more ID algorithms.

![IA_pipeline](../../static/img/IA_pipeline.png)

*Wildbook has a plug-and-play, configurable computer vision pipeline that allows Annotations for different species and of body parts to be  simultaneously routed to one or more ID algorithms.*

After detection, one or more ID algorithms are run, looking for similar features between a new Annotation and a list of "match against" Annotations already in the database. Scores from the query that match the same individual are accumulated to produce a single potential score for each animal. The animals in the database are then ranked by their accumulated scores.

![identification](../../static/img/ExampleMatch.jpg)

*Wildbook uses a variety of computer vision and machine learning techniques and algorithms to answer the fundamental question: "Which animal is this?" Importantly, new approaches to photo ID using *

Wildbook currently supports at least the following algorithms:

### PIE

“Pose Invariant Embeddings” (or PIE) is a deep learning approach to individual ID. PIE is trained to learn embeddings that are useful for distinguishing among individuals in a wildlife population. Unlike HotSpotter, which is a “static” pattern matcher (i.e. a fixed algorithm not trained for each separate species), PIE can be trained on a per-species basis. Wild Me has generated separate PIE models optimized for manta rays, humpback whales, orcas, right whales, and others. And unlike fixed-catalog classifiers like Deepsense or Kaggle7, PIE can gracefully add new individuals to its catalog without being retrained: it learns the general task of mapping images into embeddings that represent individuals, rather than the specific task of sorting images into a fixed number of IDs. PIE strikes a lovely balance between a flexible general-purpose identifier and one that can be trained and refined on a given problem. In summary, PIE is a very powerful, reusable machine learning technique that can be trained to identify individuals across many species.

Example Wildbook species: Giant manta rays, humpback whale flukes, orcas, right whales.

PIE paper link:https://arxiv.org/pdf/1902.10847.pdf

### Hotspotter

Hotspotter is a SIFT-based computer vision algorithm. It analyzes the textures in an image to find distinct patterning, or "hot spots", and then compares those against other images in the database. Unlike machine learning-based approaches, HotSpotter can help build new catalogs for new species that need to match individuals but don’t have the training data yet for machine learning-based approaches. Hotspotter can also match new individuals without the need for network retraining. Hotspotter produces a ranked list of potential matches, increasing match score with increasing similarity.

Example Wildbook species: jaguars, cheetahs, leopards, African wild dogs, zebras, giraffe, humpback whales.

Hotspotter paper link: http://cs.rpi.edu/hotspotter/crall-hotspotter-wacv-2013.pdf	

### CurvRank

CurvRank is a machine learning-based approach to matching curvature or an “edge”, such as the trailing edge of a cetacean fluke or a dorsal fin. Specifically ML is employed to weight sections of a fin or fluke that contain individually identifying information and to represent the curvature in a comparable format less subject to deformation from changes in the pose of the animal in the image.

Example Wildbook species: humpback whales, sperm whales, bottlenose dolphins, orcas, right whales.

CurvRank paper link: https://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w41/Weideman_Integral_Curvature_Representation_ICCV_2017_paper.pdf

### Deepsense

“Deepsense” is a deep learning approach to identify right whales based on aerial photos of the callosity patterns on their heads. Deepsense is the winning entry from Kaggle competition winner [deepsense.ai](https://deepsense.ai). It is fast and highly accurate, however it must be re-trained when new whales are added to a catalog. Like many deep learning competition winners, this algorithm is optimized for its specific task and cannot be cross-applied to other wildlife challenges. It is also highly subjective to the quality if the data in a right whales catalog, with performance degrading significantly (due to learned errors) if the catalog is not already very well curated. 

Example Wildbook species: right whales

Deepsense paper link: https://www.researchgate.net/publication/327910789_Applying_deep_learning_to_right_whale_photo_identification

### OC/WDTW

OC/WDTW (or “DTW” for short) is based originally on a sound wave matching technique called “Dynamic Time Warping”. DTW uses the A* algorithmt to extract the trailing edge of a fluke and then look for matches to other edges by measuring the difference between them. This computer vision technique does not use ML and is optimized only for the trailing edge of humpback flukes but has good accuracy and speed.

Example Wildbook species: humpback whales, sperm whales, right whales.

OC/WDTW link: https://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w41/Weideman_Integral_Curvature_Representation_ICCV_2017_paper.pdf

### Kaggle7

“Kaggle7” is a deep learning approach to identifying individual humpback whale flukes based on one of the winning entries from a Kaggle competition. Kaggle7 is fast and highly accurate at identifying individual humpback whales by their natural fluke patterning, however it must be re-trained when new whales are added to a catalog. Like many deep learning competition winners, this algorithm is highly optimized for its task and cannot be cross-applied to other wildlife challenges. It is also highly subjective to the quality if the data in a humpback catalog, with performance degrading significantly (due to learned errors) if the catalog is not already very well curated. 

Example Wildbook species: humpback whales.

Kaggle7 link: https://medium.com/@ducha.aiki/thanks-radek-7th-place-solution-to-hwi-2019-competition-738624e4c885

### Modified Groth and I3S (spot pattern matching)

The Modified Groth and I3S algorithms are used independently of the Image Analysis pipeline in Wildbooks that are focused on matching individuals using natural spot patterning on their flanks.

Example Wildbook species: whale sharks, sevengill sharks, giant sea bass, and sand tiger/ragged tooth sharks.

Modified Groth link: https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2664.2005.01117.x

I3S link: https://www.researchgate.net/publication/228007763_A_computer-aided_program_for_pattern-matching_of_natural_marks_on_the_spotted_raggedtooth_shark_Carcharias_taurus

## Consolidated Display

At the end of the Identification process, Wildbook displays ranked lists of results, displaying one set of results per feature (e.g., whale fluke) per algorithm (e.g., PIE). You can select and set a matching ID right from the review interface, which displays 12 ranked matched results (#1 is the predicted best) but can display more than 12 as desired.

![matchResults](../../static/img/matchResults.png)

*An orca is matched by the machine learning-based PIE algorithm using the scratches on its "saddle patch".*