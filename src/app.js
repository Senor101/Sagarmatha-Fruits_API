const express = require('express');
const cors = require("cors");
const helmet = require("helmet")
require("dotenv").config();

const app = express();

const apiRouter = require("./api/v1/api");
const customErrorHandler = require("./api/v1/middlewares/errorhandler.middleware");
const notFound = require("./api/v1/middlewares/notFound.middleware")
const cloudinaryConfig = require("./api/v1/configs/cloudinary.config")

app.use(helmet())

const allowedOrigin = ['http://localhost:3000']

var corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigin.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(null,false)
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],
    credentials:true,
    preflightcontinue:true
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cloudinaryConfig);

app.use("/api/v1", apiRouter);
app.use(notFound);
app.use(customErrorHandler);

module.exports = app;