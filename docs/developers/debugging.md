---
id: debugging
title: Debugging
---

This page describes the debugging utilities available in the Codex system.

The utilities can be spilt into:
   - Utilities on the CLI
   - Utilities on the Web API
   
## CLI Utilities
These are available via the invoke commands in the docker environment, which can be accessed by running "docker-compose exec houston /bin/bash"

The utilities are visible via the 'invoke -l' command, and they well not be described in detail here.
   
## Web Utilities

The web debugging utilities are split up into:
   - Debug information for a particular object
   - Job data (system-wide or for a particular object)
   - Audit log data (system-wide and for a particular object)

Debug- and job-related data are only available to users with the 'Staff' role. Audit log data is visible to users with the Staff and Admin roles.

It is intentionally not possible to create a user with Staff role via the REST API. That must be done by using the invoke utils on the CLI by adding the Staff role to a user.

### Debugging pages for objects:
   - /api/v1/sightings/debug/{sighting guid} : extensive data for the sighting, its encounters, assets, annotations, etc.
   - /api/v1/encounters/debug/{encounter guid} : as only one sighting per encounter, this is the same as the sighting data above to give as much contextual information as possible (and reduce code)
   - /api/v1/asset_groups/debug/{asset group guid} : data for the asset group, all it's AGS, assets, annots etc
   - /api/v1/asset_groups/sighting/debug/{AGS guid} : data for the AGS, all it's assets, annotations etc
   - /api/v1/assets/debug/{asset guid} : Full data for the asset including any jobs
   - /api/v1/individuals/debug/{encounterindividual guid} : Full data separating out the Houston encounter data from the EDM data.
   - /api/v1/annotations/debug/{annotation guid} : Working on the principle of giving as much useful data as possible reusing existing schemas:
     - If annotation is part of a Sighting gives the full Sighting data
     - If annotation is part of an AGS gives the full AGS data
     - Otherwise just the annotation data is presented.
### Job data
   - /api/v1/job-control/debug : Last 20 jobs including Sage data
   - /api/v1/assets/jobs/{asset guid} : Last 20 jobs for the asset
   - /api/v1/annotations/jobs/{annotation guid} : Last 20 jobs for the annotation
   - /api/v1/asset_groups/sighting/jobs/{ags guid} : Last 20 jobs for the AGS
   - /api/v1/sightings/jobs/{sighting guid} : Last 20 jobs for the Sighting
### Audit log data
   - /api/v1/audit_logs/ : Last 20 audit logs
   - /api/v1/audit_logs/faults : Last 20 fault logs
   - /api/v1/audit_logs/{guid} : Last 20 logs for the guid for any top level module (Asset/Annotation/Individual/Sighting/Encounter/etc)
     - The last page is also available in a more user friendly format at /auditlog
