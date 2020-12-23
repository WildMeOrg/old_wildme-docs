Under Silo Security, users are grouped together under organizations, which typically align with real-world organizations. To ensure that organization goals are met, we created the org-admin role. These are platform members who have the ability to handle user management and address bulk import concerns for their organization.
Getting the Admin Role#

To get the admin role, contact either a site admin or Wild Me staff. You can manage the following aspects of the platform by using the top navigation and selecting **Administer**.

# Library Management
Restoring deleted encounters##
If an encounter has been accidentally deleted, you can provide the UUID reference to the encounter to restore it.
1. Navigate to **Administer > Library Management** and find **Restore a Deleted Encounter**.
2. In the **Encounter number** field, enter the UUID reference to the deleted encounter.
3. Click **Restore**.

## Updating all instances of a submitter or photographer
If you find that there are submitters or photographers that were created with the wrong email or that need to be consolidated, you can provide the email reference to change or consolidate them.
1. Navigate to **Administer > Library Management** and find **Update Email Address of Submitter or Photographer Access the Entire Library**.
2. In the **Old Email Address** field, enter the email address you want to change.
3. In the **New Email Address** field, enter the email address you want to change to or consolidated with.
4. Click **Update**.

## Updating location code for all encounters
If you have a location code that needs to be migrated to another code (misspelled, changed in hierarchy), you can use this functionality to change the code over. This should only be used if you need to move all encounters.
1. Navigate to **Administer > Library Management** and find **Swap old location code for new across all encounters**.
2. In the **Old location code** field, select the location code that you want to consolidate with another code.
3. In the **New location code** field, select the location code you want the encounters to be associated with.
4. Click **Update**.

## Exposing approved encounters to GBIF
*This functionality is deprecated.*

## Updating location code for subset of encounters
1. Navigate to **Administer > Library Management** and find **Set the location code for all encounters matching a string**.
2. In the **Text string to match (case insensitive)** field, enter text that matches the encounters you want to update.
3. In the **Location code to assign** field, type the exact location code that you want to convert to.
4. Click **Update**.

# Logs
**User access logs** provide session information, indicating what user signed in from what IP address at what time.
**Encounter submissions log** provides encounter creation information, indicating what encounter was created at what time and providing a reference to the encounter.
**Deleted encouters log** provides what encounters were deleted, including a reference that can be used  to restore the encounter using Library Management functionality.
**Email log** provides a record of the automated emails sent from the platform, including what type of email, who it was sent to, and what time it was sent.

# User Management

## Adding Users

As an Admin, you are able to create users. To create a new user:

1. Navigate to **Administer > User Management**.
2. Scroll to the **Create/Edit User** section.
3. Enter a *username*, *email*, and *password*. Be sure to enter the password into both **Password** and **Confirm** or you will not sucessfully create the user.
Note that a user must have a username and password to use the account, but this requirement is changing to require an email, so it is best to provide all three values.
4. Under **Roles**, select the appropriate role based on the permission level you want the user to have. This is multi-select as the roles are not hierarchical.
  * *admin*: full site access.
  * *orgAdmin*: grant administrative abilities to manage the organization.
  * *researcher*: grant ability to process and manage encounters, individuals, and sightings.
5. Click Save to create the new user.

## Editing Users

To edit an existing user:
1. Navigate to **Administer > User Management**.
2. In the filter box, type a username, first or last name, or other identifying information.
3. Select a user from the user grid.
4. Make adjustments to the user as needed. If updating a user's password, be sure to enter the password into both **Password** and **Confirm** or you will not sucessfully create the user.
5. Click **Save** to update the user.

## Deleting Users

1. Navigate to **Administer > User Management**.
2. In the filter box, type a username, first or last name, or other identifying information.
3. Select a user from the user grid.
4. Click **Delete User** beneath the user's information.

# Photo Keywords
Keywords are labels that are applied to media assets. A keyword displays on all annotations associated with a media asset.
Add a new keyword##
1. Navigate to **Administer > Photo Keywords**.
2. In the **New keyword description (visible to users)** field, enter the text that you want to have as an available keyword.
3. Click **Add*.

## Remove a keyword
1. Navigate to **Administer > Photo Keywords**.
2. Using the **Keyword to remove** field, select the existing keyword that you want to remove from the platform. This will remove the keyword from all media assets that have the keyword.
3. Click **Remove*.

## Rename a keyword
1. Navigate to **Administer > Photo Keywords**.
2. Using the **Keyword to rename** field, select the existing keyword that you want to rename.
2. In the **New keyword description (visible to users)** field, enter the text that you want to have as an available keyword.
3. Click **Rename*. All instances of the original keyword will now display as the new keyword.

# Data Integrity
## Check for Annotations with Multiple Individual IDs
## Check Annotation iaClasses and MediaAsset States by Species
## Find Annotations Duplicated in Two or More Encounters
## URL Access Security Checks

# Bulk Import Logs

As an organization administrator, you are able to manage any bulk import in the system.

1. Navigate to **Administer > Bulk Import Logs**.
2. Select the desired bulk import task from the list.
3.  Scroll to the bottom. You can take any of the following actions:
  * **Send to detection**: Send all imported encounters to detection. This can only be done if all encounters have not been sent to detection.
  * **Send to identification**: Send all imported encounters to detection and identification. This can only be done if all encounters have not been sent to detection.
  * **Delete ImportTask**: Delete the bulk import and the related data. This can be done at any time.
