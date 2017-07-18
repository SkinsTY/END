var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
	res.render('login', { title: 'login' });
});
router.post('/first', function(req, res, next){
	res.json({name:'aaa',pwd:'12342',status: 1});
});

module.exports = router;
