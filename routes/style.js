var express = require('express')
var router = express.Router()
var axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const url =
    'http://api.brewerydb.com/v2/styles/?key=e61443089ea955edc0ad009ec7d5fc1a'
  axios.get(url).then(item => res.send(item.data))
})

module.exports = router
