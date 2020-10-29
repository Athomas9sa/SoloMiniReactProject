'use strict'
const express = require("express"); 
const router = express.Router();
const MessagingResponse = require("twilio").twiml.MessagingResponse;

router.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message("Thanks for signing up!");
  res.end(twiml.toString());
});
module.exports = router;
