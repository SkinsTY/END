<template>
	<div class="detail slide-left-enter-active">
		<div class="detail-img">
			<img src="../assets/picture/6.jpg" alt="">
		</div>
		<div class="detail-title">
			<p>找个时间，选个地方，说走就走</p>
			<section>
				<span>Skins</span>
				<p class="count-down">
					<span>1</span>天<span>10</span>时<span>20</span>分<span>5</span>秒
				</p>
			</section>
		</div>
		<ul class="detail-info">
			<li>
				<div class="info-title">时间：</div>
				<div class="info-cont">2017-04-02 — 2017-04-10</div>
			</li>
			<li>
				<div class="info-title">线路：</div>
				<div class="info-cont">长沙-张家界-神秘地</div>
			</li>
			<li>
				<div class="info-title">队伍：</div>
				<div class="info-cont">限2人</div>
			</li>
			<li>
				<div class="info-title">费用：</div>
				<div class="info-cont">自费</div>
			</li>
		</ul>
		<h2><p>队员<span>5人</span></p></h2>
		<ul class="partner">
			<li>
				<img src="../assets/picture/24471799.jpg" alt="">
				<span>C_TY</span>
			</li>
			<li>
				<img src="../assets/picture/24471799.jpg" alt="">
				<span>C_TY</span>
			</li>
		</ul>
		<div class="detail-footer">
			<a href="" class="btn">加入队伍</a>
		</div>
	</div>
</template>

<style lang="scss" scoped="">
	@import "../assets/css/global";
	.detail {
		text-align: left;
		.detail-title {
			background: #fff;
			padding: px2rem(5px) px2rem(8px);
			margin-bottom: px2rem(10px);
			line-height: 1.5;
			@include shadow;
			p {
				font-size: px2rem(14px);
			}
			section {
				span,p {
					font-size: px2rem(14px);
					display: inline-block;
				}
				>span {
					margin-right: px2rem(4px);
					border-right: px2rem(1px) solid #ddd;
					padding-right: px2rem(10px);
				}
				p {
					color: #999;
					span {
						padding: 0 px2rem(4px);
					}
				}
			}
		}
		.detail-info {
			background: #fff;
			border-top: px2rem(1px) solid #ddd;
			margin-bottom: px2rem(10px);
			@include shadow;
			li {
				font-size: px2rem(14px);
				padding: px2rem(3px) px2rem(10px);
				border-top: px2rem(1px) solid #eee;
				@include box;
			}
			li:first-child {
				border-top: none;
			}
		}
		.partner {
			background: #fff;
			@include box;
			@include shadow;
			li {
				width: px2rem(70px);
				padding: px2rem(10px);
				text-align: center;
				font-size: px2rem(12px);
				img {
					@include radius(50%);
				}
			}
		}
		.detail-footer {
			position: fixed;
			background: #fff;
			bottom: 0;
			width: 100%;
			border-top: px2rem(1px) solid #ddd;
			padding: px2rem(5px) px2rem(10px);
			a.btn {
				color: #fff;
				text-align: center;
			}
		}
	}
</style>