<template>
	<view class="brand">
		<view class="brand-nav">
			品牌
		</view>
		<view class="brand-card">
			<view class="card">
				<view class="pic">
					<image src="../../../static/img/icons/sofa.png" mode=""></image>
				</view>
				<view class="info">
					<view class="series">
						极简系列
					</view>
					<view class="fans">
						粉丝: 666
					</view>
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
.brand{
	.brand-nav{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.brand-card{
		.card{
			width: 672rpx;
			height: 208rpx;
			background-color: $uni-bg-color;
			margin: 40rpx auto 0;
			display: flex;
			align-items: center;
			.pic{
				margin: 0 66rpx 0 54rpx;
				image{
					width: 140rpx;
					height: 140rpx;
				}
			}
			.info{
				flex: 1;
				.series{
					color: $uni-text-color;
					font-size: $uni-font-size-lg;
				}
				.fans{
					margin-top: 15rpx;
					color: $uni-text-color-grey;
					font-size: $uni-font-size-base;
				}
			}
		}
	}
}
</style>
