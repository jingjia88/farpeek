const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

//首頁
router.get('/', (req, res) => {
  db.Article.findAll().then((articles) => {
    res.render('index', { 
      articles: articles
    });
  });
});

//刪除聯絡人
router.get('/delete/:id', (req, res) => {
  db.Article.destroy({
    where:{id:req.params.id} ,
	  name: req.body.name ,
    phonenumber: req.body.phonenumber
  	});
	res.redirect("/");
});

//進入update頁面
router.get('/update/:id', (req, res) => {
    db.Article.findOne({where:{id: req.params.id}}).then((articles) => {
    res.render('update', { 
      articles: articles
    });
  });
});

//更新聯絡人
router.post('/update/:id', (req, res) => {
	db.Article.update({
	  name: req.body.name ,
    phonenumber: req.body.phonenumber
  	},{where: {id: req.params.id}});
	res.redirect("/");
});



//進入add 頁面
router.get('/add', (req, res) => {
    res.render('add');
});


//新增聯絡人的功能
router.post('/add', (req, res) => {
	db.Article.build({
	  name: req.body.name ,
      phonenumber: req.body.phonenumber
  	}).save();
	res.redirect("/");
});