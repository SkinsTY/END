<template>
	<div class="home slide-left-enter-active">
		<div class="banner">
			<swiper :options="swiperOption" class="swiper_box">
				<swiper-slide><img src="../assets/picture/1.jpg" alt=".."></swiper-slide>
				<swiper-slide><img src="../assets/picture/2.jpg" alt=".."></swiper-slide>
				<swiper-slide><img src="../assets/picture/3.jpg" alt=".."></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<v-nav></v-nav>

		<travel-list></travel-list>
	</div>
</template>


<script>
	import nav from '@/components/nav'
	import travelList from '@/components/travelList'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'

	export default {
		components: {
			swiper,
			swiperSlide,
			'v-nav': nav,
			travelList
		},
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					autoplay: 3000,
					paginationClickable: true,
					autoplayDisableOnInteraction: false,
					loop: true
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../assets/css/global";
	.home {
		.banner {
			.swiper_box {
				img {
					width: 100%;
				}
				.swiper-pagination-bullet-active {
					background: #fff;
				}
			}
		}
	}
	h2 {
		background: #fff;
		padding: px2rem(5px) 0;
		border-top: px2rem(1px) solid #ddd;
		border-bottom: px2rem(1px) solid #eee;
		@include box;
		p {
			font-style: px2rem(16px);
			text-align: left;
			padding-left: px2rem(8px);
			border-left: px2rem(3px) solid #a5b0ff;
			@include flex;
			span {
				margin-left: px2rem(5px);
				font-size: px2rem(12px);
				color: #999;
				vertical-align: 1px;
			}
		}
		a {
			display: block;
			width: px2rem(30px);
			line-height: px2rem(20px);
			padding-right: px2rem(8px);
			i {
				color: #666 !important;
			}
		}
	}
</style>