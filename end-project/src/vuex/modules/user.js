import * as types from '../types'

/*
* 登录状态配置
*/

const state = {
	// 用户登录状态
	loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
	// 用户信息
	userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
}

const actions = {
	// 用户登录
	setUserInfo({ commit }, res){
		localStorage.setItem('userInfo', JSON.stringify(res))
		localStorage.setItem('loginStatus', true)
		commit(types.SET_USER_INFO, res)
		commit(types.SET_LOGIN_STATUS, true)
	},
	// 退出登录
	setSignout({ commit }) {
		localStorage.removeItem("userInfo")
		localStorage.removeItem('loginStatus')
		commit(types.SET_USER_INFO, {})
		commit(types.SET_LOGIN_STATUS, false)
	}
}

const getters = {
	loginStatus: state => state.loginStatus,
	userInfo: state => state.userInfo
}

const mutations = {
	[types.SET_LOGIN_STATUS](state, status) {
		state.loginStatus = status
	},
	[types.SET_USER_INFO](state, res) {
		state.userInfo = res
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}