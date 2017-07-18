<template>
	<div class="tranvel-list">
		<h2>
			<p>热门<span>HOT</span></p>
			<router-link to="/convene">
				<i class="icon">&#xe8c4;</i>
			</router-link>
		</h2>
		<div class="tranvel-lists">
			<travel></travel>
		</div>
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
	.tranvel-list {
		margin-bottom: px2rem(8px);
		background: #fff;
		@include shadow;
		.tranvel-lists {
			padding: 0 px2rem(8px);
		}
	}
</style>