const { readFileSync, writeFileSync } = require("fs");

module.exports.saveFile = (data, fileName) => {
  try {
    writeFileSync(fileName, JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
    throw new Error("Error saving file", error);
  }
};
module.exports.readFile = (fileName) => {
  try {
    const data = readFileSync(fileName, "utf-8");
    return data && JSON.parse(data);
  } catch (error) {
    console.log(error.message);
    throw new Error("Error reading file", error);
  }
};
