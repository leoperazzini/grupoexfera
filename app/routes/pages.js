const path = require('path')
module.exports = (app) =>{
    app.get('/', (req, res)=>{
        res.render('pages/underconstruction')
    })
    app.get('/index', (req, res)=>{
        res.render('pages/index', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/midia-ooh', (req, res)=>{
        res.render('pages/midia-ooh', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/marketing-promocional', (req, res)=>{
        res.render('pages/marketing-promocional', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/midias-impressas', (req, res)=>{
        res.render('pages/midias-impressas', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
    })
})
    app.get('/grupo-exfera', (req, res)=>{
        res.render('pages/grupo-exfera', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/contato', (req, res)=>{
        res.render('pages/contato', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/taxidoor', (req, res)=>{
        res.render('pages/taxidoor', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/mochila-pirulito', (req, res)=>{
        res.render('pages/mochila-pirulito', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/bikedoor', (req, res)=>{
        res.render('pages/bikedoor', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/biketruck', (req, res)=>{
        res.render('pages/biketruck', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/carro-som', (req, res)=>{
        res.render('pages/carro-som', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/distribuicao-encartes', (req, res)=>{
        res.render('pages/distribuicao-encartes', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/empenas', (req, res)=>{
        res.render('pages/empenas', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/faixa-sinal', (req, res)=>{
        res.render('pages/faixa-sinal', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/homem-seta', (req, res)=>{
        res.render('pages/homem-seta', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/maxibus', (req, res)=>{
        res.render('pages/maxibus', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/onibus-condominio', (req, res)=>{
        res.render('pages/onibus-condominio', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/paineis', (req, res)=>{
        res.render('pages/paineis', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/revista-blue', (req, res)=>{
        res.render('pages/revista-blue', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/revista-bonita', (req, res)=>{
        res.render('pages/revista-bonita', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/revista-pontal', (req, res)=>{
        res.render('pages/revista-pontal', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/revista-villas', (req, res)=>{
        res.render('pages/revista-villas', {
            header: '../partials/header',
            navbar:'../partials/navbar',
            footer:'../partials/footer'
        })
    })
    app.get('/midiakit/Grupo-Exfera-Midia-Kit.pdf', (req, res)=>{
        res.download('./app/files/midiakit.pdf')
    })
}