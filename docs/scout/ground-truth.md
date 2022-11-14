# Ground truth review of tasks
The Ground Truth stage of a task involves a review of its images and annotations for accuracy by a lab lead. The purposes of the ground truth stage are to:
* Assess annotator accuracy.
* Define final, correct annotations for an image. Once an image has been through the ground truth stage, no matter how many tasks it appears in, that image is considered “done” and never appears again for annotation or ground truth.

**Note**: When you delete an annotation as part of the ground truth process, you do not delete it from the task. Rather, the deleted annotation is no longer considered a part of the final set of annotations that make up the ground truth. When exporting annotations, it is important to understand which annotations are ground truth annotations as these are considered to be the most accurate representation of the content of each image. See Exporting task annotation and image data for analysis for more information.

If a task is fully annotated but has not been 100% through the Ground Truth stage yet, you can click the Ground Truth button next to the task on the Tasks table to begin reviewing randomly presented images and their annotations. The annotation screen allows you to click-drag to create a new bounding box and then press down arrow or begin typing to select the correct label for the annotation. You can click on any previously created annotation to edit it. A trash can button also allows you to delete an annotation that you have clicked on.

In addition to the click-drag motion for creating annotations, the following tools are available to you in the annotation interface:
* zooms in on the image.
* zooms out of the image
* scroll bars for the image allow you to pan across the image looking for things to annotate
* returns to the last image annotated in this annotation session
* Done - completes the ground truth stage of this image, making it as completely and accurately “done”. If any annotations were created, modified, or destroyed, they are now saved as ground truth. If no annotations were present when Done was clicked, the image is considered empty.
* opens a side-by-side display that allows you to compare annotations for this image to those from any task that contains this image. The Reference Task pulldown allows you to switch between other tasks that include annotations on this image. This gives you the ability to perform your ground truth review in the context of multiple annotators (including ML) who may find and miss correct annotations in different ways. However, what you annotate in the left window on the image is considered the final, correct Ground Truth for the image.



When task ground truth completes (i.e. reaches 100%), a page noting the successful completion appears. 
