// 数据集合关联

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/EndProcess');

var DBRefUser = mongoose.model('DBRefUser', {
	username: {
		type: String,
		default: 'end'
	}
})

var News = mongoose.model('News', {
	title: String,
	author: {
		type: mongoose.Schema.ObjectId,
		ref: 'DBRefUser'
	}
});

var dbrefuser = new DBRefUser({
	username: ''
});
var news = new News({
	title: 'EndProcess',
	author: dbrefuser
})

dbrefuser.save((err) => {
	if(err) {
		return console.log('save user failed:', err);
	}
		DBRefUser.findOne().exec((err,doc) => {
			console.log(doc);
		})

	news.save((err) => {
		if(err) {
			return console.log('svae news failed:', err);
		}

		News.findOne({'title': "EndProcess"}).populate('author').exec((err,doc) => {
			console.log('afther populate:', err, doc);
		})
	})
})