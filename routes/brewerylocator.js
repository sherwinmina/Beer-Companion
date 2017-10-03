var express = require('express')
var router = express.Router()
var axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // axios
  //   .get('http://api.brewerydb.com/v2/?key=e61443089ea955edc0ad009ec7d5fc1a')
  //   .then(item => res.send({ player: item.data }))
// res.send('hello')
  axios
    .get(
      'https://api.yelp.com/v3/businesses/search?term=brewery&location=san+francisco',
      {
        headers: {
          Authorization:
            'Bearer 0HFihR-IV2f-BldOzoKxFq_TWv-x5Wm7rbmV5ms3DzhyuMAguCb9PdmCiaBSswM0AA58jlw5gx-NXu0tD6LdtxI8nd9volzI2xCSo9vAjyZKUCIzZ2zsLkfrudnSWXYx'
        }
      }
    )
    .then(response => res.send({ breweries: response.data}))
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
