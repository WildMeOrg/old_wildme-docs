---
id: debugging
title: Debugging
---

This page will describe the debugging utilities available in the Codex system.

The utilities can be spilt into
   - Utilities on the CLI
   - Utilities on the Web API
   
## CLI Utilities
These are available via the invoke commands in the docker environment which can eb accessed by running "docker-compose exec houston /bin/bash"

The utilities are visible via the 'invoke -l' command and they well not be described in detail here 
   
## Web Utilities
These are web pages that are available only to users with the 'staff' role. It is not possible to create a user with staff role via the REST API. That must be done by using the invoke utils on the CLI by creating a user and adding the Staff role.

Helpful debugging pages are
   - /api/v1/job-control/debug : Last 20 jobs including Sage data
   - /api/v1/assets/jobs/{asset guid} : Last 20 jobs for the asset
   - /api/v1/annotations/jobs/{annotation guid} : Last 20 jobs for the annotation
   - /api/v1/asset_groups/sighting/jobs/{ags guid} : Last 20 jobs for the AGS
   - /api/v1/sightings/jobs/{sighting guid} : Last 20 jobs for the Sighting
   - /api/v1/audit_logs/ : Last 20 audit logs (also visible to admin users)
   - /api/v1/audit_logs/faults : Last 20 fault logs (also visible to admin users)
   - /api/v1/audit_logs/{guid} : Last 20 logs for the guid for any top level module (Asset/Annotation/Individual/Sighting/Encounter/etc) 
