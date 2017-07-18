<template>
	<div class="login regist slide-left-enter-active">
		<div class="logo">END</div>
		<h3>说走就走，相信过程</h3>
		<ul class="content">
			<li>
				<div class="user-name">
					<i class="icon">&#xe8c8;</i>
					<div class="text"><input type="tel" placeholder="手机号" maxlength="11" v-model="username"></div>
				</div>
			</li>
			<li>
				<div class="user-password">
					<i class="icon">&#xe8d4;</i>
					<div class="text"><input type="password" placeholder="密码" v-model="password"></div>
				</div>
			</li>
			<!-- <li>
				<div class="user-verification-code">
					<i class="icon">&#xe8cd;</i>
					<div class="text"><input type="password" placeholder="验证码"></div>
					<a class="get-code" href="javascript:void(0);">获取验证码</a>
				</div>
			</li> -->
			<li>
				<a href="javascript:void(0);" class="login-btn btn" @click="regist()">注册</a>
			</li>
		</ul>
		<div class="user-login">
			<router-link to="/user/login">已有账号？登录</router-link>
		</div>
	</div>
</template>

<script>
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
			regist() {
				// let Tool = _.tool();
	            if (!this.username || !this.password)
	                return _.alert('请填写完整')
	                // Tool.alert('f');
	            if (!_.isPhone(this.username))
	            	return _.alert('请输入正确的手机号码');
	            if (!_.password(this.password))
	            	return _.alert('密码必须已字母开头，长度在6~16位之间，必须由字母数字组合');

	            let data = {
	            	username: this.username,
	            	password: this.password
	            }
				
				api.regist(data)
					.then((response) => { // 响应成功
						console.log(response);
						if(!response.data.status)
							return _.alert(response.data.message);

						_.alert(response.data.message,() => {
		                    this.$router.replace('/user/login');
						})
					})
					.catch((error) => {
						if(!error.data.status)
							return _.alert(error.data.message);
					})
			}
		}
	}
</script>

<style lang="scss">
	@import "../assets/css/global";
	.regist {
		.content {
			li {
				.user-verification-code {
					.get-code {
						display: block;
						width: px2rem(90px);
						font-size: 14px;
						line-height: px2rem(36px);
						color: #fff;
						background: #a5b0ff;
						border-top-right-radius: 5px;
						border-bottom-right-radius: 5px;
						-webkit-border-top-right-radius: 5px;
						-webkit-border-bottom-right-radius: 5px;
					}
				}
			}
		}
		.user-login {
			padding: 0 px2rem(30px);
			text-align: right;
			a {
				color: #999;
				font-size: px2rem(12px);
			}
		}
	}
</style>