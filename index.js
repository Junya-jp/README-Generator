// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message:'What is the name of your project?',
    name:'Title',
},
{
    type: 'input',
    message:'Provide a short description explaining the what, why, and how of your project.',
    name:'Description',
},
{
    type:'input',
    message:'Provide necessary steps and info for installation',
    name:'Install',
},
{
   type:'input',
   message:'Provide instructions and examples for use.',
   name:'Usage',
},
{
    type:'input',
    message:'Contributions to project',
    name:'contributions',
},
{
    type:'list',
    message:'Choose License:',
    choices:['MIT','Apache','BSD2','BSD3','N/A'],
    name:'license',
},
{
    type:'input',
    message:'What is your github username?',
    name:'github',
},
{
    type:'input',
    message:'What is your E-mail?',
    name:'email',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const mark=Markdown(data)
    fs.writeFile('README.md',mark,function(err){
        if(err){
            console.log('Could not save file',err)
        }else{
            console.log('Success:new README.md file generated')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md',data)
            })
        
        .catch((error)=>{
            console.log(error)
        })
    }



// Function call to initialize app
init();
