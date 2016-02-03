// Basic
// module.exports = {
//   green: require('./green.js'),
//   red: require('./red.js')
// }

// Bonus

// converts file names to valid JS/Node names
// toCamelCase('EquipmentClass name')  // -> equipmentClassName
// toCamelCase('Equipment className')  // -> equipmentClassName
// toCamelCase('equipment class name') // -> equipmentClassName
// toCamelCase('Equipment Class Name') // -> equipmentClassName
// toCamelCase('hyphen-name-format')     // -> hyphenNameFormat
// toCamelCase('underscore_name_format') // -> underscoreNameFormat

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
  if (file === __filename) return false
  // Convert to valid JS/Node name
  var keyName = toCamelCase(path.basename(file, '.js'))
  // Import from a file
  colorLogs[keyName] = require('./' + file)
})
// Export the object
module.exports = colorLogs
