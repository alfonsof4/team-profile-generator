const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const createPage = require('./src/createPage');

team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'none'],
        }
    ])
    .then((managerAnswers) => {

        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
            writeToFile('./dist/index.html', createPage(team))
        }
    });
};
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engieers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'none'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
            writeToFile('./dist/index.html', createPage(team))    
        }
    })
};
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the interns school?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'none'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
            writeToFile('./dist/index.html', createPage(team))    
        }
    })
};

managerQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved!')
    });
};

