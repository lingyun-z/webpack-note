const path = require("path");

module.exports = {
  entry: { index: "./src/index.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 打包项目时，根据项目中需要打包的文件类型不同，需要用到不同的loader
      },
    ],
  },
};
