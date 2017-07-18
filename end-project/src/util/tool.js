import store from '../vuex/store'

/*
* dialog公共方法
*/
export function alert(str,cb){
	store.dispatch('showAlert',true)
	store.dispatch('alertMsg',str)
	setTimeout(() => {
		store.dispatch('showAlert',false);
		if(!!cb)
	        cb();
	},2000)
}

/*
* 验证是否是手机号码
*/
export function isPhone(phone){
	var reg = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
	return reg.test(phone);
}

/*
* 验证密码
* 密码必须已字母开头，长度在6~16位之间，必须由字母数字组合
*/
export function password(pwd){
	var reg = new RegExp(/^[a-zA-Z](?=.*\d)(?=.*[a-zA-Z]).{5,17}$/);
	return reg.test(pwd);
}

// export function tool(){
// 	var Tool = {
// 		alert: function(str,cb){
// 			store.dispatch('showAlert',true)
// 			store.dispatch('alertMsg',str)
// 			setTimeout(() => {
// 				store.dispatch('showAlert',false);
// 				if(!!cb)
// 			        cb();
// 			},2000)
// 		}
// 	}
// 	return Tool;
// }
