// looks for entry file names - starting point

// scan the content for "requires" and "imports"

// bundles everything together to a destination you specified

// thats the file you add with a single script tag

var path = require('path')

const config = {
  entry: {
    app: './app'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
}

module.exports = config
