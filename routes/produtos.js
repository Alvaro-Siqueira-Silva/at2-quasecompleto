module.exports = (app)=>{
    const database = require('../config/database')()

        const produto = require('../models/produto')

    app.get('/produtos', async(req,res)=>{
        ordem = req.query.ordem
        if(!ordem){var resultado = await produto.find({status:"0"}).sort({'_id':-1})}
        else {var resultado = await produto.find({status:"0"}).sort({data:'1'})}
        res.render('produtos.ejs',{resultado})
    })

    app.get('/verdescartado', async(req,res)=>{
        var resultadoDescartado = await produto.find({status:"1"}).sort({data:'1'})
        res.render('verdescartado.ejs',{resultadoDescartado})
    })

    app.get('/consumido',async(req,res)=>{
        var doc = req.query.id
        var consumido = await produto.findOneAndUpdate({_id:doc},{status:"1"})

        res.redirect('/produtos')
    })

    app.get('/descartar',async(req,res)=>{
        var doc = req.query.id
        var consumido = await produto.findOneAndUpdate({_id:doc},{status:"1"})

        res.redirect('/produtos')
    })

    app.get('/desfazer', async(req,res)=>{
        var doc = req.query.id
        var desfazer = await produto.findOneAndUpdate({_id:doc},{status:"0"})
        res.redirect('/verdescartado')
    })

    app.get('/excluir',async(req,res)=>{
        var id = req.query.id
        var excluir = await produto.findOneAndRemove({_id:id})
        res.redirect('/produtos')   
    })

    app.get('/alterar', async(req,res)=>{
        var id = req.query.id

        var alterar = await produto.findOne({_id:id})

        res.render("alterar.ejs",{alterar})
    })

    app.post("/alterar", async(req,res)=>{
        var dados = req.body

        var atualizar = await produto.findOneAndUpdate({_id:dados.id},{
            data:dados.data,
            produto:dados.produto,
        })
        res.redirect('/produtos')
    })
}