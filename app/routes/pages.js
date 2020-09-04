module.exports = (app) =>{
    app.get('/', (req, res)=>{
        res.render('pages/underconstruction')
    })
    app.get('/index', (req, res)=>{
        res.render('pages/index', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
    app.get('/midia-ooh', (req, res)=>{
        res.render('pages/midia-ooh', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
    app.get('/marketing-promocional', (req, res)=>{
        res.render('pages/marketing-promocional', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
    app.get('/midias-impressas', (req, res)=>{
        res.render('pages/midias-impressas', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
    app.get('/sobre-o-grupo-exfera', (req, res)=>{
        res.render('pages/sobre-nos', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
    app.get('/contato', (req, res)=>{
        res.render('pages/contato', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
    app.get('/taxidoor', (req, res)=>{
        res.render('pages/taxidoor', {
            header: '../partials/header',
            navbar:'../partials/navbar'
        })
    })
}