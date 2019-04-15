var express = require('express')
var app = express()
const math = require('mathjs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3002, function () {
  console.log('partC listening on port 3002!')
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
  

  res.send(
   `<doctype html>
    <h1> YOU HAVE BAD MUSIC TASTE </h1>
    <iframe src="https://giphy.com/embed/cr9vIO7NsP5cY" width="480" height="363" frameBorder="0" class="giphy-embed" ></iframe>
    <p>${insults[insult]}</p>
    </body>
    <h2> the above declaration is supported by The President of the United States </h2>
    <iframe src="https://giphy.com/embed/TIyJGNK325XGciFEnI" width="480" height="476" frameBorder="0" class="giphy-embed" ></iframe> </doctype>`
    );
});	