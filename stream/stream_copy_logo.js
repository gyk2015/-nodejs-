var fs = require('fs')
var source = fs.readFileSync('../buffer/logo.gif')

fs.writeFileSync('steam_copy_logo.png',source)