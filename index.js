const inquirer = require("inquirer");
const Manager = require("./classes/manager.js");
const fs = require('fs');
const path = require("path");

// ===== GET MANAGER'S INFO
inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is the team manager's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?"
    },
    {
      type: "checkbox",
      message: "Which type of team member would you like to add?",
      name: "member",
      choices: [
        "engineer", 
        "intern", 
        "team is complete", 
      ]
    }
  ])
  // ========= IF CHOICE IS ENGINEER GET ENGINEER INFO
    .then((team) => {
    const manager = new Manager(team.manager, team.id, team.email, team.officeNumber)
    console.log(manager)
    // console.log(team.member[0]);
    // console.log("next team member", team.member)
    if (team.member[0] === "engineer") {
      inquirer.prompt([
      {
        type: "input",
        name: "engineer",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's id"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
      },
      {
          type: "input",
          name: "engineerGitHubUsername",
          message: "What is the engineer's GitHub username?"
        }
      
    ])
    .then((data) => {
      console.log("engineer", data)
    })
    }
    
  });