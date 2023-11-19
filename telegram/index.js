const axios = require("axios");
const path = require("path");
const FormData = require("form-data");
const moment = require("moment-timezone");
const fs = require("node:fs");
const fileToSend = path.join(path.resolve(__dirname, "../cypress/reports.zip"));
const caption = "test run date: " + createExecuteTime();

const token = "6681396777:AAF6iYwVjMvyq9lyjNBhDZEJwBKHO9odZNo";
const chatId = "-1001913146155";
const formData = new FormData();
formData.append("document", fs.createReadStream(fileToSend));
formData.append("chat_id", chatId);
formData.append("caption", caption);

axios.post(`https://api.telegram.org/bot${token}/sendDocument`, formData, {
    headers: {
      // ...formData.getHeaders()
    }
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });


function createExecuteTime() {
  const tashkentTime = moment.tz("Asia/Tashkent");
  return tashkentTime.format("DD-MMM-YYYY HH:mm");
}

