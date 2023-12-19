const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const deps = require("./package.json").dependencies;
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const envFile = process.env.NODE_ENV
  ? `./environments/.env.${process.env.NODE_ENV}`
  : //   : "./environments/.env"
    "./environment/.env";
const environment = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const paths = {
  dev: "https://ocreate-dev.onpassive.com/",
};
const apiPaths = {
  dev: "https://ocreateapi-dev.onpassive.com/",
};
const publicPath = paths[environment];
process.env.REACT_APP_API_END_POINT = apiPaths[environment];

module.exports = (env) => {
  let mode = "production";
  let devtool = false;
  if (process.env.NODE_ENV == "dev" || process.env.NODE_ENV == "local") {
    devtool = "source-map";
    mode = "development";
  }
  console.log("env", env, process.env.NODE_ENV, mode, devtool);
  return {
    mode: mode,
    optimization: {
      minimizer: [
        new TerserPlugin({
          /* additional options here */
        }),
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    devServer: {
      port: 3008,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.inline.svg$/,
          use: "svgr/webpack",
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif|pdf)$/i,
          use: ["file-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        src: path.resolve(__dirname, "src/"),
      },
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      clean: true,
      publicPath,
    },
    plugins: [
      new Dotenv({
        path: envFile,
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "ocreateobs",
        filename: "remoteEntry.js",
        exposes: {
          //   "./OcreateOBS": "./src/bootstrap",
        },
        shared: {
          ...deps,
          "react-dom": {
            singleton: true,
            //   eager: true,
            requiredVersion: "18.2.0",
            strictVersion: false,
          },
          "react-router-dom": {
            singleton: true,
            //   eager: true,
            requiredVersion: "6.4.2",
            strictVersion: false,
          },
          react: {
            singleton: true,
            //   eager: true,
            requiredVersion: "18.2.0",
            strictVersion: false,
          },
        },
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    devtool,
  };
};
