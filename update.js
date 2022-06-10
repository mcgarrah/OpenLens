const fs = require('fs');

var packagejson = require('./package.json');

packagejson.build.publish = {
    url: "https://github.com/mcgarrah/OpenLens/releases/download/Latest",
    provider: "generic"
}

fs.writeFileSync('package.json', JSON.stringify(packagejson));
