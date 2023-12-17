const fs = require("fs");

fs.writeFile("./file.txt", "data from wirte file", "utf8", (err) => {
  console.log("error", err);
});
