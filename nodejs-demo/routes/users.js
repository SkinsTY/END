/*
* Author END
* 登录注册
*/
var express = require('express');
var mongoose = require('mongoose'); // 导入mongoose模块
var Users = require('../schemas/users'); // 导入模型数据模块
var Ciphers = require('../public/javascripts/lib/cipher'); // 加密

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*查询所有用户数据*/
router.get('/users', function(req, res, next) {
	Users.fetch(function(err, users) {
		if(err) {
			console.log(err);
		}
		res.render('users', {title: '用户列表', users: users}) // 这里也可以json的格式直接返回数据res.json({data: users});
	})
});

/*获取已有账号接口登录*/
router.post('/login/getAccount', (req, res, next) => {
	var username = req.body.username,
	password = req.body.password;
	Users.findById(username,(err, users) => {
		if (err) {
			res.send(err);
		} else if(!users) {
			res.send({ message: "用户不存在", status: 0 });
		} else {
			if (password != Ciphers.decrypt(users.password,'zlp')){ // 解码用户密码比对
				res.send({ message: "密码错误", status: 0 });
			} else {
				res.send({ message: "登录成功", status: 2, users: users });
			}
		}
	})
});

/*创建账号接口*/
router.post('/login/createAccount', (req, res, next) => {
	var newAccount = new Users({
		username: req.body.username,
		password: Ciphers.encrypt(req.body.password,'zlp') // 给密码加密
	});
	Users.findById(req.body.username, (err, users) => {
		if (err) {
			res.send(err);
		} else if(users) {
			res.send({ message: "用户已存在", status: 0 });
		} else {
			newAccount.save((err) => {
				if (err) {
					res.send(err);
					res.send({ message: err, status: 2 });
				}
				res.send({ message: "注册成功", status: 2 });
			})
		}
	})
})

module.exports = router;
