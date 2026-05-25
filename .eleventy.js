module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("dateDisplay", function(date) {
    return new Date(date).toLocaleDateString("en-AU", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

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
