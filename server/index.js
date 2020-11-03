'use strict'

const PORT = 3001; 
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv').config();

app.use(cors());

const { Twilio } = require("twilio");
const { default: Axios } = require("axios");
//twilio credentials
const accountSid = `${process.env.ACCOUNTSID}`;
const authToken = `${process.env.AUTHTOKEN}`;
const client = new Twilio(accountSid, authToken);
app.get("/", (req, res) => {
  res.send("hallo!")
})
app.get("/sms", async (req, res) => {
  const { recipient, textmessage } = req.query
  console.log(recipient, textmessage)
  client.messages 
  .create({ 
    body: textmessage.replace("%20", " "),       
    to: recipient,
    from: '+14159933857',
  }) 
  .then(message => console.log(message.body)) 
  await Axios.post('https://hooks.slack.com/services/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',{text: textmessage.replace("%20", " ")})
});
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))