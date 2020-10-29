'use strict'
const http = require("http");

const hostname = "10.0.0.2"; 
const port = 3000; 

const es6Renderer = require("express-es6-template-engine"); 
const express = require("express");
const path = require('path');
const app = express();

app.engine("html", es6Renderer);
app.use(express.static(path.join(__dirname, "pulic")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const server = http.createServer(app);
server.listen (port, hostname, () => {
console.log (`server running at http://${hostname}:${port}`)});

const server = http.createServer(app);
server.listen (()=>{console.log('server running at https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json')});

const rootController = require("./server/route/userRoute");
 //console.log("is it here?", rootController)
app.use(rootController);