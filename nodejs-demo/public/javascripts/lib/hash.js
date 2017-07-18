var crypto = require('crypto');
console.log(crypto.getHashes());

var content = 'password';
var token1 = 'miyue';
var buf = crypto.randomBytes(16);
token1 = buf.toString('hex');
console.log("生成的token（用语加密的秘钥）：" + token1);
var ScrectKey = token1;
var Signture = crypto.createHmac('sha1',ScrectKey);
Signture.update(content);
var miwen = Signture.digest().toString("base64");
console.log("加密结果f：" + miwen);


var content = 'password';
var md5 = crypto.createHash('md5');
md5.update(content);
var e = md5.digest('hex');
console.log("加密结果：" + e);