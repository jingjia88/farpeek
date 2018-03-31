const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const fs= require('fs') 

exports.renRegister = (req, res) => {
  res.render('register');
};

exports.register = (req, res) => {
  if(req.body.password != req.body.passwordAgain){
    console.log("密碼輸入錯誤");
    res.redirect("/register");
  }
  else{
    db.member.build({
      account: req.body.account ,
      password: req.body.password
    }).save();
  }
  res.redirect("/login");
};

exports.renLogin = (req, res) => {
  res.render('login');
};

exports.login = (req, res) => {
  db.member.findOne({
    where: {account:req.body.account}
  }).then((file) => {
    if((file.account != req.body.account)||(file.password != req.body.password)){
      res.redirect('/login');
    }else{
      res.redirect("/");
    }
  });
};

exports.renderIndex = (req, res) => {
    db.album.findAll().then((alldata) => {
    res.render('index', { 
      data: alldata
    });
  });
};

exports.deletePicture =  (req, res) => {
  db.album.findOne({
    where:{id:req.params.id},
  }).then((file) =>{
    console.log(file.picture);

    var path = "./public/album/" + file.picture;
    fs.unlink(path, function(err) {
      if (err) {
         return console.error(err);
      }
      console.log("文件删除成功！");
    });
    
    db.album.destroy({
      where:{id:req.params.id} 
    });
  });

  res.redirect("/");
};

exports.renderUpload = (req, res) => {
  res.render('uploadpicture');
};

exports.uploadPicture = function(req, res){
  //配置diskStorage來控制文檔存儲的位置以及文檔名字等
  var storage = multer.diskStorage({
      //確定圖片存儲的位置
      destination: function (req, file, cb){
          cb(null, './public/album')
      },

    //確定圖片存儲時的名字,注意，如果使用原名，可能會造成再次上傳同一張圖片的時候的衝突
    filename: function (req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
  });
  //生成的專門處理上傳的一個工具，可以傳入storage、limits等配置
  var upload = multer({storage: storage}).single('picture');

  upload(req,res,function(err){
    db.album.build({
      name: req.body.name,
      picture: req.file.filename
    }).save();
  })

  res.redirect("/");
};

exports.articles = (req, res) => {
  db.article.findAll().then((alldata) => {
    res.render('article', { 
      data: alldata
    });
  });
};

exports.deleteArticle = (req, res) => {
  db.article.destroy({
    where:{id:req.params.id} ,
    });
  res.redirect("/articles");
};

exports.renUpdateArticle = (req, res) => {
    db.article.findOne(
      {where:{id:req.params.id},
    }).then((alldata) => {
    res.render('updatearticle', { 
      data: alldata
    });
  });
};

exports.updateArticle = (req, res) => {
  db.article.update({
    theme: req.body.theme ,
      essay: req.body.essay
    },{where:{id:req.params.id}});
  res.redirect("/articles");
};

exports.allEssay = (req, res) => {
    db.article.findOne(
      {where:{id:req.params.id},
    }).then((alldata) => {

    db.board.findAll({
      where:{theme:alldata.theme}
    }).then((file) =>{
    
      res.render('allessay',{
        message:file,
        data: alldata
      });
    });
  });
};

exports.addMessage = (req, res) => {
  db.article.findOne({
    where:{id:req.params.id},
  }).then((file) =>{
    db.board.build({
    theme: file.theme ,
      message: req.body.message,
    }).save();
  });
  res.redirect("/articles");
};

exports.renUploadArticle = (req, res) => {
    res.render('uploadarticle');
};

exports.uploadArticle = (req, res) => {
  db.article.build({
    theme: req.body.theme ,
      essay: req.body.essay
    }).save();
  res.redirect("/articles");
};