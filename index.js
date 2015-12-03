var ModAPI = require('modapi')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var readLocalFile = function(name) {
  return fs.readFileSync(path.join(__dirname, name))
}

var settings = require('settings')()

// Migrate old settings (font.json)
var oldSettingsPath = path.join(__dirname, "..", "..", "font.json")
try {
  if (fs.existsSync(oldSettingsPath)) {
    console.log("RMMVLanguageFix: Found legacy settings file! Reading from that...")
    var oldSettings = JSON.parse(fs.readFileSync(oldSettingsPath))
    _.assign(settings, oldSettings)

    require('settings').save()
  }
} catch (e) {
  console.log(e)
  console.log(e.stack)
}

var code = readLocalFile("FontManager.js")
code = code.replace("SETTINGS_PLACEHOLDER", JSON.stringify(JSON.stringify(settings)))

ModAPI.update("BasicControls/FontManager.js", code)
