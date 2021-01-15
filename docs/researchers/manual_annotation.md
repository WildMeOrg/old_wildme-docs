---
id: manual_annotation
title: Manual Annotation (Beta)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When looking at an Encounter page, you may see that a MediaAsset does not have a dashed rectangle (e.g. Annotation bounding box) around an animal in the picture. In this case, the detection stage did not recognized the animal.

## Navigating to the Manual Annotation Page

In an Encounter page's **Gallery**, open the menu over an image and select **add annotation** to open the manual annotation screen.

<img src={useBaseUrl('img/manual_annotation_1.png')} alt="add anotation button" width="50%" height="50%" />

## Understanding the Manual Annotation Page

The Manual Annotation page has the following sections, which appear in order as you make selections.

<img src={useBaseUrl('img/manual_annotation_2.png')} alt="manual_annotation_2" height="50%" width="50%" />

## Creating a Manual Annotation

Each step needs to be completed for the next step to appear on the screen.

1. In **Select Viewpoint**, choose the primary viewpoint that the photographer is observing the animal from, such as left, right, front, back, etc.
2. In **Select annotation iaClass** allows you to define the type of animal or feature the annotation represents. This is a fixed list per species that corresponds to detection classes returned by the [Image Analysis pipeline](ia_pipeline.md).
3. In **Draw the new annotation bounding box below**
   1. Hover your mouse over the image, then use the guides to align the corner with the outer edges of the animal.
   2. Left-click once to mark the first corner of the bounding box.
   3. Move your mouse to the opposing corner position of a rectangle (i.e. if top-left complete, move to bottom-right). Use the guides to align the corner with the outer edges of the animal.
   4. Left-click to mark the opposing corner position.
4. Click **Save** to save your new annotation. A confirmation page appears with a link back to the Encounter page. It is important to note that if another annotation is already on this MediaAsset, Wildbook may clone this Encounter and create a new one, recognizing that two annotations in one image means that two animals are present and thus at least two Encounters by definition (one animal at a location and date) must exist.
5. Navigate back to the Encounter page and click **start match** to begin the identification pipeline for this new annotation. See [Manually starting a match](matching_process.md#manually-starting-a-match) for more information.

<img src={useBaseUrl('img/manual_annotation_4.png')} alt="manual_annotation_4" width="50%" height="50%" />

## Troubleshooting 

#### How do I fix an annotation?

If an incorrect annotation is created, whether through the detection process or manually, you can first [delete the annotation](matching_process.md#removing-an-annotation) and then re-draw the annotation if desired using the procedures above.

#### How do I annotate a part of an individual (Ex. head, tail, etc.)?

When selecting the annotation iaClass, look for the species, plus the part symbol '+'. For example, if you would like to annotate green turtle heads, search 'turtle_green+head'.

#### How do I associate a part with the body in my encounter?

Unfortunately, this function is not currently supported.

