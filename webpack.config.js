const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const devConfig = require("./build/webpack.development");
const prodConfig = require("./build/webpack.production");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: "./src/index.js",
  build: "dist"
};

const baseConfig = {
  entry: PATHS.app,
  output: {
    filename: "[name].[chunkhash:5].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      containers: path.join(__dirname, "./src/containers"),
      components: path.join(__dirname, "./src/components"),
      "@redux": path.join(__dirname, "./src/redux")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "亦蓁家CRM系统",
      template: path.join(__dirname, "template/index.html")
    })
  ]
};

module.exports = mode => {
  const config = mode === "production" ? prodConfig : devConfig;

  return merge(baseConfig, config, { mode });
};
