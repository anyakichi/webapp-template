const path = require("path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (_, { mode }) => {
  const devMode = mode === "development";

  return {
    devtool: devMode ? "eval-cheap-module-source-map" : "source-map",
    devServer: {
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
      runtimeChunk: true,
      splitChunks: {
        chunks: "all",
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: devMode ? "[name].js" : "[name].[contenthash].js",
      chunkFilename: devMode ? "[id].js" : "[id].[contenthash].js",
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
      }),
    ],
  };
};
