---
id: overview
title: Researcher Overview
sidebar_label: Overview
slug: /researchers/overview
---

Wildbook is a Web-based, multi-user software platform to help researchers collaboratively track individual animals in wildlife populations and estimate population sizes. Each Wildbook installation can be used by multiple researchers for multiple species. 

Wildbook includes:

- a browser-based user interface (UI)
- a high performance PostgreSQL database for storing multiple wildlife-related data types
- two servers
  - Data Management Server - coordinates UI browser display and data storage
  - [Wildbook Image Analysis ("WBIA")](../developers/wbia/wbia_overview) - manages the computer vision pipeline and and AI models and training tools. WBIA does not come preconfigured to detect and identify animals from a species. Pre-trained ML models for the species must be used, or new models must be created using training data.
- artificial intelligence (AI) tools to speed image curation by
  - finding one or more animals in photos ("detection")
  - individually identifying each animal found ("identification")

![](../../static/img/wildbookEcosystem.png)

*The Wildbook ecosystem of people, servers, and AI.*

This introduction is intended to support Wildbook users collecting data in the field ("researchers") and then loading it for storage, curation, searching, and analysis in Wildbook. It covers the most common interactions with the Wildbook platform.

## Wildbook Terminology

The following terms are important in Wildbook. In its simplest usage, Wildbook may receive a wildlife picture plus related metadata (e.g., where the photo was taken and when), which gets uploaded by a researcher. From here, a number of terms come up as we work through the process the system and users take to curate this wildlife data. Let’s use this picture as an example.

![two wild dogs](../../static/img/field_guide_1.png)

In Wilbook, this picture is called a **MediaAsset**. When the system runs the image through a machine learning (ML) stage called "detection", it generates an **Annotation** for each animal found in the picture. This picture would be returned with two annotations, as shown below.

![two wild dogs with annotations](../../static/img/field_guide_2.png)

During upload, you must include a time and place where the interaction occurred; that information is paired with each of the annotations to create Encounters. An **Encounter** represents an interaction with a single animal. If you interact with five members of a pack at a specific place and time, you have five Encounters. In the photo above, Wildbook's ML found two Annotations of African wild dogs, and thus two Encounters would be generated from one MediaAsset.

In Wildbook, an Encounter is the foundation component of the software. Encounters provide a reference to a time and location where an animal was spotted, forming the basis of whether that animal ultimately should or should not be included in population analyses. Each Encounter has its own web page in Wildbook.

Because two animals appear at the same time in the example MediaAsset, we want to ensure that the relationship between these two Encounters is well understood (i.e. *These two animals were sighted together.*). Therefore, Wildbook creates a **Sighting**, representing a broader observation of one or more animals. A Sighting allows researchers to include information about social relationships and observed behaviors when multiple animals are sighted together. Unlike Encounters, Sightings are one-to-many; if you interact with five members of a pack, you have one Sighting that is made up of five Encounters, one for each animal. Each Sighting has its own web page in Wildbook.

