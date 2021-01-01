---
id: my_account
title: My Account
---

The **My Account** page allows you to edit the details of your Wildbook account, such as changing your password, and extend sharing invitations to other users. 

## Navigation

To access the **My Account** page:

1. Sign in to your Wildbook platform.
2. Select **My Account** from the **Administer** menu.

## Understanding the My Account page

At the top of the page, you will see your account name. On the right side, you will see your site roles and organization membership. If you need changes made to any of these fields, contact your org admin or site admin.

### User account fields

You can adjust the following fields of your account.

 - **Profile photo**: an image that will appear on leaderboards (if enabled), in the navigation bar when signed in, and on your account page. To update, select  **Browse**, confirm the image you want to use, then click **Submit**. You will be taken to a confirmation page. Click **Return to My Account** if you want to make additional changes. To remove profile photo, click the red **X** button next to **Remove profile photo?**.

 - **Password**: To update your password, enter the same password in both the **New Password** and **Confirm New Password** fields. If you do not enter in both, none of your changes will be retained when you update.

 - **Full Name**: The name you want to display associated with the account.

 - **Email Address**: The email address associated with your account. This email will be used for system-generated emails. 

   *Note*: email address is becoming mandatory. Update your profile to include a unique email address.

 - **Receive automated email**: Check to receive email notifications when there are changes to your data, including matching and naming.

 - **Affiliation**: Text field to allow you to display your affiliation, such as your organization. 

   *Note*: We are planning to deprecate Affiliation as Wildbook Organizations replace this functionality. If you are using affiliation to tag data, we recommend migrating the information to another field. 

 - **Project URL**: A text field to hold a link to your research project's home page.

 - **Research statement**: Brief text describing your research.

 - **Research project**: Text field to allow you to display the name of the research project you are working on. 

   *Note*: We are planning to deprecate **Research project** as [Wildbook Projects](projects.md) replaces this functionality.

### Roles

This field displays the security roles assigned to you in Wildbook. These roles affect your interactions with data and functionality in Wildbook.

### Organizations

This field displays the security Organizations your User account is assigned in Wildbook. 

### Projects

Projects are optional data constructs in Wildbook that contain and order data. [You can learn more about Projects here.](projects.md)

#### Your Projects

This is a list of the projects that your User account has been added to. Click any project to view its data.

#### Default Project

This will cause Wildbook to assume the context of this project by default, such as displaying an Individual's project ID instead of the display names of the individual.

1. Under **Default Project**, select the project you want to use as your primary context.
2. Select **Update**.

## Social Media Authentication

This functionality is no longer supported and may no longer appear in Wildbook.

## Collaborations

Collaborations allow you to extend invitations to other Users in Wildbook to either see or edit data own by you. Collaborations are only available if your Wildbook has Silo Security enabled. See [Silo Security](silo_security.md) or [Security Overview](security_overview.md) for more information. 

### Reviewing existing collaborations

You will see a list of all collaboration requests and the associated permission levels and available actions. You may need to refresh the page after selecting a button for the permission level to update.

 - *invitation sent*: You have sent an invitation to another user. There are no actions to be taken.
 - *invited*: Another user has sent an invitation to you. You can approve the invitation and grant the user view access to your data (can view), or you can deny the invitation and prevent a collaboration from being established (access denied). These actions are fully reversible.
 - *can view* (requester): Your collaboration has been accepted and you can now see all data for encounters belonging to the other user (including related sightings and individuals), and they can see yours. If you want to end the collaboration, you can **Revoke View Permissions**.
 - *can view* (receiver): You have accepted a collaboration with another user. If you want to end the collaboration, you can **Revoke View Permissions**. You can also choose to elevate the collaboration to allow for mutual editing if you click **Grant Edit Permissions**. Note that this should only be done with the other user's permission. Failure to obtain their permission may result in the other user revoking the collaboration.
 - *can edit*: You have elevated your collaboration with another user, so you may both edit the data for encounters belonging to the other user (including related sightings and individuals). If you want to revert to view-only permission, you can click **Revoke Edit Permissions**. If you want to end the collaboration, you can **Revoke View Permissions**.
 - *access denied*: The invitation was denied or view access was revoked. The request is retained so you have a trace of who the collaboration was with if follow-up actions are needed or if the collaboration needs to be re-instated. To resend the invitation, click **Restore Invite**.

### Requesting a Collaboration

To initiate a Collaboration, search for the User inside Wildbook.

When you search for a user, you search by username and name. Select the desired recipient from the dropdown. You may include a message that the user will receive with the collaboration request. You cannot establish a collaboration with yourself.

### Example collaboration between two users

The person who initiates the collaboration has an assumed acceptance, so the receiver sets the collaboration permission level.

_If User Ana initiates collaboration with User Barry:_

Neither party has view or edit access to data.



_If User Barry accepts collaboration:_

Ana and Barry can view each other's data, but they cannot edit it.



_If User Barry clicks grant edit permission:_

Both Ana and Barry can view and edit each other's data.



_If User Barry does not grant edit permission or revokes edit permission after granting it:_

Ana and Barry can view each other's data, but they cannot edit it.

## My Data

Follow these links to see Encounter Search and Individual Search results filtered to data assigned to your User account.