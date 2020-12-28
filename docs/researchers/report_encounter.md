---
id: report_encounter
title: Report an encounter
---


Under the **Submit** menu in Wildbook, there are two options:

**Report an encounter** and **[Bulk Import](/docs/researchers/bulk_import)**. Here we present the single Encounter reporting method (**Report an encounter**), which allows for data entry in a simple, web-based form. This form supports two use cases:

- *Reporting an Encounter of a single animal with one or more photos shown of only that individual.* It is assumed that all photos contains only the same animal, satisfying the definition of an Encounter being one animal at a location and point in time. This method is best used for more solitary animals (e.g., whale sharks). 
- *Reporting an Encounter of multiple individuals, with only one photo submitted.* If machine learning "Detection" has been configured for the submitted species, it will process the submitted photo and dynamically clone new encounters each time >1 Annotations are found. This method allows for each resulting Encounter to contain all of the reported metadata (location, date, etc.) but only one Annotation of only one individual, satisfying the definition of an Encounter being one animal at a location and point in time.

## Report an encounter 

Complete the following steps to successfully submit an encounter. These fields are the minimum requirements. Any additional data provided can assist with detection and identification, but will not prevent a user from uploading their encounter.

1. Access your Wildbook homepage.
2. From the **Submit** menu, select **Report an Encounter**.
3. Under **Footage**, drag a file or click to add images. 
4. Under **Date** and **Location**, enter a date in the Encounter date field. Use an ISO format (YYYY-MM-DD HH:mm).
5. Under **Encounter location**, provide one or more of the following:
   1. **Where were you?** - Provide a freeform description of where you saw this animal.
   2. **Was this one of our location IDs?** -  Is this a formal study site (a.k.a. "location ID") defined in this Wildbook? If you don't know, leave it blank. If a location ID is selected and [Wildbook Image Analysis](ia_pipeline.md) is configured for this species, the Identification matching phase will only try to match this Encounter's Annotations against other Annotations from this same area. 
   3. **GPS Latitude/Longtitude** - By either manual entry or map selection, indicate precisely where this Encounter occurred.
6. Under **About You**, enter your name in the **Name** field and email in the **Email** field.
7. Click **Send encounter report**.

Your encounter is now available as an unapproved encounter.

### Additional fields 

 - Organization: allows for an association between you, your data, and your organization
 - Project: if the picture was taken as part of a specific effort, such as a census event
 - Additional comments: any information that does not seem relevant in another field
 - Species: A list of species supported on the platform
 - Sex: Indication of if the photographed animal is male, female, or unidentified
 - Observed behavior: Description of behavior that occurred during the encounter, such as environment interactions or interactions between two animals
 - Noticeable scarring: Description of scarring that can be used to identify the animal
 - Life stage: A list of age groupings that can be applied, such as adult or juvenile

If you are submitting as a signed-in user, you will also have the following options:

 - Status: If the animal is alive or dead
 - Alternate ID: Allows for entry of any other IDs that may be used for finding the picture, such as a catalogue number from your records
 - Sighting ID: A reference number for a collection of encounters that occurred at the same time
 - Other Email Addresses: Allows for a list of email addresses, separated by commas. The emails provided will receive updates regarding the encounter as information is added to the platform, such as resightings or association with a marked individual.

### Fields not listed 

You may see a number of fields on your Wildbook that are not listed here. Wildbook allows for some degree of customization, which means that options may be available that are specific to your Wildbook. If you have questions about these fields, post to the [Wildbook Community](https://community.wildbook.org) or contact the platform managers identified under the **Learn** tab.
