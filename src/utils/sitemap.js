import { stringToSlug } from "./slugify.js";
import dayjs from "dayjs";

const StoryblokClient = require("storyblok-js-client");

const Storyblok = new StoryblokClient({
  accessToken: "bqhel4M42jUtHWg6i0Q6Iwtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
export async function getNews() {
  const { data } = await Storyblok.get("cdn/stories/news", {});

  const news = data.story.content.newsList;

  return news.map((article) => ({
    loc: `/actualites/${stringToSlug(article.title)}`,
    lastmod: article.date,
    changefreq: "daily",
    priority: 0.9,
  }));
}
export async function getPrograms() {
  const { data } = await Storyblok.get("cdn/stories/programs", {});

  const programs = data.story.content.programsList;

  return programs.map((program) => ({
    loc: `/programmes/${stringToSlug(`${program.level} ${program.name}`)}`,
    lastmod: dayjs().format("YYYY-MM-DD"),
    changefreq: "daily",
    priority: 0.9,
  }));
}
