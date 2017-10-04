const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

// Since the root/src dir contains our index.html
// app.use(express.static(__dirname))
var publicPath = path.resolve(__dirname, './build/index.html')

app.get('*', (req, res) => {
  res.sendFile(publicPath)
})

// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
app.listen(port)
console.log('server statrted on ', port)