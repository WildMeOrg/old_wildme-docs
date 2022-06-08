module.exports = {
   researcherSidebar: {
	Codex[
		Quickstart: ["researchers/codex/firstlogin"],
		Introduction: [
		"researchers/codex/introduction",
		  "researchers/codex/standard_reporting",
		  "researchers/codex/bulk_reporting",
		  "researchers/codex/image_analysis"
		],
		Data: [
		"researchers/codex/data",
		  "researchers/codex/data_format",
		  "researchers/codex/data_search",
		  "researchers/codex/data_match"
		],
		Security: [
		  "researchers/codex/security",
		  "researchers/codex/security_overview",
		  "researchers/codex/security_myaccount",
		  "researchers/codex/security_collaborations"
		],
		"Set Up": [
		  "researchers/codex/setup_systemrequirements",
		  "researchers/codex/setup_initialconfiguration",
		  "researchers/codex/configuration",
		  "Control Panel":[
		  "researchers/codex/setup_controlpanel",
			"researchers/codex/setup_controlpanel_generalsettings",
			"researchers/codex/setup_controlpanel_splashpage",
			"researchers/codex/setup_controlpanel_managefields",
			"researchers/codex/setup_controlpanel_sitestatus",
			"researchers/codex/setup_controlpanel_generalsettings",
			"Manage Users":[
				"researchers/codex/setup_controlpanel_manageusers",
				"researchers/codex/setup_controlpanel_manageusers_dataroles",
			],
			"researchers/codex/setup_controlpanel_administration",
		  
		  ]
		],
		"researchers/codex/faq",
		
	],
	Wildbook:[ 
		Introduction: [
		  "researchers/wildbook/overview",
		  "researchers/wildbook/ia_pipeline",
		  "researchers/wildbook/data_entry",
		  "researchers/wildbook/encounter_guide",
		  "researchers/wildbook/marked_individual",
		  "researchers/wildbook/sighting",
		  "researchers/wildbook/security_overview",
		  "researchers/wildbook/whatsnew",
		],
		Quickstart: ["researchers/wildbook/firstlogin"],
		Data: [
		  "researchers/wildbook/photography_guidelines",
		  "researchers/wildbook/report_encounter",
		  "researchers/wildbook/bulk_import",
		  "researchers/wildbook/matching_process",
		  "researchers/wildbook/manual_annotation",
		  "researchers/wildbook/searching",
		  "researchers/wildbook/projects",
		  "researchers/wildbook/locationID",
		  "researchers/wildbook/r_package",
		],
		Security: [
		  "researchers/wildbook/security_overview",
		  "researchers/wildbook/my_account",
		  "researchers/wildbook/silo_security",
		  "researchers/wildbook/org_admin",
		  "researchers/wildbook/site_admin",
		],
		Specifications: [
		  "researchers/wildbook/system_requirements",
		  "researchers/wildbook/unsupported_developer_tools",
		  "researchers/wildbook/configuration",
		]
   ]
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
