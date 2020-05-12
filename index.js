const fs = require('fs')
const URL = __dirname + '/bed.json'


data = fs.readFile(URL, 'utf8', function (err, data) {
    if (err) console.log('Error: ' + err)
    return JSON.parse(data)    
});


function getCountrys(data) {
    Countrys = data.map()
}
