# Welcome to Scout
Scout is a software application designed to support annotators and lab leads processing imagery for the Kavango–Zambezi Transfrontier Conservation Area (KAZA TFCA) aerial survey. With Scout, you can:
* Ingest high volumes of .ARW and .JPG images collected from survey cameras
* Group images as “Tasks” that can be assigned to other users (e.g., image annotators) or machine learning (ML) models for bounding box creation and species labeling
* Review and “ground truth” annotated images for accuracy
* Draw division lines for overlapping image sequences with annotations
* Export CSV data files for statistical analysis

## Who Should Read This Document
This documentation supports three Scout user roles:
* _system administrator_ - This is a Linux- and computer hardware-savvy individual who sets up Scout inside a lab. The System administrator’s primary functions are to install Linux on a powerful laptop, connect a network-attached storage (NAS) device to the laptop to hold high volumes of imagery, and install and run Scout via Docker. A system administrator verifies proper Scout installation and then communicates the URL to a lab lead to one or more lab leads.
* _lab lead_ - A lab lead connects to Scout through a Chrome web browser and is responsible for creating and managing user accounts, coordinating work (e.g., assigning groups of images as Tasks to annotators or ML models), reviewing annotator work to create final “ground truth” annotations, drawing division lines to specify overlap in imagery with annotated animals, and exporting data for analysis in third party applications.
* _annotator_ - An annotator logs into Scout through a Chrome web browser and receives tasks to annotate from lab leads. An annotator is responsible for drawing and labeling bounding boxes on each image, with each bounding box representing an occurrence of a single animal or other supported classification found in an image.
