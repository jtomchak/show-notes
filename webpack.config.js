const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "standard-loader",
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  node: {
    __dirname: false
  },
  resolve: {
    extensions: [".js", ".ts", ".json"]
  }
};

module.exports = [
  Object.assign(
    {
      target: "electron-main",
      entry: { main: "./src/main.ts" }
    },
    commonConfig
  ),
  Object.assign(
    {
      target: "electron-renderer",
      entry: { gui: "./src/render.ts" },
      plugins: [new HtmlWebpackPlugin()]
    },
    commonConfig
  )
];
