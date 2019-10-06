const withSass = require('@zeit/next-sass')

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["./assets/styles/sass/*"]
  },
  webpack (config, options) {
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000
            },
        }
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
                includePaths: ['./assets/styles/sass/*'],
              },
            },
          },
        ],
    });

    return config;
  }
});
