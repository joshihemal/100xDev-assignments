const fs = require("fs");

fs.readFile("./file.txt", "utf8", (_, data) => {
  console.log("fileData: ", data);
});

let count = 10000000;

for (let i = 0; i <= count; i++) {
  console.log("empty for loop");
}
