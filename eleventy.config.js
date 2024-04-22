const { eleventyAlembic } = require("@openlab/alembic/11ty");

const markdown = require("markdown-it");
const markdownAnchor = require("markdown-it-anchor");

const md = markdown({
  html: true,
});
md.use(markdownAnchor);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAlembic, { useLabcoat: true });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setLibrary("md", md);
};
