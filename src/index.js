// Importing necessary modules
const express = require("express"); 
const app = require("./app"); 
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// const dotenv = require("dotenv")
// dotenv.config()
const port = process.env.port || 3000; 

// const app = express();
// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

// options for swagger ui docs
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Get Yotube Subcribers",
        version: "1.0.0",
        description:
          "A Minimal Express API To Get Youtube Subscribers by Zainab Faiqua.",
      },
      servers: [
        {
          url: "https://ab-get-youtube-subscribers-zf71.onrender.com",
        },
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./src/app.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/", swaggerUI.serve, swaggerUI.setup(specs));
  
  // enabling cors to get over CORS Restriction
  app.use(cors());
  


// Connecting to the database
const DATABASE_URL = "mongodb+srv://zainabfaiqua03:itsme03@subscribers.0zedevu.mongodb.net/subscribers?retryWrites=true&w=majority&appName=subscribers"

mongoose.connect(DATABASE_URL , {
useNewUrlParser: true,
useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err)); // Handling database connection errors
db.once("open", () => console.log("connected to database")); // Logging successful database connection

// Starting the server
app.listen(port, () => console.log(`App listening on port ${port}!`)); // Logging the server start and listening on the specified port