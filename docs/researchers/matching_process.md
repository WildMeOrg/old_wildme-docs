---
id: matching_process
title: Matching Process
---

To start the matching process, you must report an encounter. Once you have uploaded an encounter, navigate to the the Encounter page. If detection has completed successfully, you will see a mediaAsset with a dashed square (a bounding box) around the animal, as depicted below.

![MediaAsset with bounding boxes, indicating successful detection of the animals.](../../static/img/matching_process_1.png)

If you do not see bounding boxes, you will need to use the Manual Annotation tool (Beta) to create an annotation, or reach out to support through the Wildbook Community.

Once you've confirmed the bounding box, you can take any of the following actions by clicking the option in the bottom right menu on the image.

## Match results

Click on Match results to be taken to the iaResults page associated with your encounter.

A banner at the top of the page provides a link to your encounter and the associated Marked Individual, if one exists.

Use score buttons to select what candidates display:

Individual Scores: computes one match score for every individual in the database. This is the aggregate of each image score for that individual.
Images Scores: computes the match score for every image in the database when compared to the query image

Adjust the number of results that display in the list by changing the value in Num Results and selecting set.

The available matches display in a list. This list contains the following information:

Rank: The position in the listing. Correlates to the match score.
Match score: The match score represents the value associated with the likelihood of the match being successful. These scores are not standardized between algorithms or platforms and are not bounded.
Encounter link: Opens a new tab to the potential match encounter.
Inspect: Zoom in and look at the features being matched. Areas that are highlighted display what the machine has identified as matching areas. If areas include background, consider the match to be less accurate than estimated.
Checkbox: Select the checkbox to indicate that an encounter is a match with the target image.

The image from your encounter appears on the left, labeled as the TARGET image. Potential candidates for matching appear on the right side, labeled to match their position in the list.

## Start another match

## Visual matcher

