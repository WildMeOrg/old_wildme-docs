---
id: projects
title: Projects
---

A project is a processing tool for groups of disparate encounters. Encounters are compared to other encounters in the project, and as they are recognized as individuals, they are assigned project IDs. 

Common use cases for a project are a census (population count of identified subset of platform data) or reconciliation of multiple catalogs (de-duplication between catalogs).

This feature was partially supported by IndoCet.

## Understanding projects

The data in the encounter table is intended to help you recognize what encounter is being analyzed.

- Encounter: The reference to the encounter. Also acts as a link to the encounter page.
- Individual: Reference to the display name of the individual. Also acts as a link to the individual page.
- Date/Time: The time associated with the encounter.
- Location: The location associated with the encounter.BETA note: Only the LocationID field will display. If other location information is used, it will not display.
- Data Owner: The owner of the given encounter.
- Project ID: The ID of an individual from the current project. This column should be blank until a project ID has been assigned. All encounters that belong to the same individual will have the same project ID.

Use the following actions to process the encounter data.

- Start Match: Begin the matching process for the current encounter against only the encounters in the current project.
- Mark New: Give the current encounter a new project ID.

  -  If the encounter is part of an existing individual, the project ID will apply to all encounters.
  -  If the encounter is not associated with an individual, an individual is created. The individual’s display name will pull from the project name and project ID.

- Match Results: Navigate to the match results page. You do not need to start a new match from the project to select this.

## Create a project

Any researcher or administrator can create a project.

1. Navigate to Administer > Manage Projects.
2. Click Add Project button.
3. Provide the following information:

 - (Required) Project Name: The name of the project as a whole. This can be a reference to your catalog, organization, or census, to name a few examples. If you do not provide a project name, the project name will be the same as the Project ID.BETA note: does not support spaces or special characters.
 - (Required) Project ID Prefix: Format of the prefix that helps to create a Project ID. The project ID is applied to each individual within the project  - (multiple encounters will have the same project ID if they roll up to the same individual).BETA note: does not support spaces or special characters.If you want to have a set-length number for your IDs, set that by putting #s for the number of digits you want. This should not be changed after project IDs have been assigned.Example: Cen20-### will start at Cen20-000
 - User Access: The users who will have access to the encounters within the project. All users in a project can add encounters to a project and to perform matching.

4. Click Create Project button.

If instead you do not want to create a project, click Cancel button.

## Edit a project

The owner of a project or a site administrator can edit a project.

1. Navigate to Administer > Manage Projects.
2. In the table of projects available to you, click the project you want to edit. The table provides the following information:

 - Project Name: The name of the project.
 - Percent Annotations Identified: The percentage of annotations that are associated with a Project ID.BETA note: unidentifiable encounters do not contribute to this count. Suggested practice is to remove unidentifiable encounters from the project if possible.
 - Number of Encounters: The total number of encounters in the project.

3. Click the Edit Project button in the upper left above the table.
4. Edit any of the following fields:

 - (Required) Research Project Name: The name of the project as a whole. This can be a reference to your catalog, organization, or census, to name a few examples.
 - (Required) Project ID Prefix: Format of the prefix that helps to create a Project ID. The project ID is applied to each individual within the project  - (multiple encounters will have the same project ID if they roll up to the same individual).
 - Add Users: The users who will have access to the encounters within the project. All users in a project can add encounters to a project and to perform matching.
 - User List: Users that already have access to the project. Click the red X button to remove a user’s access.
5. Click Update button to confirm any changes made.
6. Click Return to Project to navigate away from the edit page. You can do this without confirming changes.

## Delete a project

The owner of a project or a site administrator can edit a project.

1. Navigate to Administer > Manage Projects.
2. In the table of projects available to you, click the project you want to edit.
3. Click the Edit Project button in the upper left above the table.
4. Click Delete button. The project will be deleted and you will return to the project list page.

## Add encounters to a project

Any user with access to a project can add encounters to the project.

1. Navigate to Search > Encounter Search.
2. Use the Encounter Search filters to create a list of encounters that suit your criteria.
3. Click Search Encounters.Note: filtering results at this stage will not change how many encounters are loaded for project management.
4. Once the Results Table loads, click the Project Management tab.BETA note: The Project Management tab may take a long time to load if your query returns more than 10000 encounters. It may be more efficient to do several smaller searches.
5. On the Project Management tab, you get the follow information and actions:

 - Encounters that will be added: The number of encounters in your search that you have access to.
 - Encounters that you cannot add to the project: If you are on a platform with silo security, this will display the encounters from your search that belong to users you do not have collaborations with.
 - Encounters that are already in project: A table of the projects you can select from. Next to each project name, a number displays the number of encounters from your search that are already in the project listed.

1. Use Select Projects to Add To to choose one or more projects that you want to add encounters to.
2. Click Add to Project(s) button to add all encounters to the selected projects.
3. Wait for the Success! alert to confirm that encounters have been added. You can navigate to your projects using the link in the alert.

### Remove encounters from a project

Only the project owner or an admin can remove encounters from a project.

1. Navigate to Administer > Manage Projects.
2. In the table of projects available to you, click the project you want to edit.
3. In the encounter table, click the Remove button on the appropriate row.

## Matching and projects

### Match against project encounters

To start a match that only compares against encounters in a given project:

1. Navigate to Administer > Manage Projects.
2. In the table of projects available to you, click the project you want to edit.
3. Click Start Match button.
4. Click Match Results button.

### Filter matches by project

You can also filter a match that was performed generally.

1. Navigate to the encounter page.
2. Click View Match Results in the Gallery menu.
3. Use the Project Selection dropdown to choose from your available projects.

The results list will display project IDs and will be limited to encounters that are in the selected project.

## Merging individuals with project IDs

Because an individual can only have a single ID from a given project, merging two individuals requires you to resolve any project IDs that are in conflict.

On the merge page, you will see a listing of all projects the two individuals are in; each will have a dropdown with the conflicting IDs. Use the dropdown to select the ID you want to stay with the merged individual.

Note: If you do not have access to all the projects that have IDs in conflict, you will not be able to merge the individuals.

## Setting preferred project view

If you are working from a project, you can set a preferred view. This will cause the Wildbook to display the project IDs over the display names of individuals, no matter where you are in the platform.

1. Navigate to Administer > My Account
2. Under Default Project, select the project you want to use as your primary context.
3. Select Update.

## Bulk Import into existing project

You can use a bulk import to put data into an existing project. To do so, you will need the following columns for each encounter in the import to go into a project:

Encounter.projectX.projectIdPrefix: The prefix used when assigning project IDs to encounters note that these values are case sensitive. Values of "X" from 0 to infinity are iterated until a sequence value is not found, allowing you to put encounters into multiple projects. 

Encounter.projectX.researchProjectName: The project’s name. If you choose to not set this, the Project Name will match the Project ID. This can be changed in the UI at any time.

## Bulk Import into new project

You can use a bulk import to create a project and put data into it. To do so, you will need the following columns:

Encounter.projectX.projectIdPrefix: The prefix used when assigning project IDs to encounters; note that these values are case sensitive. Values of "X" from 0 to infinity are iterated until a sequence value is not found, allowing you to put encounters into multiple projects.

Encounter.projectX.researchProjectName: The project’s name. If you choose to not set this, the Project Name will match the Project ID. This can be changed in the UI at any time.

Encounter.projectX.ownerUsername: The username of the person who should manage the project; note that these values are case sensitive. To ensure no caching or threading issues, the owner should be associated with all encounters in the spreadsheet that are going into the new project.