<template>
	<div class="convene slide-left-enter-active">
		<travel></travel>
		<travel></travel>
	</div>
</template>

<script>
	import travel from '@/components/travel'
	export default {
		components: {
			travel
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped="">
	@import "../assets/css/global";
	.convene {
		background: #fff;
		padding: 0 px2rem(8px);
		@include shadow;
	}
</style>