module.exports = {
  researcherSidebar: {
    Quickstart: [
      "researchers/firstlogin",
    ],
    Introduction: [
      "researchers/overview",
      "researchers/ia_pipeline",
	  "researchers/data_entry",
      "researchers/encounter_guide",
      "researchers/marked_individual",
      "researchers/sighting",
	  "researchers/security_overview",
    ],
	Data: [
	     "researchers/photography_guidelines",
      "researchers/report_encounter",
	  "researchers/bulk_import",
	  "researchers/matching_process",
	  "researchers/manual_annotation",
	  "researchers/projects",
	  "researchers/r_package",
    ],
    Security: [
      "researchers/security_overview",
	  "researchers/my_account",
      "researchers/silo_security",
	  "researchers/org_admin",
    ],
    Roles: ["researchers/org_admin", "researchers/site_admin"],
    Specifications: [
      "researchers/system_requirements",
      "researchers/unsupported_developer_tools",
	  "researchers/configuration",
    ],
  },
  developerSidebar: {
    Introduction: [
      "developers/overview",
      "developers/terms",
      "developers/datetime",
    ],
    Wildbook: ["developers/wildbook_overview"],
    "Wildbook IA": ["developers/wbia/wbia_overview"],
    Codex: [
      "developers/codex_overview",
      "developers/houston",
      "developers/codex_frontend",
      {
        type: "category",
        label: "EDM API",
        items: [
          "developers/edmapi/edm_api_overview",
          "developers/edmapi/authentication",
          "developers/edmapi/user",
          "developers/edmapi/assets",
          "developers/edmapi/encounter",
          "developers/edmapi/individual",
          "developers/edmapi/org",
          "developers/edmapi/site_settings",
        ],
      },
    ],
  },
};
