const data = require("./data.json"); // import json file
// console.log(data);
const fs = require("fs"); // import file system module

// map over data
const newData = data.map((element) => {
  return `${element.id} - ${element.title}\n  ${element.description}\n`;
});

//create new File
fs.writeFile("mappedText.txt", newData.toString("\n"), () => {
  console.log("done, new File created");
});
