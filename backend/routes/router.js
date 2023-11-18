var express = require('express');
var router = express.Router();

let countyData

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

async function getIreland() {
  try{
    const res = await fetch('https://restcountries.com/v3.1/all', {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let countyData = await res.json();
    return countyData;
  } catch (error) {
    throw error;
  }
}

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

//! Returns black page, needs to be fixed
router.get('/ireland', async (req, res) => {
  getIreland()
  res.json(countyData)
});

module.exports = router;
