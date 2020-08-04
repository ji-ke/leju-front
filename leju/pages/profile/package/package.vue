<template>
	<view class="package">
		<view class="package-nav">
			卡包
		</view>
		<view class="package-card">
			<view class="card">
				<view class="pic">
					<image src="../../../static/img/icons/sofa.png" mode=""></image>
				</view>
				<view class="discount">
					<view class="hundred">
						50满500减
					</view>
					<view class="shop">
						店铺优惠券
					</view>
					<view class="date">
						2020-2020-2020
					</view>
				</view>
				<view class="touse">
					去使用
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.package{
	.package-nav{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.package-card{
		.card{
			width: 672rpx;
			height: 208rpx;
			background-color: $uni-bg-color;
			margin: 40rpx auto 0;
			display: flex;
			align-items: center;
			.pic{
				margin: 36rpx 46rpx 0 56rpx;
				image{
					width: 136rpx;
					height: 136rpx;
				}
			}
			.discount{
				flex: 1;
				// height: 208rpx;
				// line-height: 208rpx;
				.hundred{
					color: $uni-text-color;
					font-size: $uni-font-size-base;
				}
				.shop,.date{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
				}
				// .date{
					
				// }
			}
			.touse{
				width: 156rpx;
				height: 208rpx;
				text-align: center;
				line-height: 208rpx;
				color: $uni-text-color;
				font-size: $uni-font-size-lg;
				font-weight: 700;
				border-left: 2rpx dashed #ccc;
				position: relative;
			}
			.touse::before{
				content: '';
				position: absolute;
				left: -13rpx;
				top: -13rpx;
				display: inline-block;
				width: 26rpx;
				height: 26rpx;
				border-radius: 50%;
				background-color: #F1ECE7;
			}
			.touse::after{
				content: '';
				position: absolute;
				left: -13rpx;
				bottom: -13rpx;
				display: inline-block;
				width: 26rpx;
				height: 26rpx;
				border-radius: 50%;
				background-color: #F1ECE7;
			}
		}
	}
}
</style>
