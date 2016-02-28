// Basic:

// module.exports = {
//   green: require('./green.js'),
//   red: require('./red.js'),
//   yellow: require('./yellow.js')
// }

// Bonus:

// converts file names to valid JS/Node names
// toCamelCase('EquipmentClass name')  // -> equipmentClassName
// toCamelCase('Equipment className')  // -> equipmentClassName
// toCamelCase('equipment class name') // -> equipmentClassName
// toCamelCase('Equipment Class Name') // -> equipmentClassName
// toCamelCase('hyphen-name-format')     // -> hyphenNameFormat
// toCamelCase('underscore_name_format') // -> underscoreNameFormat

var path = require('path')
var fs = require('fs')
var toCamelCase = function(text) {
  return text.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
    if (p2) return p2.toUpperCase()
      return p1.toLowerCase()
  })
}

var normalizedPath = require('path').join(__dirname)
var colorLogs = {}
require('fs').readdirSync(normalizedPath).forEach(function(file) {
  // Skip this file
  if (file === __filename || !file.endsWith('.js')) return false
  // Convert to valid JS/Node name
  var keyName = toCamelCase(path.basename(file, '.js'))
  // Import from a file
  colorLogs[keyName] = require('./' + file)
})
// Export the object
module.exports = colorLogs


// More font and background colors
//
// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"
//
// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"
//
// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