*Note*: throughout the Wildbook platform, Sightings may also be called “occurrences”. We are working to shift terminology for greater user clarity. If you see an instance of outdated language, [you can post a bug report](https://community.wildbook.org).

An **Individual** is a single animal that has been given an identifying name within the Wildbook platform and has one or more Encounters. Individuals are animals whose identities have been confirmed by a researcher and that also have accurate metadata, such as tags, keywords, and social information. Every individual has a profile page in Wildbook, summarizing where the individual was sighted over time, any **Relationships** (e.g., mother-calf) or **Social Units** (e.g., a pack) it may be a part of, and which researchers have collaborated to build this Individual's profile.

*Note:* throughout the Wildbook platform, Individuals may also be called “marked individuals”. We are working to shift terminology for greater user clarity. If you see an instance of outdated language, [you can post a bug report](https://community.wildbook.org).

## Data Entry

Wildbook has different ways of submitting data, affecting where and how data is entered and how Wildbook applies ML to process the data.

### Submitting one or more pictures of one animal

Wildbook supports reporting an Encounter with one or more photos (i.e. one or more MediaAssets containing only the same animal), such as a great sighting of a lone whale shark while diving. Wildbook allows the user to upload these pictures to Wildbook, along with the associated metadata, such date, location, and species. For this upload, the system creates an Encounter in the database. Upon successful upload, the submitter is presented a permanent link to the Encounter record, showing all of the data captured.

<a target="_blank" href="https://www.whaleshark.org/submit.jsp">As an example, here is a link to an example Wildbook submission form in the Wildbook for whale sharks (*Rhincodon typus*).</a>

<a target="_blank" href="https://www.whaleshark.org/encounters/encounter.jsp?number=3b54a8cb-f899-4bb5-aa7c-13c2b6aa9fb1">And here is a link to a stored Encounter submission.</a>

After a successful submission, if the submitter reported a species for which Wildbook's ML detection and/or identification is configured, automated ML will proceed, searching MediaAssets for individual animals and attempting to match the found Annotations. See [Image Analysis Pipeline](ia_pipeline) for more information.

### Submitting a single picture of multiple animals

Some animals are difficult to photograph singly, such as social animals (e.g., packs, pods, etc.). Multiple animals are often in every photo. A Wildbook user can upload a single picture of multiple animals to Wildbook using the Encounter form discussed above, along with the associated metadata (e.g., date, location, and species). After submission, for each detected animal (assuming Wildbook's ML has been configured to support the species), an Annotation is created and then split into an its own Encounter, copying the originally provided metadata. This means that one photo can ultimately yield multiple Encounters that will be connected by a Sighting. Because the Annotations are generated from the same image, Wildbook preserves knowledge of that connection by associating all the related encounters with a single Sighting. An ID is associated with the Sighting, and that ID is available in each Encounter. Sightings allow users to associate information with all of the encounters tied to that event without having to update each of the encounters individually.

From here, each Annotation of each Encounter goes through the identification process individually.

#### Complications arising from metadata

If you provide information with a picture of multiple animals, additional complications can occur. For example, if you indicate the sex, life stage, or identity of an animal, there is no guarantee that, when the Encounter is replicated and Annotations are each associated with the newly created Encounters, the sex, life stage, and/or ID will apply to the animal you intended those attributes for.

If you choose to provide additional information during the initial upload of a single picture with multiple animals, it is best practice to review the Encounters associated with that Sighting and verify that all metadata associations are as expected and if not, edit as needed.

### Bulk Upload - Submitting multiple pictures with multiple animals present

Presently, Wildbook accepts submissions of multiple pictures with multiple animals present; however, the system cannot understand or preserve data integrity or accuracy well enough for this to be recommended (e.g., *How could Wildbook know that animal 3 in photo 2 from the left side is also animal 5 in photo 9 as viewed from the right side?*) when uploading pictures using the standard, form-based Encounter upload method presented previously. 

If you choose to upload multiple pictures with multiple animals at once, it is recommended that you use Wildbook's [Bulk Import functionality](bulk_import), which is available after login under the Submit menu. Bulk Import is based on an Excel file template (with one Encounter per row) and can be used to upload:

- A legacy catalog (e.g., thousands of Encounters from past years of research)
- Multiple Encounter submissions (e.g., all of last month's Encounters)
- Data for social species, with one photo per Encounter (one photo per Excel row), allowing ML to split each Annotation into new Encounters without assuming relationships among photos

[See more comprehensive information about Bulk Import here.](bulk_import)

## Navigating the Platform

This section provides an overview of the purpose and location of common pages in the Wildbook platform.

### Home page

When you first access your Wildbook, you’ll land on the Home page. This can be reached at any time by clicking the Home button on the navigation bar. You can also click the site logo to open the home page on a new tab. The home page is intended to provide introduction and context for the work being done leveraging Wildbook. This includes pictures and statistics about the platform.

### Menu options

Under the **Submit** menu, there are two options: **Report an encounter** and **Bulk Import**. Both options are used to submit data. Submissions include photos and videos plus related metadata, requiring at least date of sighting, location, and species. Additional metadata fields are available. 

**Report an encounter** can be used by anyone, while **Bulk Import**. requires a user to log into the platform and follow the instructions to first upload photos and then the metadata Excel spreadsheet.

Under the **Learn** menu, there are the following options, which are often customized in a Wildbook:

- **About Us** is a page dedicated to the collaborators who have put together the Wildbook you are accessing.
- **How to Photograph** advises on the best ways to photograph a given species. This advice is specific to allowing the machine learning to best leverage the photograph for detection and identification.
- **Contact Us** provides information to allow you to contact those who are managing the Wildbook platform you are using.
- **Learn More about Wildbook** takes you to the Wildbook platform documentation.

All following areas of the platform can only be accessed by a user that has signed in.

Under the **Individuals** menu, there are the following options:

- The **Gallery** page provides a set of pre-configured filters focused on the images associated with an individual in the platform.
- **View All** takes you to an unfiltered list of all individuals you have access to, presented as the Individual Search Results. From here, you can add filters and sort based on the visible columns, as well as accessing additional options.

Under the **Sightings** menu, you have the following options:

- **Search** pulls up several filters that can be leveraged to generate a filtered list of all sightings that the signed-in user has access to. Once the list is generated, data can be exported in various formats from this page.
- **View All** pulls up an unfiltered list of all sightings you have access to.

Under the **Encounters** menu, you have the following options:

- **View Unapproved Encounters** pulls up a list of all Encounters that have not had their state adjusted from “Unapproved”. All individually-uploaded encounters are initially uploaded as unapproved encounters. This is done to allow researchers and trained individuals to support citizen scientist involvement while maintaining data integrity.
- **View Approved Encounters** pulls up a list of all encounters that have been determined to be acceptable based on data review. The state has been adjusted to “Approved”. Note that all encounters entered using the bulk import function are set as approved by default as only users with researcher-or-higher privileges can make use of the importer.
- **View Unidentifiable Encounters** pulls up a list of all encounters that provide evidence that cannot be conclusively judged, causing a user to set the state to “Unidentifiable”.
- **View Images** pulls up a list of all images that a user has access to, including annotation bounding boxes and keyword displays. 
- **Encounter Calendar** is an option to display all encounters in a calendar format.
- **View My Submissions** pulls up a list of all encounters that were submitted by the signed-in account, regardless of state.

Under the **Search** menu, you have the following options:

- **Encounter Search** pulls up several filters that can be leveraged to generate a filtered list of all encounters that the signed-in user has access to. Once the list is generated, additional filtering and sorting can be performed on the **Encounter Search Results** page, as well as delving into additional data formats such as matching images and videos, mapped results, export formats, and a results calendar.
- **Individual Search** pulls up several filters that can be leveraged to generate a filtered list of all individuals that the signed-in user has access to. Once the list is generated, additional filtering and sorting can be performed on the **Individual Search Results** page, as well as delving into additional data formats such as matching images and videos, mapped results, and exportable data formats.
- **Sighting Search** pulls up several filters that can be leveraged to generate a filtered list of all sightings that the signed-in user has access to.

## Account Management

Wildbook supports security functions that support real world research collaborations and organizations.

### Login

A user is able to log in by selecting the **Login** button at the top right of the Wildbook or by selecting any page that requires a user to sign in to access content. A username and password are required. If you do not have a username and password, you will need to contact the site managers via the **Contact Us** page. Wildbook does not currently support self-registration.

### Account Management

Under the **Administer** menu, you have the following options:

- **My Account** provides a collection of information about the signed-in user, including password reset, and profile picture management, a list of accepted collaborations, and statistics about the data associated with the account.

For information about your user accounts and security, see [My Account](my_account).
