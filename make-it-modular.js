const filterFiles = require("./mymodule");

const directory = process.argv[2];
const extensions = process.argv[3];

function printFiles(err, files) {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((file) => console.log(file));
}

filterFiles(directory, extensions, printFiles);
