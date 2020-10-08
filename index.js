//requirements
const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./template');

//prompt to fill out the readme
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What needs to be installed to run this?',
        name: 'Installs', 
    },
    {
        type: 'input',
        message: 'What is the use of this app?',
        name: 'Use',  
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'Contributors',
    },
    {
        type: 'input',
        message: 'How do you run this application?',
        name: 'Run',
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
    }
];

//writing the answers to file
function writeFile(file, data) {
    fs.writeFile('./readMeBank/' + file, data, function(err) {
        if (err) {
            throw (err);
        }
    });
};

//activating the action to write and create the new file
function generate() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeFile('ReadMe.md', template(data));
    });
};

//calling function to run the app
generate();

