<template>
	<view class="address">
		<view class="address-nav">
			收货地址
		</view>
		<view class="address-card">
			<view class="card">
				<view class="pic">
					<image src="../../../static/img/icons/sofa.png" mode=""></image>
				</view>
				<view class="content">
					<view class="name">
						lisa
					</view>
					<view class="address">
						地址:绿地新都会
					</view>
					<view class="connect">
						联系方式:666666
					</view>
				</view>
				<view class="edit">
					编辑
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
.address{
	.address-nav{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.address-card{
		.card{
			width: 672rpx;
			height: 240rpx;
			background-color: $uni-bg-color;
			margin: 40rpx auto 0;
			display: flex;
			align-items: center;
			.pic{
				margin: 0 20rpx 0 30rpx;
				image{
					width: 82rpx;
					height: 82rpx;
					border-radius: $uni-border-radius-circle;
				}
			}
			.content{
				flex: 1;
				.name{
					color: $uni-text-color;
					font-size: $uni-img-size-base;
				}
				.address,.connect{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
				}
				// .connect{
				// 	color: $uni-text-color;
				// 	font-size: $uni-img-size-base;
				// }
			}
			.edit{
				color: $uni-text-color-grey;
				font-size: $uni-font-size-sm;
				margin-right: 50rpx;
			}
		}
	}
}
</style>
