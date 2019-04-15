const express = require('express')
const app = express()
const math = require('mathjs')

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3002, function () {
  console.log('partBpost listening on port 3002!')
})

app.use(express.static('public'))

app.post('/processit', function(req, res) {
  var input = req.body.bandname;
 
  const insults = [
    `${input}??!?!? Good pick... loser`,
    `I have no faith in humanity for people that like ${input}`,
    `Only people without souls like ${input}`
  ]

  const insult = math.floor(math.random(0,2.99))

  res.send(insults[insult]);
});
