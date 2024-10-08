#!/usr/bin/env node

const chalk = require("chalk");
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

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const symbol = ["!", "@", "#", "$", "%"];

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

let bucket = [...capital, ...small, ...number, ...symbol];
let output = "";

program
  .description("Generate random password")
  .version("1.0.0")
  .action(() => {
    rl.question(chalk.cyan("Enter the length of password: "), (length) => {
      const passLength = parseInt(length);

      for (let i = 0; i < passLength; i++) {
        output += bucket[Math.floor(Math.random() * bucket.length)];
        // output += capital[bucket];
      }
      console.log(
        chalk.cyan("Generated Password is:"),
        chalk.green.bold.underline(output)
      );
      rl.close();
    });
  });

program
  .command("know")
  .description("Greeting for the view")
  .action(() => {
    console.log(chalk.cyan("Greeting"));
    rl.close();
  });

// program.command("rspasscode").description("Generate a random password");

program.parse(process.argv);
