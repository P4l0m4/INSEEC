import { stringToSlug } from "./slugify.js";

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
    loc: `/ressources/blog/${stringToSlug(article.title)}`,
    lastmod: article.date,
    changefreq: "daily",
    priority: 0.9,
  }));
}

// export async function getPeople() {
//   const { data } = await Storyblok.get("cdn/stories/portfolio", {});

//   const projects = data.story.content.elements;

//   return projects.map((project) => ({
//     loc: `/ressources/portfolio/${stringToSlug(project.title)}`,
//     changefreq: "daily",
//     priority: 0.9,
//   }));
// }
