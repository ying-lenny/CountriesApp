var express = require('express');
var router = express.Router();

async function getSearchResults(name) {
  try{
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
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

router.post('/results', async (req, res) => {
  res.json(await getSearchResults(req.body.name))
});

module.exports = router;
