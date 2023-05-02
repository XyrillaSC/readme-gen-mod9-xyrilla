// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs'

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
        type: 'list',
        message: 'What license does your project fall under?',
        name: 'lice',
        choices: ['MIT', 'ISC', 'The Unlicense']
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
    let licenseInfo = `N/A`
    let licenseBadge = ``
    if (answers.lice === 'MIT') {
      licenseInfo = `This project is covered under the MIT license. More information about the license can be found [here](https://opensource.org/license/mit/)`
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (answers.lice === 'ISC') {
      licenseInfo = `This project is covered under the ISC license. More information about the license can be found [here](https://opensource.org/license/isc-license-txt/)`
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else if (answers.lice === 'The Unlicense') {
      licenseInfo = `This project is covered under the Unlicense license. More information about the license can be found [here](https://unlicense.org/)`
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    let content = `# ${answers.projName}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

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
${licenseInfo}
${licenseBadge}
      
## Contributing
---
${answers.contr}
      
## Tests
---
${answers.test}
      
## Questions?
---
Have questions? Submit them through the methods below!<br>  
- GitHub: [${answers.hub}](https://github.com/${answers.hub.trim()})  <br>  
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

