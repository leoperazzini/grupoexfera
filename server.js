const express = require('express')
const app = express()
const consign = require('consign')
const forceDomain = require('forcedomain')

const port = 3003

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use('/', express.static('public'))

app.use(forceDomain({
    hostname:'www.grupoexfera.com.br',
    protocol: 'https'
}))

consign().include('./app/routes')
.into(app)

app.listen(port, ()=>{
    console.log('server running on port:' + port)
})