// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description for this project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation steps needed for this application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would someone try to use this application?',
        },
        {
            type: 'checkbox',
            message: 'What license was used for this application?',
            name: 'license',
            choices: ['MIT', 'IBM', 'ISC'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Did you have any contributors?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for this application?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username for contact?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What your email for questions?',
        },
    ])
    // console.log(data)
    .then((data) => {
        const filename = `newREADME.md`;

        fs.writeFile(filename, 
            `# ${data.title}
## Table of Contents
* [Description](##description)
* [Installation](##installation)
* [Usage](##usage)
* [License](##license)
* [Contributors](##contributors)
* [Tests](##tests)
* [Questions](##quetsions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
Please see my github | Contact me for questions :speech_balloon:
------------ | -------------
[Github Profile](https://github.com/${data.github}) | ${data.email}`,
            (err) =>
            err ? console.log(err) : console.log('Success!')
        )
    })


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log(license);
    if(license == "MIT"){
        return ('![License: MIT](https://img.shields.io/badge/License-MIT-blue)(https://opensource.org/licenses/MIT)')
    } else if (license == "IBM") {
        return ('![License: IBM](https://img.shields.io/badge/License-IBM-blue)(https://opensource.org/licenses/IBM)')
    } else if (license == "ISC") {
        return ('![License: ISC](https://img.shields.io/badge/License-ISC-blue)(https://opensource.org/licenses/ISC)')
    } else {
        return (' ')
    }
    
};
