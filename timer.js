// 定时任务
// https://github.com/node-schedule/node-schedule
const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
// 每天 18点
// rule.hour = 18;
rule.second = 20;

async function timeJob(cb) {
  schedule.scheduleJob('* * 0 * * *', async function () {
    console.log("定时任务执行一次");
    cb && (await cb());
  });
}

module.exports = timeJob;
