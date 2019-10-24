const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const args = process.argv.splice(2);

express = (input, path = `${input}.gz`) => {
  let inp = fs.createReadStream(input, "utf8");
  let out = fs.createWriteStream(path, "utf8");
  return inp.pipe(gzip).pipe(out);
};

express(args[0], args[1]);
