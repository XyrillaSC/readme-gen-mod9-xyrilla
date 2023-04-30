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
        message: 'How can the people test your project?',
        name: 'test',
      },
    {
        type: 'input',
        message: 'Your github username?',
        name: 'hub',
      },
    {
        type: 'input',
        message: 'Email?',
        name: 'mail',
      },
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let content = `# ${answers.projName}

## Description
---
${answers.desc}
      
## Installation
---
${answers.install}
      
## Usage
---
${answers.usage}
      
## License
---
temp
      
## Contributing
---
${answers.contr}
      
## Tests
---
${answers.test}
      
## Questions?
---
Have questions? Submit them through the methods below!<br>  
- GitHub: ${answers.hub}  <br>  
- Email: ${answers.mail}  <br>  
    
`
    console.log(content)

    fs.writeFile('./genfiles/README.md', content, {encoding: 'utf-8'}, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

