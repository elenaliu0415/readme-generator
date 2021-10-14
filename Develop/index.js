// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = {
  apache: {
    name: "Apache 2.0",
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  bsd3: {
    name: "BSD3",
    badge: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    link: "https://opensource.org/licenses/BSD-3-Clause",
  },
  mit: {
    name: "MIT",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
  },
};
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description",
  },
  {
    type: "input",
    message: "What is your project installation?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your project usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your project contribution?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are your project tests?",
    name: "tests",
  },
  {
    type: "list",
    message: "What is your project license?",
    name: "license",
    choices: [...Object.keys(licenses)],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What are your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const contents = generateMarkdown(data);
    fs.writeFile(fileName, contents, (err) => {
        return (err) ? console.log(err) : console.log(fileName + " was created!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        answers.license = licenses[answers.license];
        writeToFile("Generator.md", answers);
    });
}
// Function call to initialize app
init();
