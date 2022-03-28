module.exports = {
  researcherSidebar: {
    Introduction: [
      "researchers/overview",
      "researchers/ia_pipeline",
      "researchers/data_entry",
      "researchers/encounter_guide",
      "researchers/marked_individual",
      "researchers/sighting",
      "researchers/security_overview",
      "researchers/whatsnew",
      "researchers/faq",
    ],
    Quickstart: ["researchers/firstlogin"],
    Data: [
      "researchers/photography_guidelines",
      "researchers/report_encounter",
      "researchers/bulk_import",
      "researchers/matching_process",
      "researchers/manual_annotation",
      "researchers/searching",
      "researchers/projects",
      "researchers/locationID",
      "researchers/r_package",
    ],
    Security: [
      "researchers/security_overview",
      "researchers/my_account",
      "researchers/silo_security",
      "researchers/org_admin",
      "researchers/site_admin",
    ],
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
      "developers/faq",
    ],
    Wildbook: [
      "developers/wildbook_overview",
      {
        type: "link",
        label: "Azure Wildbook setup",
        href:
          "https://docs.google.com/document/d/1o1BDHzf2FV-LTShPLgqoNJBLJnQN-tfe50lHlm92qX8/edit#heading=h.1ylnnzcj18n1",
      },
    ],
    "Wildbook IA": [
      "developers/wbia/wbia_overview",
      "developers/wbia/wbia_plugins"
    ],
    Codex: [
      "developers/codex_overview",
      "developers/houston",
      "developers/elasticsearch",
      "developers/codex_frontend",
      "developers/debugging",	
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
