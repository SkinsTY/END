<template>
	<header>
		<div class="header_icon">
			<div v-show="backDisplay" @click="goBack">
				<i class="icon">&#xe601;</i>
			</div>
		</div>
		<div class="header_title"><p>{{title}}</p></div>
		<div class="header_icon">
			<div v-show="myDisplay" @click="showSideBar">
				<i class="icon">&#xe62c;</i>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		props: {
			title: String,
			backDisplay: Boolean,
			myDisplay: Boolean
		},
		data() {
			return {
				
			}
		},
		methods: {
			goBack(){
				window.history.back();
			},
			showSideBar(){
				this.$store.dispatch('setSlidebarStatus', true)
			}
		}
	}
</script>

<style scoped lang="scss">
    @import '../assets/css/global';
	header {
		position: fixed;
		width: 100%;
		height: px2rem(40px);
		top: 0;
		z-index: 98;
		background: #a5b0ff;
		font-size: px2rem(16px);
		@include box;
		.header_icon {
			width: px2rem(40px);
			height: px2rem(40px);
			line-height: px2rem(40px);
		}
		.header_title {
			color: #fff;
			line-height: px2rem(40px);
			@include flex;
		}
	}
</style>