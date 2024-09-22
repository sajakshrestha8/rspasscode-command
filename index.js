const { Command } = require("commander");
const { read } = require("fs");
const { loadEnvFile, stdin } = require("process");

const program = new Command();
const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const capital = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const small = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let bucket = [...capital, ...small];
let output = "";

program
  .name("generate")
  .description("Generate random password")
  .version("1.0.0");

program
  .command("rspasscode")
  .description("Generate a random password")
  .action(() => {
    rl.question("Enter the length of password:", (length) => {
      const passLength = parseInt(length);

      for (let i = 0; i < passLength; i++) {
        output += bucket[Math.floor(Math.random() * bucket.length)];
        // output += capital[bucket];
      }
      console.log("Generated Password is:", output);
      rl.close();
    });
  });

program.parse(process.argv);
