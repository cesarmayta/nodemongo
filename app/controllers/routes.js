const express = require('express');

const Product = require('../models/products');

const router = express.Router();

router.use(express.urlencoded({extended:true}));
router.use(express.json());


router.use(function(req,res,next){
    console.log("request",req.body);
    next();
})

//implementar metodos

router.route('/products')
.post(function(req,res){
    //console.log("request",req.body);
    const products = new Product();
    const rp = req.body;
    products.name = rp.name;
    products.amount = rp.amount;
    products.description= rp.description;
    products.save(function (error){
        if(error)
            res.status(500).send("error en el servicio"+error);
        res.json({message:"producto registrado"});
    })
})
.get(function(req,res){
    Product.find(function(error,products){
        if(error)
            res.status(500).send("error"+error);
        res.json(products);
    })
})

module.exports = router;
