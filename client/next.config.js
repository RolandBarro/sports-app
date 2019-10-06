const withSass = require('@zeit/next-sass');
// module.exports = withSass({
//   cssModules: true,
//   sassLoaderOptions: {
//     includePaths: ["./assets/styles/sass/*"]
//   },
//   webpack(config, options) {
    
//     return config;
//   },
// });

const withCss = require('@zeit/next-css');
module.exports = withCss(
  withSass({})
);
