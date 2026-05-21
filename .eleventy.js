module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["njk", "html"],
  };
};
