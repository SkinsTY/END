<template>
	<div class="alert" :class="{show: showAlert}">
		<div class="text">{{alertMsg}}</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data () {
			return {

			}
		},
		computed: {
			...mapState({
				alertMsg: state => state.common.alertMsg
			}),
			showAlert () {
				return this.$store.getters.showAlert
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/global';
	.alert {
		position: fixed;
		z-index: 1000;
		width: px2rem(160px);
		padding: px2rem(5px) px2rem(10px);
		left: 50%;
		top: 42%;
		background: rgba(0,0,0,0.7);
		margin-left: px2rem(-80px);
		opacity: 0;
		@include transition;
		@include scale(0,0);
		@include radius;
		.text {
			color: #fff;
			line-height: px2rem(18px);	
			font-size: px2rem(12px);
		}
	}
	.show {
		opacity: 1;
		@include scale(1,1);
	}
</style>