var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.user) {
        res.render('index', {title: 'Express', isLogin: true, user:req.session.user});
    } else {
        res.render('index', {title: 'Express', isLogin: false});
    }


});

module.exports = router;
