const express = require('express');
const path = require("path");
const fs = require("fs");
const htmlRoutes = require("./routes/html-routes")
const apiRoutes = require("./routes/routes")
const app = express();
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/" , htmlRoutes);



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
