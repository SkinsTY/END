<template>
	<div class="slidebar">
		<div class="slidebar-con" :class="{showbar: showbar}">
			<div class="slidebar-head">
				<img src="../assets/images/head.png" alt="">
				<span v-if="!loginStatus">请登录</span>
				<span v-else>{{userInfo.username}}</span>
			</div>
			<ul class="slidebar-list">
				<li @click="hidebar">
					<router-link to="/user/list">行程记录</router-link>
				</li>
				<li @click="hidebar">
					<router-link to="/user/post">有空就约</router-link>
				</li>
				<li @click="hidebar">
					<router-link to="/user/sky">我的大空</router-link>
				</li>
			</ul>
		</div>
		<div v-show="showbar" class="slidebar-bg" @click="hidebar"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data () {
		return {
			
		}
	},
	computed: {
		...mapGetters([
			'loginStatus',
			'userInfo'
		]),
		showbar () {
			return this.$store.state.common.slidebarStatus;
		}
	},
	methods: {
		hidebar () {
			console.log(this.userInfo);
			this.$store.dispatch('setSlidebarStatus', false);
		}
	}
}

</script>

<style lang="scss" scoped>
	@import "../assets/css/global";
	.slidebar {
		text-align: left;
		.slidebar-con {
			position: fixed;
			left: 0;
			top: 0;
			width: px2rem(250px);
			background: #fff;
			z-index: 999;
			height: 100%;
			@include transition;
			@include translate(px2rem(-250px),0);
			.slidebar-head {
				padding: px2rem(20px) px2rem(10px);
				background: rgba(165,176,255,1);
				margin-bottom: px2rem(10px);
				img {
					display: inline-block;
					width: px2rem(34px);
					height: px2rem(34px);
					vertical-align: bottom;
					border: px2rem(1px) solid #fff;
					@include radius(100px);
				}
				span {
					color: #fff;
					font-size: px2rem(22px);
				}
			}
			.slidebar-list {
				padding: 0 px2rem(10px);
				li {
					padding: px2rem(5px) 0;
					a {
						color: #999;
						display: inline-block;
						font-size: px2rem(14px);
						line-height: px2rem(21px);
					}
				}
				li:before {
					display: inline-block;
					font-family: "iconfont";
					width: px2rem(21px);
					color: #999;
					margin-right: px2rem(5px);
					line-height: px2rem(21px);
					vertical-align: middle;
				}
				li:first-child:before {
					content: "\e8ad";
				}
				li:nth-child(2):before {
					content: "\e8a9";
				}
				li:nth-child(3):before {
					content: "\e8ee";
				}
			}
		}
		.slidebar-bg {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 998;
			background: rgba(0,0,0,0.7);
		}
		.showbar {
			@include translate;
		}
	}
</style>