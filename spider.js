const axios = require("axios");
const cheerio = require("cheerio");
const superagent = require("superagent");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");

// 最新电影 url
const newMovieUrl =
  "https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=50&page_start=0";

// 热门国产剧
const hotChinaTvUrl =
  "https://movie.douban.com/j/search_subjects?type=tv&tag=%E5%9B%BD%E4%BA%A7%E5%89%A7&page_limit=50&page_start=0";

async function spider() {
  const result = await superagent.get(newMovieUrl);
  const fileName = dayjs().format("YYYY-MM-DD") + ".json";
  fs.writeFileSync(path.resolve(__dirname, "data", fileName), result.text);
}

module.exports = spider;
