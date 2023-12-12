import {
  dateToRfc3339,
  getNewestCollectionItemDate,
} from "@11ty/eleventy-plugin-rss";

export const data = {
  permalink: "/humans.txt",
  eleventyExcludeFromCollections: true,
  layout: null,
};

export function render(data) {
  return `/* TEAM */
	Author: Nikhil Anand
	Contact: mail [at] nikhil.io
	Twitter: @afreeorange
	From: Des Moines, Iowa, USA

/* SITE */
	Last update: ${dateToRfc3339(getNewestCollectionItemDate(data.collections.all))}
	Language: English
	Software: Node, EleventyJS, CSS, HTML, JavaScript, Nunjucks, bash
    `;
}
