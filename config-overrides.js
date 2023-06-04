// import webpackNodeExternals from "webpack-node-externals";

// export default function override(config, env) {
//   // Добавляем настройки для игнорирования модулей Node.js
//   config.target = "node";
//   config.externals = [webpackNodeExternals()];

//   return config;
// }

const path = require("path");

module.exports = function override(config, env) {
  // Добавляем резервное значение для модуля "stream"
  config.resolve.fallback = {
    ...config.resolve.fallback,
    https: require.resolve("https-browserify"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    stream: require.resolve("stream-browserify"),
    path: require.resolve("path-browserify"),
    zlib: require.resolve("browserify-zlib"),
    os: require.resolve("os-browserify"),
    // net: require.resolve("browserify/lib/builtins/net"),
  };

  return config;
};
