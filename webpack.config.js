const path = require("path");
const { ProvidePlugin } = require("webpack");

module.exports = ({ production }) => {
  const isDevelopment = production !== true;

  return {
    mode: isDevelopment ? "development" : "production",
    entry: "/index",
    devtool: "inline-source-map",
    resolve: {
      extensions: [".js"],
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
    module: {
      rules: [
        {
          test: /\.less/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
    output: {
      filename: "bundle.js",
      //절대경로로 입력
      path: path.resolve(__dirname, "build"),
      publicPath: "/build/",
    },
    plugins: [
      new ProvidePlugin({
        $: "jquery",
      }),
    ],
    devServer: {
      // historyApiFallback: true,
      //브라우저를 통해 접근하는 경로 webpack.output.publicPath와 동일하게 설정
      devMiddleware: { publicPath: "/build/" },
      //정적파일을 제공하는 경로
      static: { directory: path.resolve(__dirname) },
      port: 3001,
    },
  };
};
