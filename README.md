# AlmaBetter Backend Project

## Get_Youtube_Subscribers

This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

Web Deployment : https://ab-get-youtube-subscribers-zf71.onrender.com

## API Endpoints

1. **"/ "** -> This default route will render the "index.html file" when the app launches.
2. 
![Main_G_YT_s](https://github.com/zainab3702/AB_Get_Youtube_Subscribers/assets/144930831/45cb70d7-0023-44b9-baea-775706654136)


3. https://ab-get-youtube-subscribers-zf71.onrender.com/api-docs -> This route for Swagger Docs.
   
![Swagger](https://github.com/zainab3702/AB_Get_Youtube_Subscribers/assets/144930831/5b4e5d8f-9635-47fa-a144-4394e858ba93)

3. **"/subscribers "** -> This endpoint returns an array of all subscribers in the database. https://ab-get-youtube-subscribers-zf71.onrender.com/subscribers

![Subscribers](https://github.com/zainab3702/AB_Get_Youtube_Subscribers/assets/144930831/c075344e-c938-47a9-9a7b-67d048b01b52)

4. **"/subscribers/names "** -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. https://ab-get-youtube-subscribers-zf71.onrender.com/subscribers/names

![Subs_by_names](https://github.com/zainab3702/AB_Get_Youtube_Subscribers/assets/144930831/3db2accd-4a48-47d4-bb71-176b8fc06f34)

5. **"/subscribers/:id "** -> This returns the details of subscriber whose Id is provided in endpoint. https://ab-get-youtube-subscribers-zf71.onrender.com/subscribers/:id

![Subs_by_id](https://github.com/zainab3702/AB_Get_Youtube_Subscribers/assets/144930831/ebc4c400-bca8-4d8a-aed4-6dc4a67281f6)

## Application Folder Structure

1. [src/app.js] -> For handling requests and responses.

2. [src/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
   
6. [src/index.html] -> The home page for the application.

```
├── src/
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
|   ├── index.js
│   ├── index.html
│   └── models/
│       ├── subscribers.js
├── {} package-lock.json
└── {}package.json
```

## Installation

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project.

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **node index.js**

## Dependencies

Following dependencie are needed to run this application:

1. express

2. mongoose

3. nodemon

## Team Memebers

- Zainab Faiqua
- Belal Irshad
