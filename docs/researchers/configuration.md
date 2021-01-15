---
id: configuration
title: Configuration
sidebar_label: Configuration
---


This guide discusses how to configure Wildbook to fit the study design of your project. Wildbook configuration is done at the file system level in .properties files and .json files. There is no UI to change these files, and we recommend a good Linux command line editor to change them. For changed values to be reflected in the UI, a Wildbook restart may be needed.

*Changing Wildbook configuration is a technical task and can make Wildbook inoperable if misconfigured. We highly recommend tracking changes you make to Wildbook in source control. Source control prevents your changes from being lost when you upgrade Wildbook in the future.*

## Wildbook Configuration Structure

By default Wildbook configuration options are stored as name-value pairs in .properties or .json files in:

`<tomcat_install_dir>/webapps/wildbook/WEB-INF/classes/bundles`

Wildbook has a look-here-first override directory for these files hardcoded to:

`/data/wildbook_data_dir`

Wildbook looks in the override directory first before looking in the installation directory, allowing you to easily maintain secure configurations (e.g., the database password in jdoconfig.properties) in a separate directory while still upgrading Wildbook entirely in the installation directory.

You can edit these files with a text editor, and after making changes, restart Tomcat to see the new configurations take effect.

### Translation files

Properties files placed in language-specific folders, such as "en" (English), "es" (Spanish), etc. represent translated files of the Wildbook user interface (UI).

### Changing the database and persistence behavior

