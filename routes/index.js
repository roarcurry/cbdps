var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
    if (!req.session.user) {
        //非登录状态
        res.render('users');
    }else{
        //登录状态
        res.render('index');
    }
});



module.exports = router;
