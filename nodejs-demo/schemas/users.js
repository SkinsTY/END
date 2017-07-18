var mongoose = require('mongoose');

var UserInfo = mongoose.model('UserInfo',{
	name: String,
	username: String,
	mobile: Number,
	qq: Number,
	sex: String,
	birthday: String,
	age: Number,
	sdasd: String
});

// 申明一个mongoose对象
var UsersSchema = new mongoose.Schema({
	username: String,
	password: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	},
	userinfo: {
		type: mongoose.Schema.ObjectId,
		ref: 'UserInfo'
	}
});

// 保存前的中间件，每次执行都会调用，时间更新操作
UsersSchema.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	next();
});
// 保存后的中间件
// UsersSchema.post('save', function(newxt){
// 	console.log("this is");
// 	next();
// })

// 自定义查询静态方法
UsersSchema.statics = {
	fetch: function(cb){
		return this
			.find()
			.sort('meta.updateAt') // 排序
			.exec(cb) // 回调
	},
	findById: function(username, cb){ // 根据username查询单条数据
		return this
			.findOne({'username': username})
			.populate('userinfo')
			.exec(cb)
	},
	save: function(cb){ // 存储数据
		return this
			.save()
			.exec(cb)
	}
};

var Users = mongoose.model('Users', UsersSchema); // 编译生成模型
// 暴露出的方法
module.exports = Users;