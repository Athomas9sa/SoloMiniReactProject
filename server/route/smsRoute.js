// 'use strict'
// const express = require("express"); 
// const router = express.Router();
// const { Twilio } = require("twilio");
// const { default: Axios } = require("axios");

// //twilio credentials
// const accountSid = process.env.ACCOUNTSID; 
// const authToken = process.env.AUTHTOKEN; 

// const client = new Twilio(accountSid, authToken);

// router.get("/sms", async (req, res) => {
//   const { recipient, textMessage } = req.query
//   client.messages 
//   .create({ 
//     body: textMessage, 
//     from: '+14159933857',      
//     to: recipient,
//   }) 
//   .then(message => console.log(message.sid)) 
//   .done();

// });
//module.exports = router;
