//  custom routify config

const dir = "./app";
const host = "http://somedomain.com";

const hasBundle = require("fs-extra").existsSync(`${dir}/dist/build/bundle.js`);
module.exports = {
  sitemap: `${dir}/.routify/urlIndex.json`,
  outputDir: `${dir}/dist`,
  entrypoint: `${dir}/dist/__app.html`,
  script: hasBundle
    ? `${dir}/dist/build/bundle.js`
    : `${dir}/dist/build/main.js`,
  eventName: "app-loaded",
  host,
  inlineDynamicImports: !hasBundle,
};
