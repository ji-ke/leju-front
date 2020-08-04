<template>
	<view class="detail">
		<!-- <image :src="detailList.imgs" mode=""></image> -->
		<view class="banner">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item  v-for="item in detailList.imgs" :key="item.id">
					<cover-image class="controls-play img"  :src="item"></cover-image>
					
				</swiper-item>
			</swiper>
		</view>
		
		<view class="describe">
			<!-- <view class="descr">
				{{detailList[0].descr}}
			</view>
			<view class="gname">
				{{detailList[0].gname}}
			</view>
			<view class="price_now">
				{{detailList[0].price_now}}
			</view> -->
		</view>
		<view class="para">
			<view class="">
				<view class="title">
					{{detailList.detail_title}}
				</view>
				<view class="text">
					{{detailList.detail_desc}}
				</view>
				<view class="title">
					¥{{detailList.price_now }}
				</view>
			</view>

			<view class="">

				<view class="text">
					<!-- {{detailList.content}} -->
					<rich-text :nodes="detailList.content"></rich-text>
				</view>
				<view class="title">
					<!-- {{detailList.cover_img}} -->
					<!-- <cover-image class="controls-play img" :src="detailList.cover_img"></cover-image> -->
				</view>
			</view>
		</view>
		<view class="foot">
			<view class="foot-customer">
				<image class="customer" src="../../../static/img/icons/kf.png" mode=""></image>
				<view class="serve">
					客服
				</view>
			</view>
			<view class="cart" @tap="addCart">
				<image class="" src="../../../static/img/icons/cart2.png" mode=""></image>
			</view>
			<view class="purchase" @tap="purchase">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	// import {productlist} from '../../../network/category/category.js'
	import commodityApi from '../../../network/commodity/commodity.js'
	export default {
		name: 'CategoryDetail',
		data() {
			return {
				detailList: {
					imgs: []
				},
				productId: '',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			getDeatilList() {
				let data = {
					productId: this.productId
				}
				commodityApi.productDetail(data).then(res => {
					this.detailList = res.data.data
					this.detailList.imgs = res.data.data.imgs.split(',');
				})
			},
			addCart(){
				uni.navigateTo({
					// url: '../shoppinglist/shoppinglist?productId=' + this.productId
					url: '../shopping/shopping?productId=' + this.productId
				})
			},
			purchase(){
				uni.navigateTo({
					url: '../shopping/shopping?productId=' + this.productId
				})
			}
		},
		onLoad(option) {
			// console.log(option);
			this.productId = option.productId;
			// this.getDetail();
		},
		onShow() {
			this.getDeatilList()
			console.log(this.detailList)
		},
		created() {
			// commodityApi.detail()
			// .then(res => {

			// })

		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		image {
			width: 100%;
		}

		.describe {
			margin: 0 70rpx;
			position: relative;

			.descr {
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				font-weight: 700;
			}

			.gname {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
			}

			.price_now {
				margin-top: 23rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
			}
		}

		.para {
			margin: 0 70rpx;
			margin-top: 57rpx;

			.title {
				margin-top: 24rpx;
				color: $uni-text-color;
				font-size: $uni-font-size-lg;
			}

			.text {
				color: $uni-text-color-grey;
				font-size: $uni-font-size-base;
			}

			.chair {
				width: 436rpx;
				height: 326rpx;
				margin-left: 50rpx;
			}
		}

		.foot {
			// margin: 20rpx 70rpx;
			display: flex;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: #fff;
			image {
				width: 48rpx;
				height: 48rpx;
			}

			.foot-customer {
				flex: 1;

				.serve {
					font-size: $uni-font-size-sm;
					color: $uni-text-color;
				}
			}

			.cart {
				width: 128rpx;
				height: 80rpx;
				background-color: #ccc;
				text-align: center;
				line-height: 80rpx;
				margin-right: 28rpx;
			}

			.purchase {
				width: 238rpx;
				height: 80rpx;
				background-color: $uni-bg-color-grey;
				color: $uni-text-color-inverse;
				font-size: $uni-font-size-lg;
				text-align: center;
				line-height: 80rpx;
			}
		}
	}
</style>
