// const production = process.env.NODE_ENV === "production";

// let dir = "." + ;
// if (!production) {
//   dir += "/app";
// }

const dir = "./app";

module.exports = {
  pages: `${dir}/src/pages`,
  routifyDir: `${dir}/.routify`,
  distDir: `${dir}/dist`,
};
