const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-shop/" : "/",
  eslint: { ignoreDuringBuilds: true, },
}