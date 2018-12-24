#!/usr/bin/env node

const _ = require("lodash");
const fs = require("fs");
const appRoot = require("app-root-path");

module.exports = (function() {
  const { env } = process;
  const _env = env.NODE_ENV || "local";
  const dir = env.CONFIG_DIR || `${appRoot}/config`;
  const result = _.merge(
    getVal(`${dir}/default.js`),
    getVal(`${dir}/${_env}.js`)
  );
  const _result = JSON.stringify(result);
  console.log(_result);
})();

function getVal(file) {
  var val;
  if (fs.existsSync(file)) {
    val = require(file);
  } else {
    val = {};
  }
  return val;
}
