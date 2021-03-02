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
            name: 'use',
            message: 'How would someone try to use this application?',
        },
        {
            type: 'checkbox',
            message: 'What license was used for this application?',
            name: 'lisence',
            choices: ['MIT', 'IBM', 'ISC'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Did you have any contributors?',
        },
        {
            type: 'input',
            name: 'instructions',
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
        const filename = `newREADME`;

        fs.writeFile(filename, 
            `# ${data.title}`, '\t',
            JSON.stringify(data, null, '\t'), 
            
            (err) =>
            err ? console.log(err) : console.log('Success!')
        )
    })
    // .catch(error => {
    //     console.error();
    // });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
