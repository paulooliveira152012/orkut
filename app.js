// //import react
// import React from 'react';

// import React, { useState } from "react";
// //import header component
// import Header from "./src/components/Header";
// //import nav component
// import nav from "./src/components/Nav";




//========== BELLOW this point --> routes ==========//

const express = require("express");
const app = express();
//for static fles
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/login/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/about.html"));
});

router.get("/sitemap", function (req, res) {
  res.sendFile(path.join(__dirname + "/sitemap.html"));
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);
//middleware & static files
app.use(express.static("public"));
