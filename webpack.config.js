const path = require("path");

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
  resolve: {
    extensions: [".js", ".ts", ".json"]
  }
};

module.exports = Object.assign(
  {
    entry: { main: "./src/main.ts" },
    mode: "development"
  },
  commonConfig
);
