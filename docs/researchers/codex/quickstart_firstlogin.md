---
id: codex-firstlogin
title: Getting Started with Codex
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This Quickstart topic covers some basic tasks and concepts when first logging into Codex.

## Account Registration

Navigate to the invitation request page by clicking “Request an invitation” on the Login page or at the very bottom of the Welcome page under the Account section of the footer. Alternatively, you may directly visit the page by adding "/request" to the end of your codex instance's base URL.

To request your invitation, simply provide the email address you’d like to be associated with your account, your full name, and an optional message detailing the reason(s) for your request.

If invited, you will receive an email at the provided address with your temporary login information.

## Change Your Password 

To reset the password for your Codex account:

1. On the Account Login page, click the **Forgot?** link below the **LOGIN** button. 
1. On the next page, provide the email address associated with your Codex account in the **Email address** field.
1. Click the **Reset Password** button.
1. Check your email inbox where you will receive an account password reset email. If you do not receive this, click the **Resend Email** button on the Password reset page.
1. Click on the link in the email you receive, which will direct you back to the Codex website to create a new password.
1. Type in your desired new password and repeat the same password in the **Confirm password** field. We recommend using at least 8 characters and a combination of letters, numbers, and special characters.
1. Click the **RESET PASSWORD** button. Once you see a confirmation popup message that says you have successfully reset your password, click the **Return to login page** link.
1. Log in with your email address and your newly updated password.

## Read Up on Basic Wildbook Concepts

TBD

## Submit and Match Your First Encounters
To report a sighting, click the plus icon in the top right menu bar. You may optionally upload any images, and then indicate how many animals were observed in your sighting. Then you will provide greater detail about the encounter. You are required to indicate the time of the sighting (which could be as specific as the date and time, or as broad as the year), the detection model you’d like to run, and the region in which the sighting occurred. More specific detail may be added as desired. Click “Report Sighting” once you have finished to begin the identification pipeline.

If you uploaded any images, you will be prompted to assign annotations after the animal detection step finishes. For each animal detected, click the plus icon in its “Annotations” box and then select the image containing a bounding box around the animal you would like associated. You may also add any additional metadata to the animals in the sighting at this point. Press the “Commit” button at the top of the page once you are finished. You then have the option of running an identification job on the image(s) to look for any matches with animals in other sightings.

If you choose to run the identification job, once it has completed you may click “View Match Results” to review potential matches for the animals in your sighting. By default, the match candidates will be ranked according to their system-calculated “score,” or their level of similarity to a given animal in your sighting. If a candidate is a true match, click on “Confirm Match.” You will then either create a new individual (if neither animal is assigned), designate an unassigned animal to an existing individual (if only one is assigned), or merge two individuals (if both are assigned). Once you have finished reviewing matches, you may opt to “Mark sighting reviewed” in the “Actions” dropdown at the top right.

If you forego the identification job, you may still manually identify the animals in your sighting using the “Identify” dropdown in the “Animals” tab to either “Create new individual” or “Manually assign” to an existing individual.

## Next Steps

TBD

### Extend Collaboration Invites

TBD
### Request Further Configuration

TBD
### Bulk Import Legacy Data for Matching

TBD
