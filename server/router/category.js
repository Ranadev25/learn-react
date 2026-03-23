const categoryRoute = require("express").Router()


categoryRoute.get("/category", (req, res) => {
  res.send("new category")
})


module.exports = categoryRoute;