Wildbook uses the  [DataNucleus Access Platform](https://www.datanucleus.org), which allows it to use a number of different databases and database types. Out of the box, Wildbook looks for PostgreSQL at localhost:5432/wildbook with username 'wildbook' and password 'wildbook'. You must have PostgreSQL installed and running, the 'wildbook' database created, and user 'wildbook' defined. Wildbook can automatically create the necessary tables and columns when it is first started. You do not need to create these yourself.

Database configuration is defined in the file jdoconfig.properties.

*You can control Wildbook's database behavior by changing the values of these properties and by adding others, as defined in the DataNucleus documentation. This is recommended for software developers only. We do not recommend databases other than PostgreSQL and use PostGIS extensions in Wildbook.*

### Changing Wildbook's Appearance

At its core, Wildbook uses Bootstrap for its mobile, responsive design. Most changes to display and design can be performed by changing:

  * header.jsp - This file defines the standard JavaScript and CSS imports used by Wildbook and implements any header graphics and navigation at the top of the pages.

  * footer.jsp - This file defines any HTML to display at the bottom of the page, such as copyright information.

  * commonConfiguration.properties - This file contains many configuration options for Wildbook, and it includes options for search engine optimization (SEO), page titles, and other basic HTML fields.

  

  The HTML header for web pages in Wildbook is pulled from the file **header.jsp**. This file retrieves  additional values from **commonConfiguration.properties** and *lang*/header.properties.

#### CSS changes

Wildbook uses [Less](http://lesscss.org/|) to create the manta.css file at build time. You'll need to modify the .less files in cust/mantamatcher/styles to make your custom changes.

### Encounter Configuration

Most Wildbook project configuration occurs in the commonConfiguration.properties file. This file is located in the following location in your Wildbook installation:

`wildbook/WEB-INF/classes/bundles/commonConfiguration.properties`

or in the override director (preferred) at: 

`/data/wildbook_data_dir/WEB-INF/classes/bundles/commonConfiguration.properties`

You can alter important Wildbook Encounter parameters in this file, such as:
  * Number and type of measurements (e.g., weight, length, salinity, temperature, etc.)
  * Number of life stages (e.g., juvenile, sub-adult, adult)
  * Project species
  * Physical patterning codes
  * Physical tag parameters (SAT, PAT, tags, etc.)
  * tissue sample parameters, such as:
    * number of alleles
    * tissue sample storage method
    * haplotypes
    * biochemical measurements (13C, 15N, etc.)
  * and more...  

When you modify configuration parameters in this file, you may have to restart the Tomcat web server for the changes to take effect.

#### Supporting multiple species 

By default, Wildbook assumes that information added to the database is for only one species of animal. You can configure Wildbook to support multiple species by setting the **genusSpecies** fields, and setting the **showTaxonomy** parameter to ''true'' in commonConfiguration.properties. The following example shows how to set these properties to differentiate between three species of large cats.


`#show taxonomy`
`showTaxonomy = true`

`#for multi-species libraries, fill out the genus and species for each supported animal type, starting with genusSpecies0`
`genusSpecies0 = Panthera leo`
`genusSpecies1= Panthera tigris`
`genusSpecies2 = Panthera pardus`

Additional species can be set by incrementing the properties, such as genusSpecies3, genusSpecies4, etc.

#### Configuring encounter states for workflow

Encounters can be assigned to particular states, often reflecting critical parts of a project workflow. For example, states can be used to define what data has been 'approved' for use in your study or is 'unidentifiable' due to poor quality. By default, new data in Wildbook is put into an 'unapproved' state that represents its status as unreviewed and of uncertain quality.

The available states are defined in the following section of commonConfiguration.properties.

`#encounterState options, the precursors to future workflow`
`encounterState0=unapproved`
`encounterState1=approved`
`encounterState2=unidentifiable`

Additional states can be set by incrementing the properties, such as encounterState3, encounterState4, etc.

#### Configuring  location IDs (study sites)

Defining the boundaries of study areas is an important aspect of mark-recapture study design. Wildbook allows you to configure study areas as an attribute that can be assigned to each Encounter, categorizing data by where it occurred. Encounter.locationID is one of three ways of defining location in Wildbook. The three ways are:

  * Encounter.locationID - assigns an Encounter to a human-defined study area
  * Encounter.decimalLatitude/decimalLongitude - assigns an Encounter to precisley measured GPS coodinates
  * Encounter.verbatimLocality - a general description of location provided by the data submitter from which locationID may be determined.

Encounter.locationID may be the most valuable form of location identifier in Wildbook. GPS location may not be known, and verbatim descriptions of location may vary significantly by submitter.  LocationID is powerful because it specifically defines whether a data point should be included or excluded from a study area during mark-recapture analysis and can be used to define which animals to match against in the [Wildbook Image Analysis pipeline](ia_pipeline.md). 

To configure the list of study sites in your Wildbook, change the values in locationID.json. [Click here for more information about location ID and its configuration.](locationID.json)

#### Configuring encounter measurements

You can configure reported encounters to have multiple recorded measurement observations (e.g., length, width, height). The measurement types are defined in commonConfiguration.properties and in *lang*/commonConfigurationLabels.properties, starting with the number 0 and incrementing by one for each new measurement type. 

For each measurement, you must define a measurement name, the corresponding units, and the general sampling protocols applied to measurements in your study. You can turn and off measurements altogether with the showMeasurements entry, which can be set to true or false.

<code>
#show measurements
showMeasurements = true

#Measurements
measurement0=weight
measurement1=length
measurement2=height

measurementUnits0=kilograms
measurementUnits1=meters
measurementUnits2=meters

#Sampling Protocol for all Measurement types
samplingProtocol0=estimate
samplingProtocol1=measure
</code>

##### Configuring and localizing measurement labels

The names of measurements, their units, and sampling protocols can be localized into multiple languages in Wildbook in the language-specific copies of commonConfigurationLabels.properties. Notice the .label extension added to the base name of the measurement-related property from commonConfiguration.properties (see above).

<code>
#Labels for Measurements
weight.label=Weight
length.label=Length
height.label=Height
13C.label=13C
15N.label=15N
34S.label=34S
celsius.label = Celsius
salinity.label = Salinity
WaterTemperature.label = Water Temperature
kilograms.label=Kilograms
meters.label=Meters
ppm.label=ppm

samplingProtocol0.label=Estimated Value
samplingProtocol1.label=Directly Measured
</code>

After making changes, restart Tomcat to see them take effect.

#### Configuring life stages

Observations of animals are often categorized by their life stage, such as adult, sub-adult, juvenile, hatchling, etc. You can configure the life stages for your project with the following settings in commonConfiguration.properties.

<code>
#show lifeStage
showLifestage = true

#defined life stages
lifeStage0=juvenile
lifeStage1=sub-adult
lifeStage2=adult
</code>

Additional stages can be set by incrementing the properties, such as lifeStage3, lifeStage4, etc.

#### Configuring physical tag metadata

If you're using physical tags (SAT, PAT, marker, etc.) during your research, you can record metadata about those tags and associate it with an Encounter recorded at tag deployment. The following attributes (examples below) are available to configure:

  * showMetalTags - whether physical marker tags are used in your study should be shown on the Encounter page in Wildbook. Values are true/false.
  * metalTagLocation*X* - The list of placement locations for the tag on the body of the animal
  * showAcousticTag - whether acoustic tags are used in your study should be shown on the Encounter page in Wildbook. Values are true/false.
 * showSatelliteTag - whether satelite tags are used in your study should be shown on the Encounter page in Wildbook. Values are true/false.
  * satelliteTageName*X* - The list of satellite tag manufacturers/providers to help identify the type of tag.

<code>
#tag parameters
showMetalTags=true
metalTagLocation0=left
metalTagLocation1=right

showAcousticTag=true

showSatelliteTag=true
satelliteTagName0=Wild Life Computers
satelliteTagName1=SirTack
</code>

#### Configuring visual patterning codes

Often times, the visual coloration of species can be divided into categories to allow for easier filtering for individual identification. For example, humpback whales can be individually identified by their flukes and have a graded fluke coloration system, ranging from 1-5.

Wildbook allows each Encounter to be assigned a patterning code to match the observed visual features of the animal in the Encounter.

You can configure pre-defined patterning codes for your project in commonConfiguration.properties. The property showPatterningCode must be set to true, and then a sequentially numbered set of patterningCode*X* names and values must be defined.

Here is a configuration example of giant manta patterning codes from the Wildbook [MantaMatcher.org](https://www.mantamatcher.org).

<code>
#defined patterningCodes for distinct visual marking types for individuals identified with photo-identification
showPatterningCode = true

patterningCode0 = normal pigmentation
patterningCode1 = black pigmentation - melanistic
patterningCode2 = white pigmentation - leucistic
</code>

#### Configuring elevation and depth

You can configure whether elevation or depth are recorded in your study as Encounter properties in the commonConfiguration.properties file. Set maximumElevationInMeters to true to make elevation a measurement of your study. Set maximumDepthInMeters to true to make depth an measurement of your study.

<code>
#show elevation/depth

maximumElevationInMeters = false
maximumDepthInMeters = true
</code>

Restart Tomcat after making changes.

#### Configuring tissue samples and analyses

Wildbook allows you to add one ore more records for biological samples collected during an Encounter with an individual animal. Biological samples have the following attributes defined in commonConfiguration.properties:

  * tissueType*X* - a sequential definition of the types of tissues that can be collected in your study (e.g., fecal, blood, skin, biopsy, etc.)
  * biologicalMeasurementType*X* - a sequential definition of the types of chemical measurements that can be analyzed and determined from tissue samples in your study (e.g., fatty acid Carbon and Nitrogen measurements)
    * biologicalMeasurementUnits*X* - a sequential definition of the units of measurement for chemical measurements on tissue samples
    *  biologicalMeasurementSamplingProtocol*X* - a sequential definition of the protocols used to determine the measurements
  * numLoci - the number of loci to provide allele values for if genotyping is performed as an analysis on the tissue sample
  * numPloids - leave at 2 per loci
  * alleleRelaxMaxValue - the value difference allowed between allele values to consider them a "match" when looking for other genotypes that might match or be similar.


<code>

#tissue sample types
tissueType0 = Tissue sample
tissueType1 = Fecal sample
tissueType2 = Mucus sample
tissueType3 = Blood sample
tissueType4 = Parasite sample

#biological measurement types
biologicalMeasurementType0 = 13C
biologicalMeasurementType1 = 15N
biologicalMeasurementType2 = 34S

#corresponding biological measurement units
biologicalMeasurementUnits0 = ppm
biologicalMeasurementUnits1 = ppm
biologicalMeasurementUnits2 = ppm

#corresponding biological measurement sampling protocols
biologicalMeasurementSamplingProtocols0 = Lipids extracted
biologicalMeasurementSamplingProtocols1 = No lipids extracted, corrected
biologicalMeasurementSamplingProtocols2 = No lipids extracted, uncorrected

#genetic parameters
numLoci = 14
numPloids = 2
alleleRelaxMaxValue = 5
</code>

Restart Tomcat after making changes.

#### Custom content display

You can import custom functionality into each Encounter's display in encounter.jsp. For example, spot pattern matching-related functions are imported from file spotMatchingAlgorithm.jsp (see example below).

Import definitions are found in file encounter.properties file in the localized directory (e.g., WEB-INF/classes/bundles/en/encounter.properties).

<code>
#define the module JSP files to import
#files must be placed in the encounters directory of the Wildbook webapp (i.e., in the same directory as encounter.jsp)
jspImport0=spotMatchingAlgorithm.jsp
#jspImport1=myFile.jsp
</code>

Restart Tomcat after changing values.

### Marked Individuals

The following aspects of Marked Individual data records can be configured in Wildbook.

====Social relationships====
Marked Individuals in Wildbook can have Relationship associations between them. These are meant for more long-term types of relationships, such as  "mother-calf" or social group "member". Relationships and their roles can be set in the UI on the Marked Individual page individuals.jsp.

To configure the types of social relationships in your Wildbook and the roles that Marked Individuals can play in them, change the following fields in commonConfiguration.properties:
  * relationshipType*X* - a sequentially numbered set of relationship types to be recorded in your study.
  * relationshipRole*X* - the role that an individual can play in a Relationship.

Here are some example configurations:
<code>
#social relationships-related data
relationshipType0 = social grouping
relationshipType1 = familial

relationshipRole0 = member
relationshipRole1 = mother
relationshipRole2 = calf
</code>

Restart Tomcat after making changes.

#### Email Notifications

The following email addresses are sent messages when important events occur in Wildbook. These email addresses are specific to your project.

- sendEmailNotifications - Defines whether Wildbook should send any emails at all. Set to true, this parameter instructs Wildbook to send email updates for several events, such as:

  - new Encounter submission reports

  - new marked individual identifications to adopters ad submitters

    MarkedIndividual resights to adopted and submitters

- autoEmailAddress - The email address from which Wildbook messages will be sent. If you have a secured mailhost, it's important to configure the mailhost to allow emails to be sent from this address.

- newSubmissionEmail - The email address to send notices of new Encounter reports submitted to Wildbook.

<code>
#email addresses and parameters

sendEmailNotifications=true
autoEmailAddress=webmaster@someplace.org
newSubmissionEmail=submissions@someplace.org
mailHost=localhost

</code>

### Internationalization (I18N)

Wildbook is a web-based application with an internationalization (I18N) foundation in its code base. Wildbook is not yet fully translated. Most of the JSP files are localized but none of the servlets are yet. Work is underway to complete localization.

Wildbook loads translated strings from the standard Java properties files, which reside in Wildbook's WEB-INF/classes/bundles directory or can be overridden (on a file-by-file basis) in the equivalent path in the data directory.

#### Setting the supported languages

You can set the default language for Wildbook in commonConfiguration.properties with the defaultLanguage attribute, which takes a two-letter code for input. The full list of supported language, which must include the default in position 0, is configured with sequential language//X// name-value pairs. Corresponding localized Strings could be found in the appropriate language directory of Wildbook, such as WEB-INF/classes/bundles/es for 'es' (Spanish).

In the example below, English is set as the default language "en", and Wildbook is configured to provide the user with English and Spanish options for display. 

<code>
defaultLanguage = en

language0 = en
language1 = es
#language2 = fr
#language3 = de
</code>

The name displayed for each language can also be configured in commonConfiguration.properties.

<code>
en = English
es = espa\u00f1ol
fr = fran&#231;ais
</code>

With languages configured and Tomcat restarted, Wildbook displays configured languages as flag options.

It looks for a correspinding flag icon in the images directory. Examples:
  * flag_es.gif
  * flag_en.gif
  * flag_fr.gif

If your language flag is not present in Wildbook, you may need to add it.

#### Translating text

Most pieces of text in Wildbook pages (HTML and JSP files) are contained in translatable properties files. For example, the page for an Encounter (encounter.jsp) pulls its strings from WEB-INF/classes/bundles/en/encounter.properties (English text). Here is an example of the contents of encounter.properties.

<code>
encounter = Encounter

unidentifiable_title = Unidentifiable Encounter Number
unapproved_title = UNAPPROVED Encounter Number
title = Encounter
identified_as = Identified as:
workflowState = Workflow state:
setWorkflowState = Set Workflow State
matched_by = Matched by
status = Status
...
</code>

===== Legacy Spot Matching =====
Wildbook was originally developed for use with whale sharks (*Rhincodon typus*) and other spotted species. The internal spot pattern recognition system is highly accurate and had scaled well to over 25000 patterns on whaleshark.org. While our newer pattern recognition efforts in Wildbook Image Analysis will eventually replace them, the legacy spot pattern recognition system is still highly accurate and usable in Wildbook.

By default, the spot pattern recognition system is turned off. It can be turned back on in commonConfiguration.properties by setting the useSpotPatternRecognition value to true.

<code>
#pattern recognition

useSpotPatternRecognition=true
</code>