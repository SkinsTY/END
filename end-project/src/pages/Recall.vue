<template>
	<div class="recall">
		<ul>
			<li>
				<div class="head-portrait">
					<img src="../assets/picture/24471799.jpg" alt="">
				</div>
				<section>
					<abbr>2017-04-01 12:00:00<span>END</span></abbr>
					<p>一路向南,找个人一起去看看山玩玩水，溜达溜达</p>
				</section>
				<a href="javascript:void(0)" class="icon">&#xe88d;</a>
			</li>
			<li>
				<div class="head-portrait">
					<img src="../assets/picture/24471799.jpg" alt="">
				</div>
				<section>
					<abbr>2017-04-01 12:00:00<span>Skins</span></abbr>
					<p>一路向南,找个人一起去看看山玩玩水，溜达溜达</p>
				</section>
				<a href="javascript:void(0)" class="icon disable">&#xe88d;</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped="">
	@import "../assets/css/global";

	.recall {
		text-align: left;
		font-size: px2rem(14px);
		background: #fff;
		@include shadow;
		li {
			border-top: px2rem(1px) solid #e8e8e8;
			padding: px2rem(8px);
			@include box;
			.head-portrait {
				@include box-align;
				width: px2rem(40px);
				margin-right: px2rem(8px);
				img {
					@include radius(50%);
				}
			}
			section {
				@include flex;
				abbr {
					font-size: px2rem(12px);
					color: #999;
					span {
						margin-left: px2rem(16px);
					}
				}
				span {
					color: #a5b0ff;
					font-size: px2rem(12px);
				}
			}
			a {
				width: px2rem(30px);
				font-size: px2rem(24px);
				@include box-pack;
				@include box-align;
			}
		}
		li:first-child {
			border-top: none;
		}
	}
</style>