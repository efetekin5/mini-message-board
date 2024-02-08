var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    date: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    date: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Form'})
})

router.post('/new', function(req, res, next) {
  const newName = req.body.name;
  const newText = req.body.text
  const newDate = new Date();

  messages.push({text: newText, user: newName, date: newDate})
  res.redirect('/');
})

module.exports = router;