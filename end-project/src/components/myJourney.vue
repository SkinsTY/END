<template>
	<div class="my-journeys slide-left-enter-active">
		<section>
			<p>2017-04-02</p>
			<span>已出行</span>
		</section>
		<router-link to="/" class="journeys">
			<div class="journeys-l">
				<img src="../assets/picture/8.jpg" alt="">
			</div>
			<div class="journeys-r">
				<h3>一路向西南一路向西南一路向西南一路向西南</h3>
				<div class="journeys-info">
					<p>召唤者：Skins</p>
					<span>两人行</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<style lang="scss" scoped="">
	@import "../assets/css/global";

	.my-journeys {
		border-top: px2rem(1px) solid #eee;
		margin-top: px2rem(8px);
		background: #fff;
		font-size: px2rem(14px);
		text-align: left;
		@include shadow;
		section {
			padding: px2rem(5px) px2rem(8px);
			border-bottom: px2rem(1px) solid #eee;
			color: #999;
			font-size: px2rem(12px);
			@include box;
			p {
				@include flex;
			}
			span {
				@include flex;
				@include box-pack;
			}
		}
		.journeys {
			padding: px2rem(8px);
			display: block;
			color: #666;
			@include box;
			.journeys-l {
				width: px2rem(80px);
				img {
					@include radius;
				}
			}
			.journeys-r {
				padding-left: px2rem(10px);
				@include flex;
				h3 {
					height: px2rem(42px);
					overflow: hidden;
				}
				.journeys-info {
					color: #999;
					font-size: px2rem(12px);
					@include box;
					p,span {
						@include flex;
					}
				}
			}
		}
	}
</style>