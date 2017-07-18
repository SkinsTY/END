import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:3000';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
	// POST传参序列化
	if(config.method === 'post'){
		config.data = qs.stringify(config.data);
	}
	return config;
},(error) => {
	_.alert("错误的传参");
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
	if(!response.data.status){
		return Promise.reject(response);
	}
	return response;
},(error) => {
	_.alert("网络异常");
	return Promise.reject(error);
});

export function fetch(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error);
			})
	})
}

export default {
	/*
	* 获取数据
	*/
	getData(params) {
		return fetch('/first', params)
	},
	/*
	* 用户登录
	*/
	login(params) {
		return fetch('/users/login/getAccount', params)
	},
	/*
	* 用户注册
	*/
	regist(params) {
		return fetch('/users/login/createAccount', params)
	}
}