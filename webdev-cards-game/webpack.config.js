const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: "development",
  outpot: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png| svg| jpg| jpeg| gif| pdf)$/i, type: "asset/resourse" },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resourse" },
    ],
  },
  plugins: [
    new copyPlugin({
      patterns: [{ from: "static", to: "static" }],
    }),
    new HtmlWebpackPlugin({
      template: "./index.js",
    }),
  ],
};
