# Backend Capstone Project

This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.


## Deployed URL

--  https://ab-backend-project.vercel.app/  --

## There are four API endpoints in this app

 "/subscribers "

 "/subscribers/names "

 "/subscribers/:id "

# 1 - "/ " default route.

when app start this default route will render index.html file.

e.g. ==> http://localhost:3000/

# 2 - "/subscribers "  route.

When user go to this route it will returns an array of object. It will response with an array of subscribers object.

e.g. ==>  http://localhost:3000/subscribers

# 3 - "/subscribers/names " route

When user go to this route it will returns an array of object. It will response with an array of object with only Subscribers name and Subscribers Channel.

e.g. ==> http://localhost:3000/subscribers/names

# 4 -"/subscribers/:id " route

When user go to this route it will returns an object of subscriber. It will response with a subscriber object with given id, ans also response with status code 400. If user enter wrong id or enter nothing it will give response with error messege.

e.g ==> http://subscribers/(id)

# Dependencies

Following dependencie are needed to run this application: 

1. express

2. mongoose

3. nodemon

# start

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **nodemon or nodemon index.js*


######