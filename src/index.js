// Importing necessary modules
const express = require("express"); 
const app = require("./app"); 
const mongoose = require("mongoose");
// const dotenv = require("dotenv")
// dotenv.config()
const port = process.env.port || 3000; 

// const app = express();
// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

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