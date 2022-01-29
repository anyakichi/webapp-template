const path = require("path");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (_, { mode }) => {
  const devMode = mode === "development";

  return {
    devtool: devMode ? "eval-cheap-module-source-map" : "source-map",
    devServer: {
      host: "0.0.0.0",
      hot: true,
    },
    entry: {
      main: "./src/index.tsx",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            devMode && {
              loader: "babel-loader",
              options: {
                plugins: ["react-refresh/babel"],
              },
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ].filter(Boolean),
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
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
      }),
      devMode && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".tsx", ".json"],
    },
  };
};
