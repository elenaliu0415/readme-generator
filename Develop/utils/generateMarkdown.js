// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license.badge != null ? license.badge : ""; 
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license.link != null ? license.link : ""; 
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  [${data.license.name}](${renderLicenseLink(data.license)})
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  For more projects, please visit my [GitHub](https://github.com/${data.github}). 
  Please feel free to contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
