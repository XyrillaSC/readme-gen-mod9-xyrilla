// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs'
// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Hello friend! What might be your project name?',
        name: 'projName',
      },
    {
        type: 'input',
        message: 'Great! Now how about a description?',
        name: 'desc',
      },
    {
        type: 'input',
        message: 'installation instruction? What do the users need to do enjoy your project?',
        name: 'install',
      },
    {
        type: 'input',
        message: 'What about usage instructions? How do the people use your project?',
        name: 'usage',
      },
    {
        type: 'input',
        message: 'How can the people contribute to your project? You know, if you want them to.',
        name: 'contr',
      },
    {
        type: 'input',
        message: 'How can the people contribute to your project? You know, if you want them to.',
        name: '',
      },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
