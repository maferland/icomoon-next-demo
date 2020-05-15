module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=100000",
    });
    return config;
  },
};
