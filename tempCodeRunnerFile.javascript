const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const str = input.split("").reverse().join("");
console.log(str);
console.log(input === str ? 1 : 0);
//되는거거