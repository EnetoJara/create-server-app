require("@babel/polyfill");
require("core-js");
// eslint-disable-next-line import/no-extraneous-dependencies
require("regenerator-runtime/runtime");
require("es6-promise/auto");
const helpers = require("@babel/helpers");
const types = require("@babel/types");

const typeofHelper = helpers.get("typeof");

types.isExpressionStatement(typeofHelper);
require("core-js/modules/es6.promise");
require("core-js/modules/es6.array.iterator");
// require("react-hot-loader");

require("./server.js");
