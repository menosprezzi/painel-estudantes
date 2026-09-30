// Use / for local development, or /NOME_DO_REPOSITORIO/ for GitHub Pages.
const pathPrefix = `/${(process.env.ELEVENTY_PATH_PREFIX ?? "")
  .replace(/^\/+|\/+$/g, "")}/`.replace(/\/{2,}/g, "/");

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addCollection("estudantes", (collectionApi) =>
    collectionApi.getFilteredByGlob("./src/estudantes/*.md"),
  );

  // Student introductions support Markdown, while raw HTML is escaped.
  eleventyConfig.amendLibrary("md", (markdownLibrary) => {
    markdownLibrary.set({ html: false });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    // Student Markdown must remain content, without executing Nunjucks.
    markdownTemplateEngine: false,
    pathPrefix,
  };
}
