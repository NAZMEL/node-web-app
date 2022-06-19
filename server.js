require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postRoutes = require("./routes/post-routes");
const contactRoutes = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");

const app = express();
app.set("view engine", "ejs");

const PORT = process.env.PORT;
const db = process.env.MONGO_URL;

mongoose
  .connect(db)
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("listening port 3000");
});

app.use((req, res, next) => {
  console.log(`method: ${req.method}`);
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(contactRoutes);

app.use((req, res) => {
  const title = "Error";
  res.status(404).render(createPath("error"), { title });
});
