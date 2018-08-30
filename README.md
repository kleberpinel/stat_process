# STAT Interview

To run the project, you need to have

- ruby-2.5.1 (you can instal it using RVM https://rvm.io/rvm/install)
- rails 5.2.1
- redis (https://redis.io/topics/quickstart)
- postgres
- yarn (https://yarnpkg.com/lang/en/docs/install/)

Take a look on how to run
- Backend rails api
- Frontend react app

## Strong points
- 2 projects 100% independet
- Backend using Rails + Sidekiq to process the file in parallel
  - Domain folder with Bussines classes
  - Jobs to process all heavy part in parallel
- Frontend with React + Redux executing HTTP calls to backend
  - React components using ProtoTypes
  - All files splited and well organized
  - Using Webpack + Yarn
  - Read to generate distribuitions for multiple environments

## Improvements to be made
- Use a better react lib for file upload;
- Limit file uploaded to be processed only one by file name;
- Better feedback if a file is proccessing or not;
- Better interaction with react-dates calendar
- Investigate problem with react-chartjs with Redux
- Set colors for each Search Engine for a better visualization
- Write tests for backend and frontend

## Time Wasted
- Dealing with 3th party libs like react-dates, react-chartjs-2 and file-upload
  - It take a quite considerable time to get those libs working in the point that they are

## Setup Instructions
- Instal ruby
- Instal postgres
- Instal redis
- Instal yarn

On frontend folder run:
$ yarn instal
$ yarn start

In another tab on terminal, go to backend project and run:
$ redis-server

In another tab, run:
$ bundle install
$ rails s -p 5000

In another tab, run:
$ sidekiq
