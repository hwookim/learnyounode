const fs = require("fs");
const path = require("path");

function isSameExt(file, extName) {
  return path.extname(file) === "." + extName;
}

function filterFiles(directory, extName, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const filteredList = files.filter((file) => isSameExt(file, extName));
    callback(null, filteredList);
  });
}

module.exports = filterFiles;
