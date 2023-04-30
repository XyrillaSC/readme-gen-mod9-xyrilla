// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(answers) {
  return `#${answers.projName}
  
  ##Description
  ${answers.desc}
  
  ##Installation
  ${answers.install}
  
  ##Usage
  ${answers.usage}
  
  ##License
  temp
  
  ##Contributing
  ${answers.contr}
  
  ##Tests
  ${answers.test}
  
  ##Questions?
  Have questions? Submit them through the methods below!
  ${answers.hub}
  ${answers.mail}

`}

