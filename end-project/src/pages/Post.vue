<template>
	<div class="my-summon slide-left-enter-active">
		<ul class="summon-info">
			<li>
				<div class="summon-l">行程</div>
				<div class="summon-r"><input type="text" value="" placeholder="" /></div>
			</li>
			<li>
				<div class="summon-l">时间</div>
				<div class="summon-r summon-time">
					<input type="text" value="" placeholder="开始时间" />
					<span>-</span>
					<input type="text" value="" placeholder="结束时间" />
				</div>
			</li>
			<li>
				<div class="summon-l">路线</div>
				<div class="summon-r"><input type="text" value="" placeholder="请输入城市路线" /></div>
			</li>
			<li>
				<div class="summon-l">人数</div>
				<div class="summon-r"><input type="text" value="" placeholder="请输入人数限制" /></div>
			</li>
			<li>
				<div class="summon-l">费用</div>
				<div class="summon-r">自费</div>
			</li>
		</ul>
		<div class="plan">
			<h2>
				<p>行程规划<span>TRP</span></p>
				<a><i class="icon"></i></a>
			</h2>
			<div class="plan-details">
				<div class="plan-days" v-for="(item,i) in days">
					<div class="days">
						<span>第{{i + 1}}天</span>
						<a href="javascript:void(0);" class="icon" @click="removeDay(item)">&#xe621;</a>
					</div>
					<div class="plan-detail">
						<textarea v-model="item.day" name="" id="" rows="5" placeholder="请输入......"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="summon-btn">
			<button class="btn add-day" @click="addDay">添加</button>
			<button class="btn post-btn">发布</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				days: [
					{
						day: null
					}
				]
			}
		},
		methods: {
			addDay() {
				this.days.push({
					day: null
				})
			},
			removeDay(item) {
				var i = this.days.indexOf(item);
				this.days.splice(i,1);
			}
		}
	}
</script>

<style lang="scss" scoped="">
	@import "../assets/css/global";

	.my-summon {
		margin-top: px2rem(8px);
		font-size: px2rem(14px);
		text-align: left;
		ul.summon-info {
			background: #fff;
			margin-bottom: px2rem(10px);
			@include shadow;
			li {
				border-top: px2rem(1px) solid #eee;
				padding: px2rem(8px);
				@include box;
				.summon-l {
					width: px2rem(40px);
				}
				.summon-r {
					@include flex;
					@include box-pack;
					input {
						width: 100%;
						text-align: right;
						font-size: px2rem(14px);
					}
				}
				.summon-time {
					input {
						width: px2rem(80px);
						text-align: center;
					}
				}
			}
		}
		.plan {
			background: #fff;
			margin-bottom: px2rem(16px);
			@include shadow;
			.plan-days {
				border-top: px2rem(1px) solid #eee;
				padding: px2rem(8px);
				@include box;
				.days {
					width: px2rem(50px);
					padding: px2rem(5px) 0;
					position: relative;
					.icon {
						position: absolute;
						bottom: px2rem(-5px);
						font-size: px2rem(24px);
						left: 0;
					}
				}
				.plan-detail {
					@include flex;
					textarea {
						display: block;
						padding: px2rem(5px);
						width: 100%;
						color: #666;
						border: px2rem(1px) solid #eee;
					}
				}
			}
			.plan-days:first-child {
				border-top: none;
			}
		}
		.summon-btn {
			margin-bottom: px2rem(8px);
			@include box;
			button {
				@include flex;
				color: #fff;
				@include shadow;
				@include radius;
			}
			.add-day {
				margin: 0 px2rem(4px) 0 px2rem(8px);
			}
			.post-btn {
				margin: 0 px2rem(8px) 0 px2rem(4px);
			}
		}
	}
</style>