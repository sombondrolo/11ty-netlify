module.exports = function(eleventyConfig) {
  // addPassthroughCopy copia el file de . adentro de _site segun arg
  eleventyConfig.addPassthroughCopy("index.css")
  // eleventyConfig.addPassthroughCopy("index.js")
  // eleventyConfig.addPassthroughCopy("rails_sq.png")
  // eleventyConfig.addPassthroughCopy("src/assets/images");
}