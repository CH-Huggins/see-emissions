"use strict";

// ========================================================================== //
// ============================ Boiler Plate ================================ //
// ========================================================================== //

require("dotenv").config();

// Production Security
const helmet = require("helmet");

// Initializing variable for if deploying in development
const isDevelopement = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

// Initializing variable for if deploying in production
const isProduction = process.env.NODE_ENV === "production";

//Redos Session Management
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

// Standard App Setup
const express = require("express");
const app = express();

// if in production, set up protections
if (isProduction) {
	app.set('trust proxy', 1);
	app.use(require("helmet")()); // Add helmet in production
}

// Development/Production Session Configuration
const sessionConfig = {
	store: new RedisStore({ client: redisClient }),
	secret: process.env.COOKIE_SECRET,
	resave: false,
	saveUninitialized: false,
	name: "session",
	cookie: {
			sameSite: isProduction,
			secure: isProduction,
			httpOnly: true,
	    maxAge: process.env.MAX_AGE || 1000 * 60 * 60 * 8, // Defaults to 8 hours
	}
};


// Error Handlers
const {notFoundHandler, productionErrorHandler, catchAsyncErrors} = require("./utils/errorHandlers");

// ========================================================================== //
// ============================= Actual Code ================================ //
// ========================================================================== //
// Validators
const {emissionsValidator} = require("./Validators/emissionsValidator");

// Controllers
const emissionsController = require("./Controllers/emissionsController");
const pollutersController = require("./Controllers/pollutersController");

// Global Middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit: '200kb'}));

// Endpoints (Seperate into alotted sections) DONT FORGET VALIDATORS
app.get("/emissions/calculated", emissionsValidator, emissionsController.renderEmissions);
app.get("/polluters", pollutersController.renderPolluters);

// ========================================================================== //
// ============================ Error Handlers ============================== //
// ========================================================================== //

// Error Handlers
// Handles 404 errors
app.use(notFoundHandler);

// Handles 500 errors
if(isProduction){
	app.use(productionErrorHandler);
}

module.exports = app;