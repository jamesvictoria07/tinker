// Entry point
function slugify(text) {
  return text.toLowerCase().trim().split(/\s+/).join("-");
}

const arg = process.argv[2] || "Hello World";
console.log(slugify(arg));

module.exports = { slugify };
