<template>
	<div class="travel">
		<router-link to="/detail">
			<div class="travel-info">
				<img src="../assets/picture/5.jpg" alt="">
				<span>组队中Q1</span>
				<p>选个地方，抽个时间，说走就走！</p>
			</div>
			<div class="travel-detail">
				<div class="detail-l">
					<span>发起人：Skins</span>
					<span>出发日期：2017-04-02</span>
				</div>
				<div class="detail-r">
					<span>已有<i>1</i>人加入队伍</span>
					<span>队伍人数：<i>5</i>人</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped="">
	@import '../assets/css/global';
	.travel {
		padding: px2rem(8px) 0;
		border-top: px2rem(1px) solid #eee;
		a {
			color: #666;
			font-size: px2rem(12px);
			line-height: 1.5;
			display: block;
			text-align: left;
			.travel-info {
				margin-bottom: px2rem(5px);
				position: relative;
				span {
					position: absolute;
					display: block;
					top: px2rem(5px);
					line-height: px2rem(24px);
					padding-left: px2rem(10px);
					padding-right: px2rem(5px);
					color: #fff;
					background: #a5b0ff;
				}
				span:before {
					content: "";
					display: block;
					position: absolute;
					width: 0;
					height: 0;
					border-left: px2rem(12px) solid #a5b0ff;
					border-top: px2rem(12px) solid transparent;
					border-bottom: px2rem(12px) solid transparent;
					right: px2rem(-12px);
					top: 0;
				}
				p {
					position: absolute;
					padding: px2rem(5px) px2rem(10px);
					background: rgba(0,0,0,0.7);
					width: 100%;
					bottom: 0;
					color: #fff;
					font-size: px2rem(14px);
				}
			}
			.travel-detail {
				@include box;
				.detail-l,
				.detail-r {
					@include flex;
					span {
						display: block;
					}
				}
				.detail-r {
					text-align: right;
					i {
						color: #a5b0ff;
					}
				}
			}
		}
	}
	.travel:first-child {
		border-top: none;
	}
</style>