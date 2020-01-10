# FriendFinder

## Description
Friend Finder is a site used to find your closest friend!  Our survey consists of 10 personality questions.  Once answered you will be shown your closest match according to an exhaustive algorithm.  You are able to view the current list of all friends using the built-in API.

## Demo
![FriendFinder Screenshot](https://i.imgur.com/H2jaJqr.png)

## Installation
* Clone FriendFinder repository.
* While in the FriendFinder directory: run `npm i` to install dependencies.
* Run `npm start` to start the Express server.
* Navigate to http://localhost:3000 to see the home page of the app.

## Usage
From the home page you are able to access the Suvey by selecting the Go to Survey button, which will allow you to fill out the requisite questions in order to find your most suitable friend.  All fields are required.  You are also able to access the API by clicking the link below the page (or by sending requests to http://localhost:3000/api/friends) as well as the GitHub Repository link.

## Frameworks
* ### npm
* * Express
* * Path
* ### Javascript
* * Chosen
* * ValidateJS
* ### CSS
* * Bootstrap
* * SCSS

## Roadmap
* Migrate array of objects to MySQL database.
* Add more robust system for finding compatible friends
* Allow multiple friends to be chosen for each person