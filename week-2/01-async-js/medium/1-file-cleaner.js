const fs = require("fs");

const filePath = "./input.txt";
const outputFilePath = "./output.txt";

fs.readFile(filePath, "utf8", (readErr, data) => {
  if (readErr) {
    console.error("Error reading the file:", readErr);
    return;
  }

  // Process the content to remove extra spaces
  const modifiedContent = data.replace(/\s+/g, " ");

  // Use fs.writeFile to write the modified content back to the file asynchronously
  fs.writeFile(outputFilePath, modifiedContent, "utf8", (writeErr) => {
    if (writeErr) {
      console.error("Error writing to the file:", writeErr);
      return;
    }

    console.log("Extra spaces removed and file written successfully.");
  });
});
