require("dotenv").config();
const { CronJob } = require("cron");
const axios = require("axios");

const apiUrl = process.env.backend_uri;
console.log('API URL from .env:', apiUrl);

const makeAPICall = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log('API call successful:', response.data);
    } catch (error) {
        console.error('Error making API call:', error);
    }
};

const job = new CronJob(
    process.env.CRON_STRING,
    () => {
        console.log("Making an API call at:", new Date().toISOString());
        makeAPICall();
      },null, // OnStop function
      true, // Start immediately
      "Asia/Kolkata" 
);

job.start();

console.log('Cron job is running. It will call the API every 5 minutes.');