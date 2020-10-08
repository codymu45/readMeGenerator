function template(data) {
    return`# ${data.Title}
  [![GitHub license]](https://github.com/${data.Username}/${data.Title})
  
  # Description
  
  ${data.Description}
  
  # Table of Contents 
  
  * [Installation](#Installs)
  
  * [Usage](#Use)
  
  * [Contributing](#Contributors)
  
  * [Run](#Run)
  
  * [Questions](#questions)
  
  # Installs
  
  The following necessary dependencies must be installed to run the application properly: ${data.Installs}
  
  # Use
  
  ​This application is used for ${data.Use}
  
  # Contributors
  
  ​Contributors: ${data.Contributors}
  
  # Tests
  
  To run the app, run the following command in the terminal: ${data.Run}
  
  # Questions
  
  If you have any questions about the repo, open an issue or contact ${data.Username} directly ${data.Email}.
  `
  }
  
  module.exports = template;