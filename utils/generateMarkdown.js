// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://shields.io/badge/license-${license}-green)`;
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache': 
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'MIT': 
      return '';
    case 'GPL': 
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'; 
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license); 
  if(!link)
    return `This project is covered under the ${license} license.`; 
  else
    return `This project is covered under the ${license} license.

  ${link}`; 
}

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}  

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation 

${data.install}

## Usage

${data.usage}

## Credits 

${data.contributors}

## License 

${renderLicenseSection(data.license)}

## Contact Me

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) [${data.github}](https://github.com/${data.github}/)

You can reach me at ${data.email} with any questions! 
`;
}

module.exports = generateMarkdown;
