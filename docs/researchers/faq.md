---
id: faq
title: Frequently asked questions
sidebar_label: FAQ
---

## How long do I need to wait for detection? Identification?

Machine learning jobs in Wildbook run in a shared, serial queue. Detection jobs can take between 10 seconds and hours, depending on how much shared ML work is in the queue. Identification jobs generally run only a few minutes but also share resources in the queue and can take longer while waiting for work farther ahead in the queue to complete.

## How can I tell a detection job has completed?

You can tell a detection job has completed by visiting the encounter page. If the images in the gallery have an annotation (dashed green line) around the animal, detection has completed. You will need to refresh the page to see the annotation appear.

## How can I tell an identification job has completed?

You can tell an identification job has completed by clicking the hamburger menu on an image in the encounter gallery and checking for "View Match Results". If, instead, the menu says "Waiting on results", the job is still processing. You will need to refresh the page to see the menu option change.

## What should I put in media asset columns in a bulk import?

Media asset columns should be named "Encounter.MediaAsset.X", where X is an actual number, starting with 0 (Encounter.MediaAsset.0). The content of each cell should be the asset filename, including the path to the asset. For example, the "Encounter.MediaAsset.1" column could contain cells "january/1.jpg" and "january/2.jpg".
