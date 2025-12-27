const { Worker } = require("bullmq");
const redis = require("../../config/redis");

new Worker("jobs", async (job) => {
  console.log("Processing job:", job.id);
}, { connection: redis });
