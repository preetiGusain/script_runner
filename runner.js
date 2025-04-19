require("dotenv").config();
const { CronJob } = require("cron");
const cron = require("node-cron");
const axios = require("axios");

// Utility to check if a string is a valid URL
const isValidUrl = (str) => {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
};

const createAPICall = (apiUrl) => {
    return async () => {
        try {
            console.log('Calling :', apiUrl, "at : ", new Date().toISOString());
            const response = await axios.get(apiUrl);
            console.log('API call successful:', response.data);
        } catch (error) {
            console.error('Error making API call:', error);
        }
    };
}

const createCronJob = (cronTime, makeAPICall) => {
    return new CronJob(
        cronTime,
        () => {
            makeAPICall();
        }, null, // OnStop function
        true, // Start immediately
        "Asia/Kolkata"
    );
}

const jobs = JSON.parse(process.env.CRON_JOBS || '[]');
console.log("jobs fetched ", jobs);

jobs.forEach(({ url, cron: cronTime }, index) => {
    if (!url || !cronTime) {
        console.warn(`Skipping Job #${index + 1}: Missing URL or cron schedule.`);
        return;
    }

    if (!isValidUrl(url)) {
        console.warn(`Skipping Job #${index + 1}: Invalid URL - "${url}"`);
        return;
    }

    if (!cron.validate(cronTime)) {
        console.warn(`Skipping Job #${index + 1}: Invalid cron expression - "${cronTime}"`);
        return;
    }

    const job = createCronJob(cronTime, createAPICall(url));
    job.start();
});

console.log('Cron jobs started!');