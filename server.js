// Dependencies
var express = require("express");

// Create an express server
var app = express();

// Set the initial port
var PORT = process.env.PORT || 8080;

// Set up the app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});