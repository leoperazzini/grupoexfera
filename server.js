const express = require('express')
const app = express()
const consign = require('consign')
const forceDomain = require('forcedomain')

const port = 3000

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.unsubscribe('/', express.static('public'))

app.use(forceDomain({
    hostname:'www.grupoexfera.com.br',
    protocol: 'https'
}))

consign().include('./app/routes')
.into(app)

app.listen(port, ()=>{

})