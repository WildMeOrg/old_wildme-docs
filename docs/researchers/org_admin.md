---
id: org_admin
title: Org admin
---

Under [Silo Security](/docs/researchers/silo_security), users are grouped together under organizations, which typically align with real-world organizations. To ensure that organization goals are met, we created the org-admin role. These are platform members who have the ability to handle user management and address bulk import concerns for their organization.

## Getting the Org-Admin Role

To get the org-admin role, contact either a site admin or an org-admin belonging to the organization you want to help administer.

## Managing Users

### Adding Users

As an Org-Admin, you are able to create and add users to your organization. To create a new user:

1. Navigate to **Administer > User Management**.
2. Scroll to the **Create/Edit User** section.
3. Enter a username, email, and password. Note that a user must have a username and password to use the account, but this requirement is changing to require an email, so it is best to provide all three values.
4. Under **Roles**, select the appropriate role based on the permission level you want the user to have. This is multi-select as the roles are not hierarchical.

- *orgAdmin*: grant administrative abilities to manage the organization.
- *researcher*: grant ability to process and manage encounters, individuals, and sightings.

5. Under **Organization Membership**, select your organization to add a user to it.
6. Click **Save**.

### Deleting Users

1. Navigate to **Administer > User Management**.
2. In the filter box, type a username, first or last name, or other identifying information.
3. Select a user from the user grid.
4. Click **Delete User** beneath the user's information.

### Adding Users to your Organization

1. Navigate to **Administer > User Management**.
2. In the filter box, type a username, first or last name, or other identifying information.
3. Select a user from the user grid.
4. Find the **Organization Membership** field in the user's information.
5. Select your organization to add a user to it.
6. Click **Save**.

## Addressing Bulk Import Concerns

As an organization administrator, you are able to manage bulk imports for any user in your organization.

1. Navigate to **Administer > Bulk Import Logs**.
2. Select the desired bulk import task from the list.
3. Scroll to the bottom. You can take any of the following actions:

 - **Send to detection**: Send all imported encounters to detection. This can only be done if all encounters have not been sent to detection.
 - **Send to identification**: Send all imported encounters to detection and identification. This can only be done if all encounters have not been sent to detection.
 - **Delete ImportTask**: Delete the bulk import and the related data. This can be done at any time.

