<template>
	<div class="login slide-left-enter-active">
		<div class="logo">END</div>
		<h3>说走就走，相信过程</h3>
		<ul class="content">
			<li>
				<div class="user-name">
					<i class="icon">&#xe8c8;</i>
					<div class="text"><input type="tel" placeholder="手机号" maxlength="11" v-model="username" /></div>
				</div>
			</li>
			<li>
				<div class="user-password">
					<i class="icon">&#xe8d4;</i>
					<div class="text"><input type="password" placeholder="密码" v-model="password" /></div>
				</div>
			</li>
			<li>
				<a href="javascript:void(0);" class="login-btn btn" @click="login">登录</a>
			</li>
		</ul>
		<div class="user-forgets">
			<router-link to="/user/forgetPassword">忘记密码？</router-link>
			<router-link to="/user/regist">注册</router-link>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex"
	import axios from "axios"
	import * as _ from '../util/tool'
	import api from "../fetch/api"

	export default {
		data () {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			...mapActions({ setUserInfo: 'setUserInfo'}),
			// 登录
			login() {
	            if (!this.username || !this.password) {
	            	return _.alert('请填写完整');
	            }
	            if (!_.isPhone(this.username))
	            	return _.alert('请输入正确的手机号码');
	            if (!_.password(this.password))
	            	return _.alert('密码必须已字母开头，长度在6~16位之间，必须由字母数字组合');
	            let data = {
	            	username: this.username,
	            	password: this.password
	            }
				api.login(data)
					.then(response => { // 响应成功
						console.log(response.data);
						if(!response.data.status)
							return _.alert(response.data.message);

						_.alert(response.data.message, () => {
	                    	this.$router.replace('/');
	                        this.setUserInfo(response.data.users);
						});
					})
					.catch(error => {
						console.log(error);
						if(!error.data.status)
							return _.alert(error.data.message);
					})
			}
		}
	}
</script>

<style lang="scss">
	@import "../assets/css/global";
	.login {
		.logo {
			padding-top: px2rem(30px);
			font-size: px2rem(50px);
			line-height: px2rem(80px);
			color: #fff;
			text-shadow: 0 px2rem(5px) px2rem(5px) rgba(0,0,255,0.2);
		}
		h3 {
			font-size: px2rem(14px);
			color: #999;
		}
		.content {
			margin-bottom: px2rem(15px);
			padding: 0 px2rem(30px);
			li {
				margin-bottom: px2rem(15px);
				font-size: px2rem(14px);
				background: rgba(0,0,0,0.05);
				@include radius;
				.user-name,
				.user-password,
				.user-verification-code {
					@include box;
					i {
						font-size: px2rem(20px);
						line-height: px2rem(36px);
						display: block;
						width: px2rem(36px);
						height: px2rem(36px);
					}
					.text {
						@include flex;
						input {
							background: none;
							height: px2rem(36px);
							padding: px2rem(5px);
							width: 100%;
							color: #666;
						}
					}
				}
				.login-btn {
					color: #fff;
					@include radius;
				}
			}
		}
		.user-forgets {
			padding: 0 px2rem(30px);
			@include box;
			a {
				display: block;
				text-align: right;
				font-size: px2rem(12px);
				color: #999;
				@include flex;
			}
			a:first-child {
				color: rgba(255,0,0,0.7);
				text-align: left;
			}
		}
	}
</style>