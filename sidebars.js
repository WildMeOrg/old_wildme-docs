module.exports = {
  researcherSidebar: {
    Quickstart: [
      "researchers/quickstart",
    ],
    Introduction: [
      "researchers/overview",
      "researchers/ia_pipeline",
      "researchers/report_encounter",
      "researchers/encounter_guide",
      "researchers/marked_individual",
      "researchers/matching_process",
      "researchers/sighting",
      "researchers/my_account",
    ],
    Features: [
      "researchers/bulk_import",
      "researchers/manual_annotation",
      "researchers/projects",
      "researchers/silo_security",
    ],
    Roles: ["researchers/org_admin"],
    Specifications: [
      "researchers/system_requirements",
      "researchers/photography_guidelines",
      "researchers/unsupported_developer_tools",
    ],
  },
  developerSidebar: {
    Introduction: ["developers/overview", "developers/terms"],
    Wildbook: ["developers/wildbook_overview"],
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
