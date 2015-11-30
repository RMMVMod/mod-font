var ModAPI = require('modapi')
var fs = require('fs')
var path = require('path')

var readLocalFile = function(name) {
  return fs.readFileSync(path.join(__dirname, name))
}

ModAPI.update("BasicControls/FontManager.js", readLocalFile("FontManager.js"))