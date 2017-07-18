<template>
	<div class="user slide-left-enter-active">
		<div class="head_portrait">
			<img src="../assets/images/head.png" alt="">
			<p v-show="!loginStatus">
				<router-link to="/user/login"><span>登录</span></router-link>
				<span>|</span>
				<router-link to="/user/regist"><span>注册</span></router-link>
			</p>
			<p v-show="loginStatus">
				<span>{{userInfo.username}}</span>
				<span>|</span>
				<span @click="logout">退出登录</span>
			</p>
		</div>
		<ul class="user_nav">
			<li><router-link to="/user/list">行程</router-link></li>
			<li><router-link to="/user/post">发布</router-link></li>
			<li><router-link to="/user/sky">大空</router-link></li>
		</ul>
		<ul class="user_detail">
			<li>
				<div class="title">昵称</div>
				<div class="info">END</div>
			</li>
			<li>
				<div class="title">电话</div>
				<div class="info">18852600625</div>
			</li>
			<li>
				<div class="title">QQ</div>
				<div class="info">514774841</div>
			</li>
			<li>
				<div class="title">个性签名</div>
				<div class="info">疯一样的男子——简称疯子</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters } from "vuex"
	import * as _ from "../util/tool"
	export default {
		data() {
			return {
				data: JSON.parse(localStorage.getItem('userInfo')) || ""
			}
		},
		computed: {
			loginStatus () {
				return JSON.parse(localStorage.getItem('loginStatus')) || false
			},
			...mapGetters([
				'userInfo'
			])
		},
		methods: {
			logout () {
				this.$store.dispatch('setSignout');
				_.alert("退出登录成功");
                this.$router.replace('/user/login');
			}
		}
	}
</script>

<style lang="scss" scoped="">
	@import "../assets/css/global";
	.user {
		.head_portrait {
			background: #a5b0ff;
			border-bottom: px2rem(1px) solid #fff;
			margin-bottom: px2rem(8px);
			@include shadow;
			img {
				width: px2rem(100px);
				height: px2rem(100px);
				@include radius(100px);
				border: px2rem(2px) solid #fff;
				margin: 0 auto;
			}
			p {
				color: #fff;
				font-size: px2rem(14px);
				padding: px2rem(5px) 0;
				span {
					margin: 0 px2rem(5px);
				}
				a {
					color: #fff;
				}
			}
		}
		.user_nav {
			border-top: px2rem(1px) solid #ddd;
			background: #fff;
			padding: px2rem(8px) 0;
			margin-bottom: px2rem(10px);
			@include shadow;
			@include box;
			li {
				font-size: px2rem(14px);
				border-left: px2rem(1px) solid #e8e8e8;
				@include flex;
				a {
					color: #666;
				}
			}
			li:first-child {
				border-left: none;
			}
		}
		.user_detail {
			background: #fff;
			padding: 0 px2rem(8px);
			font-size: px2rem(14px);
			border-top: px2rem(1px) solid #ddd;
			@include shadow;
			li {
				padding: px2rem(5px) 0;
				border-top: px2rem(1px) solid #e8e8e8;
				color: #999;
				@include box;
				>div {
					@include flex;
				}
				.title {
					text-align: left;
				}
				.info {
					text-align: right;
				}
			}
			li:first-child {
				border-top: 0;
			}
		}
	}
</style>