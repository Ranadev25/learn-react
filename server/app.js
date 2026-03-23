require("dotenv").config()
const morgan = require("morgan")
const express = require("express");
const { errorResponse } = require("./response/response");
const categoryRoute = require("./router/category");
const app = express();



app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", categoryRoute)


app.use((req, res, next) => {
  return errorResponse(res, {
    statusCode: 404,
    message: "route is not found",
  })
})
app.use((err,req, res, next) => {
  return errorResponse(res, {
    statusCode: 404,
    message: err.message,
  })
})




module.exports = app