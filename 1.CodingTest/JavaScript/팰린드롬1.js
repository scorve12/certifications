const fs = require('fs');

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "run/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const str = input.reverse().join("");
console.log(str);
console.log(input === str ? 1 : 0);``
//안되는거거