var express = require('express')
var app = express()
const math = require('mathjs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3002, function () {
  console.log('partB listening on port 3002!')
})

app.use(express.static('public'))

app.get('/processit', function(req, res) {
  const rawText = req.url
  const newText = rawText.replace('/processit?bandname=','')
  const query = newText.replace('+',' ')

  const insults = [
    `${query}??!?!? Good pick... loser`,
    `I have no faith in humanity for people that like ${query}`,
    `Only people without souls like ${query}`
  ]

  const insult = math.floor(math.random(0,2.99))

  res.send(insults[insult]);
});	