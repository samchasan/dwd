// htmlgenerator

'use strict';

const args = require('minimist')(process.argv.slice(2));
const url = args.s
const fs = require('fs');
const request = require('request');

request(`https://www.${url}`, { json: true }, (err, res, body) => {
if (err) { return console.log(err); }
const html = res.body

fs.writeFile('test.html', html, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
});

