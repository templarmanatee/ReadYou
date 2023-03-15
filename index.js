// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title: ',
    },    
    {
        type: 'input',
        name: 'description',
        message: 'Enter the project description: ',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation guidelines: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage instructions: ',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who else needs to be credited?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your preferred license?',
        choices: ['Apache', 'MIT', 'GPL'],
    },    
    {
        type: 'input',
        name: 'tests',
        message: 'What tests were run, if any?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:' 
    }, 
    {
        type: 'input', 
        name: 'email',
        message: 'What is your e-mail?'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if(err){
            return console.log(err);
        }
    })
}

async function init() {
    const response = await inquirer.prompt(questions);
    const formatted_response = generateMarkdown(response); 
    await writeToFile(`readmes/${response.title}`, formatted_response);
}

// Function call to initialize app
init();
