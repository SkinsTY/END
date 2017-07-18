import * as types from '../types'

/*
* 通用配置
*/
const state = {
	slidebarStatus: false,
	alertMsg: '登录成功',
	showAlert: false
}
const getters = {
    showAlert: state => state.showAlert
}
const actions = {
    setSlidebarStatus({ commit }, status) {
        commit(types.COM_SIDEBAR_STATUS, status)
    },
    alertMsg({ commit }, str) {
    	commit(types.COM_ALERT_MSG, str)
    },
    showAlert({ commit }, status) {
    	commit(types.COM_SHOW_ALERT, status)
    }
}
const mutations = {
	[types.COM_SIDEBAR_STATUS](state, status) {
		state.slidebarStatus = status
    },
    [types.COM_ALERT_MSG](state, str) {
    	state.alertMsg = str
    },
    [types.COM_SHOW_ALERT](state, status) {
    	state.showAlert = status
    }
}
export default {
	state,
	getters,
	actions,
	mutations
}