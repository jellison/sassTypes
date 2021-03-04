const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const outputDir = path.join(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: "./src/react.tsx",
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          {
            loader: 'style-loader',
            options: { esModule: false, modules: { namedExport: true } },
          },
          {
            loader: "css-loader",
            options: { modules: true }
          },
          'sass-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: outputDir,
    filename: "react.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: outputDir,
  },
};
