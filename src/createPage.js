const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateSlides(team) {
    let slides = [] 
    for(let i = 0; i < team.length; i++) {
        const teamArray = team[i];
        switch(teamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArray.id, teamArray.email, teamArray.officeNumber);
                slides.push(generateManagerSlide(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
                slides.push(generateEngineerSlide(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
                slides.push(generateInternSlide(intern));
                break;
        }
    }
    return slides.join(``)
}

let generateManagerSlide = (Manager) => {
    return `
    <div class="slide m-1 shadow" style="width: 18rem">
        <div class='slide-header'>
            <h3 class="slide-title>${Manager.getName()}</h3>
            <h5 class=slide-text><i class="fa fa-laptop"></i> ${Manager.getRole()}</h5>
        </div>
        <div class="slide-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: ${Manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

let generateEngineerSlide = (Engineer) => {
    return `
    <div class="slide m-1 shadow" style="width: 18rem">
        <div class='slide-header'>
            <h3 class="slide-title>${Engineer.getName()}</h3>
            <h5 class=slide-text><i class="fa fa-laptop"></i> ${Engineer.getRole()}</h5>
        </div>
        <div class="slide-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
}

let generateInternSlide = (Intern) => {
    return `
    <div class="slide m-1 shadow" style="width: 18rem">
        <div class='slide-header'>
            <h3 class="slide-title>${Intern.getName()}</h3>
            <h5 class=slide-text><i class="fa fa-laptop"></i> ${Intern.getRole()}</h5>
        </div>
        <div class="slide-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: ${Intern.getEmail()}</li>
                <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}

function createPage(team) {
    console.log(team)
return `
<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>The Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-warning">
    <div class="container">
        <h1 class="display-4 text-center">The Team</h1>
    </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${generateSlides(team)}
</div>
</body>
</html>
`
}

module.exports = createPage;