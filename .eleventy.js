module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("public");

  // Tell Eleventy to also watch the content folder
  eleventyConfig.addWatchTarget("content/");

  // Add content/posts as a collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/posts/**/*.md").reverse();
  });

  // Date filter
  eleventyConfig.addFilter("dateDisplay", function(date) {
    return new Date(date).toLocaleDateString("en-AU", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  // Read time filter
  eleventyConfig.addFilter("readTime", function(content) {
    const words = content.split(" ").length;
    const minutes = Math.ceil(words / 200);
    return minutes + " min read";
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk"
  };
};
