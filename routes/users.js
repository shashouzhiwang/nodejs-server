var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');


// router.get('/about', function(req, res) {
//     res.send('About birds 333eee');
// });

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('addBlog');
});

router.get('/addUser', function(req, res, next) {
    userDao.add(req, res, next);
});

router.post('/addBlog', function(req, res, next) {
    //res.send(res);
    // res.render('addBlog');
    console.log(res);
    // userDao.add(req, res, next);
});

module.exports = router;
