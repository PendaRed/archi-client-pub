const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin([
       {
          from: "public",
          to: "public",
        },
        {
          from: "data",
          to: "data",
        },
        {
          from: "index.html",
          to: "index.html",
        },
        {
          from: "styles.css",
          to: "styles.css",
        }
      ]
    )
  ],
};
