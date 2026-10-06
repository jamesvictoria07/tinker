const assert = require("assert");
const { chunk } = require("../utils");

assert.deepStrictEqual(chunk([1, 2, 3], 2), [[1, 2], [3]]);
console.log("ok");
