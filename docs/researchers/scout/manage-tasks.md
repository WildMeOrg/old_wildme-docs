# About tasks
A Task in Scout represents a group of images assigned to either a user or to a machine learning model for the purpose of annotation, which includes:
* drawing a bounding box around all animals of interest
* labeling the species for each bounding box

The same image can appear in multiple Tasks, and Tasks can be duplicated for parallel annotation by different users. Different users can annotate the same images in different tasks. Tasks go through three stage:
1. Annotation - annotating animals in images is the most important function. Annotation is the only stage required for downstream analysis of the task. Annotation can be performed by lab leads or annotators.
2. Ground truth - the ground truth stage of a task involves the review, correction, and ultimately the approval of all annotations in an image by the Lab Lead. Once an image has gone through ground truth in any task, it does not appear for annotation or ground truth in another task that may contain it.  
3. Division line - if an image in a task is part of a sequence of images with annotated animals within them, then a lab lead may draw division lines to indicate overlap between images. 
4. Export - Once they have been through all of the stages above, tasks are ready for export for analysis in third party applications. Note that tasks don’t strictly have to go through the stages above to be exported, but at least annotation is required for a task to be meaningfully exported.

Once all images in a task have gone through annotation, ground truth, and division lines, the task is considered completely done with no more work required.

A lab lead ultimately creates tasks to help break up large volumes of aerial survey images into manageable chunks for annotators to work through, and many tasks may make up a single transect, flight, and survey. The following recommendations apply when creating tasks:
* All images in a task should be from a single side of the airplane. This is important for later sequencing of images to draw division lines.
* A task should ideally correspond to either a single transect or a subset of images from that transect.

# Viewing and Filtering Tasks
Click the Tasks button on the header navigation menu to view the Tasks page.



The Tasks page has the following features:
* The +Create Task button allows you to create a new task.
* The Export Filtered Results button allows you to export a comma-separated values (CSV) file of annotation or image data filtered to the specifications of the Filters section of the page.
* A Filters section allows you to filter tasks visible on the page. Click Filter to apply the filters and click Reset to set all filter parameters back to their default unfiltered state. Available filters include:
    * Task Name - filters displayed tasks to those matching the specified selection of characters. This is a partial match search, but is not case sensitive.
    * Date Created Start and Date Created End - filters displayed results to the tasks created within this range. Note that this is task creation and does not filter based on the dates of images in the tasks.
    * Assignee - filters tasks to the specified users or ML models. 
    * Stage - filters tasks to their stage in the annotation, ground truth, and line division workflow.
* A table of Tasks filtered to selections in the Filters section. Table columns include:
    * Task Name - name given to the task when it was created.
    * Side - side of the airplane that images in the task were from, Left or Right.
    * Assignee - user assigned to the task.
    * Date Created - creation date of the task.
    * A% - percentage of image annotation complete in the task.
    * G% - percentage of image ground truth review complete in the task.
    * D% - percentage of image division line annotation complete in the task.
    * Annotate button - if images are still available for annotation in the task, provides access to the annotation page.
    * Ground Truth button - if task annotation is 100% complete and images are still available for ground truth review in the task, provides access to the ground truth page. 
    * Division Lines - if task ground truth is 100% complete and images are still available for division line annotation in the task, provides access to the division line page. 
    * Delete - deletes the task. Deleting a task requires manual confirmation to avoid accidental data loss.




    * Next button - provides access to subsequent rows of table data if more tasks match the filter criteria than can be displayed in the table
    * Previous button - provides access to previous rows of table data if more tasks match the filter criteria than can be displayed in the table 

**Note**: You must click your browser’s reload button to see changes to the Tasks view that have occurred since you loaded the page.

## Creating and assigning a task
To create a new task to assign to a user:
1. Select Tasks from the Scout menu bar.
2. Click the +Create Task button on the Tasks page.
3. In the New Task form, do the following information:
    1. Enter a unique name for the task in the Task Name field. Human-readable task names are recommended. Try that leave little doubt about the content of the task, such as: “Lewa Flight 2022-09-15 Transect 1 Images 1-500”
    2. Select the appropriate annotator or ML model from the Assignee dropdown list.
    3. Select the appropriate side of the plane that the camera was on when it took the images of this task, Left or Right, in the Camera Side field.




    4. Click Select Images to add images to the task using the Select Images dialog box.
    5. In the Select Images dialog box, leverage the following fields to specify the images you want added to the task. As you adjust filters, the matching images count updates. Each field adds a logical AND to the matched images and further subsets matching to those images that match all chosen criteria.
        1. Enter letters and numbers to filter images by File Name, updating the matching images count as you type.
        2. Enter or select the name of an existing task that already contains a desired subset of images in the Duplicate From Existing Task field.
        3. Select Start and End dates to further filter images by. These filters match against the EXIF creation dates of the images.
        4. Select a range of numbers in the Subset Range (inclusive) field. Where a large number of images might match your criteria, a range allows you to specify a fixed, sorted subset. For example, you might select criteria matching 1000 images and assign a range of 1 to 500 in the task for the first annotator and a range of 501 to 1000 in the task for the second annotator.




4. Click Submit to create the new task. On successful creation, the task becomes available in the Tasks view.
    **Note**: There may be a short delay after creation of a task before it is ready for annotation, depending on the number of images in it.

**Caution**: If during task creation you see the following message in the New Task form, please be aware that new images are being added to Scout. 


If the images you need to add to this task have already been ingested, then you can ignore this message. However, it is recommended to wait for ingestion to complete and the alert to go away before creating your new task. Having all images present is important if you wish to select a range of images for the task and not all of those images have been added yet.

## Annotating tasks
If a task is assigned to you directly, and it has not been 100% annotated yet, you can click the Annotate button next to the task on the Tasks table to begin annotating randomly presented images. The annotation screen allows you to click-drag to create a bounding box and then press down arrow or begin typing to select the correct label for the annotation. You can click on any previously created annotation to edit it. A trash can button also allows you to delete an annotation that you have clicked on.

In addition to the click-drag motion for creating annotations, the following tools are available to you in the annotation interface:
* zooms in on the image.
* zooms out of the image
* scroll bars for the image allow you to pan across the image looking for things to annotate
returns to the last image annotated in this annotation session
* Done - completes annotation of this image. If any annotations were created, they are now saved. If no annotation were created, this image no longer appears for annotation in this task, and the image is considered empty.

**Note**: If you refresh your Chrome browser, the interface presents a new random image, and your work on the image you saw before is not stored.



When task annotation is complete (i.e. all images have been processed and marked Done), a page noting the successful completion of annotation for the task appears. 

