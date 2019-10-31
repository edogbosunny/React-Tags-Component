var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Tags.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "Tags.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
