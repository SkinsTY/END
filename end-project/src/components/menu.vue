<template>
	<div class="menu" :class="{unfold: isShow}" @click="clickMenu" v-drag>
		<i class="bg"></i>
		<ul>
			<li>
				<router-link to="/">
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="/convene">
					<span>说走</span>
				</router-link>
			</li>
			<li>
				<router-link to="/recall">
					<span>就走</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user">
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	// 手指拖动菜单
	Vue.directive("drag",{
		inserted: function(el){
			var obj = el,
			x,y,moveX,moveY;
			function touch(event){
				var event = event || window.event;
				switch(event.type){
					case "touchstart":// 手指触摸屏幕时
		        	var touch = event.touches[0];
					x = touch.clientX - obj.offsetLeft;
					y = touch.clientY - obj.offsetTop;
					// 拖动时移除css3动画效果
					obj.style.transition = "all 0s";
					obj.style.WebkitTransition = "all 0s";
					break;
					case "touchmove":// 手指在屏幕上滑动时
		        	event.preventDefault();// 阻止网页默认滚动
		        	var touch = event.changedTouches[0];
					moveX = touch.clientX - x; // 计算滑动位置
					moveY = touch.clientY - y;
					var w = window.screen.width / 320,
					h = window.screen.height;
					if(moveX < (w * (-40))){// 限制拖放在屏幕范围内
						moveX = w * (-40);
					}else if(moveX > (w * 230)){
						moveX = w * 230;
					}
					if(moveY < w * 25){
						moveY = w * 25;
					}else if(moveY > (h - (w * 60))){
						moveY = h - (w * 60);
					}
					obj.style.left = moveX + 'px';
					obj.style.top = moveY + 'px';
					break;
					case "touchend":// 手指离开屏幕时
					// 手指离开屏幕添加css3动画效果
					obj.style.transition = "all 0.4s ease";
					obj.style.WebkitTransition = "all 0.4s ease";
					var w = window.screen.width / 320,
					xl = obj.offsetLeft;
					if(xl < w * 190 / 2){// 手指滑动动作完成后，回到贴左右边位置
						moveX = w * (-40);
						obj.style.left = moveX + 'px';
					}else{
						moveX = w * 230;
						obj.style.left = moveX + 'px';
					}
					break;
				}
			}
			obj.addEventListener("touchstart",touch,false);
			obj.addEventListener("touchmove",touch,false);
			obj.addEventListener("touchend",touch,false);

		}
	})
	export default{
		data(){
			return {
				isShow: false
			};
		},
		methods: {
			clickMenu(el){
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style scoped="" lang="scss">
	@import "../assets/css/global";
	.menu {
		position: fixed;
		top: 50%;
		left: px2rem(-40px);
		opacity: .5;
		@include transition(all,0.4s);
		@include scale(.25,.25);
		z-index: 990;
		.bg {
			display: block;
			position: absolute;
			left: px2rem(-35px);
			top: px2rem(-85px);
			width: px2rem(200px);
			height: px2rem(200px);
			opacity: 0;
			@include radius(50%);
			@include transition(all,0.4s);
			background: rgba(0,0,0,0.5);
		}
		ul {
			width: px2rem(130px);
			height: px2rem(96px);
			position: relative;
			@include bgimg(url("../assets/images/menu.png"));
			li {
				position: absolute;
				a {
					display: none;
					padding-top: px2rem(22px);
					span {
						color: #fff;
						font-size: px2rem(12px);
						line-height: 1.5;
						display: block;
					}
				}
				a:before {
					display: block;
					width: px2rem(20px);
					height: px2rem(20px);
					font-size: px2rem(20px);
					line-height: px2rem(20px);
					margin: 0 auto;
					color: #fff;
					font-family: "iconfont" !important;
				}
			}
			li:first-child,
			li:last-child {
				width: px2rem(50px);
				height: px2rem(70px);
				top: px2rem(-26px);
				@include bgimg(url("../assets/images/menu_1.png"));
			}
			li:first-child {
				left: px2rem(-30px);
				a:before {
					content: "\e750";
				}
			}
			li:last-child {
				right: px2rem(-30px);
				@include scale(-1,1);
				a {
					@include scale(-1,1);
				}
				a:before {
					content: "\e8c8";
				}
			}
			li:nth-child(2),
			li:nth-child(3) {
				width: px2rem(50px);
				height: px2rem(80px);
				top: px2rem(-76px);
				@include bgimg(url("../assets/images/menu_2.png"));
			}
			li:nth-child(2) {
				left: px2rem(10px);
				a:before {
					content: "\e88d";
				}
			}
			li:nth-child(3){
				right: px2rem(10px);
				@include scale(-1,1);
				a {
					@include scale(-1,1);
				}
				a:before {
					content: "\e762";
				}
			}
		}
	}
	// 菜单栏展开
	.unfold {
		top: 50% !important;
		left: px2rem(95px) !important;
		opacity: 1;
		@include scale(1,1);
		ul {
			li {
				a {
					display: block;
				}
			}
		}
		ul:before {
			content: "相信过程";
			color: #fff;
			display: block;
			font-size: px2rem(20px);
			padding-top: px2rem(50px);
		}
		.bg {
			opacity: 1;
		}
	}
</style>