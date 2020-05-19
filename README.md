# Bucket App

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Description

On trips, I like to keep a "bucket list" of things that I want to accomplish before heading home. Pen and paper has its place, but after several rainy weeks in Ireland, that list won't stay very legible. I built Bucket to help people store and develop the Bucket List of experiences they hope to achieve in their lifetimes.

_Duration: 2 Week Sprint_

To see the deployed app, visit here.

## Prerequisites

To run this application on your local browser, you'll need the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

1. Create a database named `prime_app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries. [Postgres](https://www.postgresql.org/download/) will need to be running while you are running the app.
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Open up a second terminal window and run `npm run client`
6. The `npm run client` command will open up a new browser tab for you

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Usage

1. On landing page, users are invited to either log in or register. If registering, users select a username and password and click "Register" button. If a user has already created an account, they will enter their username and password and click the "Login" button.
2. Successful Registration or Login will direct user to /home page. A user can enter their bucket list items but typing in the form field and clicking "Add to List."
3. Each item added to list will appear on home page, accompanied by "Delete," "Edit," and "Did it!" buttons.
4. Click "Delete" to delete item from list.
5. Click "Edit" to make list item appear in edit view. Hit return to submit changes and click "Reset" to return to static list view.
6. Double click "Did it!" to move list item from Home Page to Things I've Done page.

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Built With

This project uses React, Node, Express, React-Redux, React-Saga, JavaScript, CSS, and Amazon Web Services S3.

## Acknowledgements

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
