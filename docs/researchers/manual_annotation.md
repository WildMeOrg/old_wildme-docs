---
id: manual_annotation
title: Manual annotation (beta)
---

When looking at an Encounter page, you may see that the media asset does not have a dash rectangle around the animal in the picture. In this case, detection has not found the animal. This is a natural occurrence when using machine learning to automate the process.

## Navigating to the Manual Annotation page

Under Encounter > Gallery, open the right-side menu and select add annotation to be navigated to the manual annotation screen.

![add anotation button](../../static/img/manual_annotation_1.png)

## Understanding the manual annotation page

MediaAsset provides a link and reference number to the mediaAsset you are annotating.

Select viewpoint is used to indicate the postioning of the animal. If you are look at the right side of the animal and it is mostly facing away, then you would select rightback.

iaClass is used to indicate what species is in the picture and what should be matched against. If you are matching a part, look for the species, plus the part. Ex: turtle_green + head

The image provides a canvas for you to directly indicate where the bounding box should be placed.

The encounter reference link navigates you to the original annotation. The annotation will be cloned, meaning all the metadata will appear on both the original encounter and the new encounter you are creating with the new annotation.

SAVE is used to save the annotation after you have drawn the correct bounding box.

## Creating a manual annotation

Each step needs to be completed for the next step to appear on the screen.

1. Select viewpoint.
2. Select annotation iaClass.
3. Hover your mouse over the image. Use the guides to align the corner with the outer edges of the animal.
4. Click once to mark the corner of two edges of the bounding box.
5. Move your mouse to the opposing corner position (i.e., if top-left complete, move to bottom-right). Use the guides to align the corner with the outer edges of the animal.
6. Click to mark the opposing corner position.
7. Click SAVE.

At this point, you can navigate back to the encounter page and start a match for this annotation.

## Troubleshooting 

#### How do I fix an annotation?

If an incorrect annotation is created, whether through detection or manually, take the following steps to correct it.

1. Navigate to the encounter with the incorrect annotation.
2. Open the manual annotation interface.
3. Label and draw the correct annotation and click SAVE.
4. Do this for all annotations the need to be created.
5. Navigate to the original encounter.
6. Delete the encounter.

#### How do I annotate a part (head, tail, etc)?

When selecting the annotation iaClass, look for the species, plus the part. Ex: turtle_green + head

#### How do I associate a part with the body in my encounter?

This is not currently supported.

