const express = require('express');
const router = express.Router();
const home = require('../controllers/home');

module.exports = (app) => {
  app.use('/', router);
};
//顯示註冊
router.get('/register', home.renRegister);

//註冊
router.post('/register', home.register);

//顯示登入
router.get('/login',home.renLogin);

//登入
router.post('/login', home.login);

//首頁
router.get('/', home.renderIndex);

//刪除相片
router.get('/deletepicture/:id',home.deletePicture);

//進入uploadpicture頁面
router.get('/uploadpicture', home.renderUpload);

//上傳相片
router.post('/uploadpicture', home.uploadPicture);

//文章列表
router.get('/articles', home.articles);

//刪除文章
router.get('/deletearticle/:id', home.deleteArticle);

//更新文章頁面
router.get('/updatearticle/:id', home.renUpdateArticle)

//更新文章
router.post('/updatearticle/:id', home.updateArticle);

//全文顯示
router.get('/allessay/:id', home.allEssay)

//新增留言
router.post('/allessay/:id', home.addMessage)

//進入uploadarticle 頁面
router.get('/uploadarticle', home.renUploadArticle);

//上傳文章
router.post('/uploadarticle', home.uploadArticle);

