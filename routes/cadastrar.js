module.exports = (app)=>{
    //rota do tipo render
    
    app.post('/cadastrar', async(req,res)=>{
        var dados = req.body

        const database = require('../config/database')()

        const produto = require('../models/produto')

        var gravar = await new produto({
            data:dados.data,
            produto:dados.produto
        }).save()

        res.redirect('/cadastrar')
    })

    app.get('/cadastrar',(req,res)=>{
        res.render('cadastrar.ejs')
    })

    }