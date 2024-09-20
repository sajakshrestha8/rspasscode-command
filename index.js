const { Command } = require("commander");

const program = new Command();

program
  .command("aboutme")
  .description("My name")
  .action(() => {
    console.log("sajak");
  });

program.parse(process.argv);
