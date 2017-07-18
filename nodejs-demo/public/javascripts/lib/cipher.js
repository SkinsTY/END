/*
* author END
*/
var crypto = require('crypto'); // 加载crypto库
// console.log(crypto.getCiphers()); // 打印支持的cipher算法
var Ciphers = {
	// 加密
	encrypt: function(str, secret){
		var cipher = crypto.createCipher('aes192', secret);
		var enc = cipher.update(str, 'utf8', 'hex'); // 编码方式utf-8转为hex
		enc += cipher.final("hex"); // 编码方式转为hex
		return enc;
	},
	// 解密
	decrypt: function(str, secret){
		var decipher = crypto.createDecipher('aes192', secret);
		var dec = decipher.update(str, 'hex', 'utf8'); // 编码方式从hex转为utf-8
		dec += decipher.final('utf8'); // 编码方式从utf-8
		return dec;
	}
}
module.exports = Ciphers;