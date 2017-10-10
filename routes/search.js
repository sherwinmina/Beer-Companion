// http://api.brewerydb.com/v2//search?q=Goosinator&type=beer/?key=e61443089ea955edc0ad009ec7d5fc1a

var BreweryDb = require('brewerydb-node')
var brewdb = new BreweryDb('e61443089ea955edc0ad009ec7d5fc1a')

var express = require('express')
var router = express.Router()
var axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.param)
  res.send('hello')
  // brewdb.breweries.find({ established: 2010 }, (err, data) => {
  //   res.send(data)
  // })
})

router.post('/', function(req, res, next) {
  console.log(req.body.age)
  res.send(req.body.name)
  // all/ beers/ breweries in req.body.searchValue  and q: req.body.query object

  // brewdb.search.all({ q: 'coors' }, callback)
  // brewdb.search.beers({ q: 'dogfish' }, callback)
  // brewdb.search.breweries({ q: 'dogfish' }, callback)

  // brewdb.breweries.find({ established: 2010 }, (err, data) => {
  //   res.send(data)
  // })
})

module.exports = router
