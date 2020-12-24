---
id: silo_security
title: Silo Security
---

The Silo Security model creates barriers in data access between users in the platform. This allows users to carefully select who they share their data with. This is especially common among users who are working on academic works or working with at-risk species.

Permissions are determined at encounter-level for any object (Sighting, Individual, Survey). This means that if a user has access to any encounter withing a Sighting, Individual, or Survey, they have access to that object.

## Collaborations

Collaborations between users allow two users to share data. They can be set to view or edit access.

If you try to access an encounter you don't have access to, you will be prompted to start a collaboration with the owner of the encounter. You can also search for a user you want to collaboration with if you go to **Administer > My Account**.

When you search for a user, you search by *username* and *name*. Select the desired recipient from the dropdown. You may include a message that the user will receive with the collaboration request. You cannot establish a collaboration with yourself.

You will see a list of all collaboration requests and the associated permission levels and available actions. You may need to refresh the page after selecting a button for the permission level to update.

 - *invitation sent*: You have sent an invitation to another user. There are no actions to be taken.
 - *invited*: Another user has sent an invitation to you. You can approve the invitation and grant the user view access to your data (can view), or you can deny the invitation and prevent a collaboration from being established (access denied).
 - *can view*: Your collaboration has been accepted and you can now see all data for encounters belonging to the other user (including related sightings and individuals), and they can see yours. If you want to end the collaboration, you can **Revoke View Permissions**.
 - *can edit*: You have elevated your collaboration with another user, so you may both edit the data for encounters belonging to the other user (including related sightings and individuals). If you want to revert to view-only permission, you can click **Revoke View Permissions**. If you want to end the collaboration, you can **Revoke View Permissions**.
 - *access denied*: The invitation was denied or view access was revoked. The request is retained so you have tracebility into who the collaboration was with if follow-up actions are needed or if the collaboration needs to be re-instated. To resend the invitation, click Restore Invite.

### Example collaboration between two users

The person who initiates the collaboration has an assumed acceptance, so the receiver sets the collaboration permission level.

_If User Ana initiates collaboration with User Barry:_

Neither party has view or edit access to data.



_If User Barry accepts collaboration:_

Ana and Barry can view each other's data, but they cannot edit it.



_If User Barry and User Anna click grant edit permission:_

Both Ana and Barry can view and edit each other's data.



_If User Barry does not grant edit permission or revokes edit permission after granting it:_

Ana and Barry can view each other's data, but they cannot edit it.

## Viewing Permissions

You can view an encounter if:

* You own the encounter.
* You are a site admin.
* You have a collaboration with another user that allows for view access.
* The encounter is public.

Note: To view encounters, you must be signed in. Your viewing permissions are based off your username.

## Editing Permissions

You can edit an encounter if:
* You are a site admin.
* You are the owner of the encounter.
* You have a collaboration with the owner and the owner grants you edit rights. Edit rights can be revoked at any time.
