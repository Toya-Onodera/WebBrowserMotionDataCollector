module.exports = {
  context: `${__dirname}/src`,
  entry: "./index.tsx",
  devtool: "inline-source-map",
  mode: "development",
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", //
            },
          },
        ],
      },
    ],
  },
  output: {
    path: `${__dirname}/public/assets/javascript`,
    filename: "bundle.js",
    publicPath: `/assets/javascript`,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      fs: false,
      path: false,
      http: false,
      https: false,
      zlib: false,
      util: false,
      stream: false,
      assert: false,
      process: false,
      events: false,
      querystring: false,
      url: false,
    },
  },
};
