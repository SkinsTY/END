<template>
	<nav>
		<h1>相信过程</h1>
		<ul>
			<li v-show="loginStatus">
				<router-link to="/user">
					<span>我的</span>
				</router-link>
			</li>
			<li v-show="!loginStatus">
				<router-link to="/user/login">
					<span>登录</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/list">
					<span>行程</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/post">
					<span>空约</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/sky">
					<span>大空</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	computed: {
		loginStatus () {
			return JSON.parse(localStorage.getItem('loginStatus')) || false
		}
	}
}
</script>

<style scoped lang="scss">
	@import "../assets/css/global";
	nav {
		background: rgba(255,255,255,1);
		padding-bottom: px2rem(5px);
		margin-bottom: px2rem(8px);
		@include shadow;
		ul {
			width: 100%;
			@include box;
			li {
			    @include flex;
				a {
					display: block;
				}
				a:before {
					display: block;
					margin: 0 auto;
					color: #fff;
					width: px2rem(40px);
					height: px2rem(40px);
					line-height: px2rem(40px);
					font-size: px2rem(26px);
					font-family: "iconfont" !important;
					@include radius(50%);
					background: #a5b0ff;
				}
				span {
					color: #666;
					font-size: px2rem(14px);
					line-height: 1.5;
				}
			}

			li:first-child,
			li:nth-child(2) {
				a:before {
					content: "\e8c8";
				}
			}
			li:nth-child(3){
				a:before {
					content: "\E8ad";
				}
			}
			li:nth-child(4){
				a:before {
					content: "\E8a9";
				}
			}
			li:last-child {
				a:before {
					content: "\e8ee";
				}
			}
		}
	}
</style>