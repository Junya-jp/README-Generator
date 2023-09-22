// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT'){
      return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]`
    } 
    if (license ==='Apache'){
      return `[![Apache license](https://img.shields.io/badge/License-Apache-blue.svg)]`
    }
    if (license === 'BSD2'){
      return `[![BSD2 license](https://img.shields.io/badge/License-BSD2-blue.svg)]`
    }
    if (license === 'BSD3'){
      return `[![BSD3 license](https://img.shields.io/badge/License-BSD3-blue.svg)]`
    }
    if (license === 'N/A'){
      return ``
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
/*const licenselinks={
  Apache:'[Apache](https://choosealicense.com/licenses/apache-2.0/)',
  BSD2:'[BSD License(2-clause)](https://choosealicense.com/licenses/bsd-2-clause/)',
  BSD3:['[BSD License(3-clause)](https://choosealicense.com/licenses/bsd-3-clause/)'],
  MIT:['[MIT License](https://choosealicense.com/licenses/mit/)'],
  NA:['[N/A]']*/
  if(license === 'MIT'){
    return `https://choosealicense.com/licenses/mit/`
  }
  if(license === 'Apache'){
    return `https://choosealicense.com/licenses/apache-2.0/`
  }
  if(license === 'BSD2'){
    return `https://choosealicense.com/licenses/bsd-2-clause/`
  }
  if(license === 'BSD3'){
    return `https://choosealicense.com/licenses/bsd-3-clause/`
  }
  if(license === 'N/A'){
    return ``
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'N/A'){
    return `` 
  } else{
    return `Licensed under  ${renderLicenseLink(license)} `  
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#Questions)
  ## Description
  ${data.Description}

  ## Usage
  ${data.Usage}
  
  ## Installation
  ${data.Install}

  ## Contributing
  ${data.contributions}

  ## Questions
  - Email: ${data.email}
  - Github: https://github.com/${data.github}

  ## License  
  ${data.license}
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
