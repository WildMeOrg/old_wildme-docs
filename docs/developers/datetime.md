---
id: datetime
title: Date/Time Data
sidebar_label: Date/Time data
---

## Overview

For many purposes (ecological, technical, timestamps, etc.) tracking an _instance_ in time is an obvious desirable goal.  Storing and using
such values has proven technically challenging. 

Simply put, the goal should be to **represent a point in time in a consistent and unambiguous manner**.

Language-specific and database-specific implementations may vary, but this goal should be the desired end result.

## Stumbling blocks

A great many problems arise around **time zones** and date/time values.  Languages, operating systems, database layers, ORMs, etc, often
make some assumptions about time zones when manipulating/storing/displaying values.  This can effectively result in loss (or corruption) of
data -- or perhaps more accurately _ambiguity_ in data.

### Example of trouble

Here is an example of current implementation (within houston) which is possibly resulting in ambiguity.  Note the values of `created` and
`updated` in User objects, and how they are represented.

The schema (in sqlite3):

```sql
CREATE TABLE "user" (
	created DATETIME NOT NULL, 
	updated DATETIME NOT NULL, 
```

Data as stored:

```sql
sqlite> SELECT created, updated FROM user;
2020-12-17 23:27:12.552817|2020-12-17 23:27:12.552853
2020-12-17 23:27:12.974032|2020-12-17 23:27:12.974045
2020-12-17 23:27:13.252815|2020-12-17 23:27:13.252826
2020-12-17 23:27:13.532320|2020-12-17 23:27:13.532331
2020-12-17 23:27:13.810780|2020-12-17 23:27:13.810790
```

Are these values in UTC?  Local to server time zone?  Local to some python-set time zone?

If there is, for example, an assumption that these values are UTC, then:
1. be sure to **document** (wiki, code, etc) that this is case
2. **ensure you are getting the results you expect** - make sure all layers (orm, database) do not try to "smartly" convert values, etc.
3. when presenting date/time data (e.g. via json output) be **explicit and consistent** _(see below)_


## Standards

* When a "default" or base time zone must be set, the **preferred value is UTC** versus any "local" time zone.  This will hopefully minimize confusion
when moving between various systems and installs.  Beware that some systems (e.g. set up by third-parties etc) may not follow this _on some
important level_.  For example, a different setting on PostgreSQL may have rippling effects.

* **Store/represent values _with time zone_** whenever possible.  This is _much_ easier said than done.  For example, values can get lost or manipulated with each layer of representation it goes through -- ORM, database, serialization to json, etc.  In particular, user-provided data (e.g. ecological) _must_ contain the original (user-provided) time zone for their data.  Simply converting the value to UTC is insufficient, as it loses the local/relative time zone.

* **Presentation/export should be [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)** unless the specific purpose warrants otherwise.
In particular, this should be used (as a string) for json values output via api.
```json
{
	"id": "cc5b2810-b369-43ab-afa5-8e01fb81e08e",
	"time": "2020-10-05T00:01:59.217+03:00"
}
```


## Implementation notes

### EDM/Java

The class [org.ecocean.ComplexDateTime](https://github.com/WildMeOrg/Wildbook/blob/next-gen/src/main/java/org/ecocean/ComplexDateTime.java)
we developed to handle introduction of ambiguity through existing solutions.  It is based on
[java.time.ZonedDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/ZonedDateTime.html),
but ensures the original time zone data is retained when persisted.

```sql
db=> SELECT * FROM "COMPLEXDATETIME";
 COMPLEXDATETIME_ID |          DATETIME          |    TIMEZONE    
--------------------+----------------------------+----------------
                  1 | 2020-10-23 16:50:07.609+00 | Z
                  2 | 2020-10-02 21:01:59+00     | +03:00
                  3 | 2020-10-22 23:27:42.968+00 | Z
                  4 | 2020-10-04 21:01:59+00     | -07:00
                  5 | 2016-06-13 02:56:00+00     | Africa/Nairobi
                  6 | 2020-10-21 22:31:10.048+00 | Z
```

## Non-specific date/time values

**_WORK IN PROGRESS_**

For some data (e.g. ecological), accomodating broad, "non-instant" date/time value is a desirable option.
For example, a user may have a date _without time_, such as
"2012-05-01" or even as vague as "March 2018".  The EDM attempts to handle these values.

* document internal storage
* how values are represented in json for api
* document conversion to _**approximate** instant_ (e.g. for sake of sorting etc) 
* dealing with ranges (start/end instants)

## Random useful(?) links

* [Why does datetime.datetime.utcnow() not contain timezone information?](https://stackoverflow.com/questions/2331592/why-does-datetime-datetime-utcnow-not-contain-timezone-information)

* ugly world of PostgreSQL and timestamps with/without time zones: [1](https://phili.pe/posts/timestamps-and-time-zones-in-postgresql/),
  [2](https://tapoueh.org/blog/2018/04/postgresql-data-types-date-timestamp-and-time-zones/), etc...

* DataNucleus notes on [timezone woes](https://tapoueh.org/blog/2018/04/postgresql-data-types-date-timestamp-and-time-zones/) and
  [multi-column implementations](https://stackoverflow.com/questions/2373110/store-java-util-calendar-field-into-one-column)
