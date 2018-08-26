# STAT Interview

# Request

## Business case:

STAT is committed to surfacing insights in our web application using the data that we collect on a daily basis. This is the major objective of the STAT web application team this year.


## Project goal and specification:

To this end, we would like you to build a single page application that will allow the user to upload a CSV into the database and visualize the information contained therein.

The visualizations that we will like the user to see are:

- Rankings for Google, Google Base Rank, Yahoo and Bing over an arbitrary date range
- Weighted rankings for all the above search engines over an arbitrary date range using the formula: (Rank for the search engine x (Global Monthly Searches / Max Global Monthly Searches))
We would like the user to be able to export CSV data that was used to the generate the 2 visualizations above for the selected date range.

## Data:

We have attached a CSV dump of 2 weeks of ranking data with this email.

The headers in the CSV are:

Date: the day the ranking was collected
Site: the title of the site that the rank was collected for
Keyword: represents the keyword that was searched for on the 3 search engines (Google, Yahoo and Bing)
Google, Google Base Rank, Yahoo, Bing: are the ranks for the keyword on the given date
Global Monthly Searches: volume of search activity for the keyword on the given date
Deliverables:

Please send us over your source code, database schema, database dump and setup instructions either in a zip file or as a link to a source code repository.

# Solution

## Pre-requirements

To run the project, you need to have

- ruby-2.5.1 (you can instal it using RVM https://rvm.io/rvm/install)
- rails 5.2.1
- redis (https://redis.io/topics/quickstart)
- sqlite
- yarn (https://yarnpkg.com/lang/en/docs/install/)

Take a look on how to run
- Backend rails api
- Frontend react app

Improvments
- Use a better react lib for file upload;
- Limit file uploaded to be processed only one by file name;
- Better feedback if a file is proccessing or not;