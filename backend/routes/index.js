var express = require('express');
var router = express.Router();

const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Countries Backend' });
});

router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.get('/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

router.post('/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

module.exports = router;
