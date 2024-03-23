#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function displayName() {
  let rainbow = chalkAnimation.rainbow("Let's Start Calculation");
  await sleep();
  rainbow.stop();
}
await displayName();

async function calculatorInterface() {
  console.log(`
     _____________________
    |  _________________  |
    | |  SHEHBAZ NIAZI  | |
    | | CLI calculator  | |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
}

async function making_Calc() {
  let output = await inquirer.prompt([
    { name: "num1", type: "number", message: "Enter Your First Number" },
    { name: "num2", type: "number", message: "Enter Your Second Number" },
    {
      name: "oprations",
      type: "list",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      message: "Select Your Oprator",
    },
  ]);

  const { num1, num2, oprations } = output;

  if (output.oprations === "Addition") {
    console.log(chalk.bgBlue.white.bold(` ${num1} + ${num2} = ${num1 + num2}`));
  }
  if (output.oprations === "Subtraction") {
    console.log(chalk.bgBlue.white.bold(` ${num1} - ${num2} = ${num1 - num2}`));
  }
  if (output.oprations === "Multiplication") {
    console.log(chalk.bgBlue.white.bold(` ${num1} * ${num2} = ${num1 * num2}`));
  }
  if (output.oprations === "Division") {
    console.log(chalk.bgBlue.white.bold(` ${num1} / ${num2} = ${num1 / num2}`));
  }
}

async function start_loop() {
  do {
    await making_Calc();
    var again = await inquirer.prompt({
      type: "list",
      name: "restart",
      message: "Do you want to restart ? Yes Or No ",
      choices: ["yes", "no"],
    });
  } while (again.restart === "yes");
}
await start_loop();
