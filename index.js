const path = require("path");
const Koa = require("koa");
const static = require("koa-static");
const timeJob = require("./timer");
const spider = require("./spider.js");

const app = new Koa();

app.use(static(path.resolve(__dirname, "data")));

timeJob(spider);

app.listen(8888);
