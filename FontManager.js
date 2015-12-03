.pragma library

var fixedFontLoader;
var normalFontLoader;
var mediumFontLoader;
var heavyFontLoader;
var symbolFontLoader;

var fixedFontName  = "";
var normalFontName = "";
var mediumFontName = "";
var heavyFontName  = "";
var symbolFontName = "";

var renderType = 0; // Text.QtRendering

function createFontLoader(source) {
    var qml = "import QtQuick 2.3; FontLoader { source: '%1' }".arg(source);
    return Qt.createQmlObject(qml, Qt.application);
}

function initialize() {
    var fixedFontSource  = "../Fonts/mplus-1m-regular.ttf";
    var normalFontSource = "../Fonts/mplus-1c-regular.ttf";
    var mediumFontSource = "../Fonts/mplus-1p-medium.ttf";
    var heavyFontSource  = "../Fonts/mplus-1p-heavy.ttf";
    var symbolFontSource = "../Fonts/mplus-1p-heavy.ttf";

    fixedFontLoader  = createFontLoader(fixedFontSource);
    normalFontLoader = createFontLoader(normalFontSource);
    mediumFontLoader = createFontLoader(mediumFontSource);
    heavyFontLoader  = createFontLoader(heavyFontSource);
    symbolFontLoader = createFontLoader(symbolFontSource);

    fixedFontName  = fixedFontLoader.name;
    normalFontName = normalFontLoader.name;
    mediumFontName = mediumFontLoader.name;
    heavyFontName  = heavyFontLoader.name;
    symbolFontName = symbolFontLoader.name;

    var locale = Qt.locale().name;
    var fontConfiguration = {};
    try {
      var fontConfiguration = SETTINGS_PLACEHOLDER;
      fontConfiguration = JSON.parse(fontConfiguration.toString());
      normalFontName = fontConfiguration.normalFontName || normalFontName;
      fixedFontName = fontConfiguration.fixedFontName || fixedFontName;
      mediumFontName = fontConfiguration.mediumFontName || mediumFontName;
      heavyFontName = fontConfiguration.heavyFontName || heavyFontName;
      symbolFontName = fontConfiguration.symbolFontName || symbolFontName;

    } catch(e) {
      console.log(e);
    }
}

initialize();
