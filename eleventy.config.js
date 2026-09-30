// Use / for local development, or /NOME_DO_REPOSITORIO/ for GitHub Pages.
const pathPrefix = `/${(process.env.ELEVENTY_PATH_PREFIX ?? "")
  .replace(/^\/+|\/+$/g, "")}/`.replace(/\/{2,}/g, "/");

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix,
  };
}
