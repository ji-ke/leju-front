<template>
	<view class="save">
		<view class="save-collect">
			收藏
		</view>
		<view class="save-card">
			<view class="card">
				<view class="pic">
					<image src="../../../static/img/icons/sofa.png" mode=""></image>
				</view>
				<view class="info">
					<view class="detail">
						<view class="sofa">
							头层牛皮沙发
						</view>
						<view class="num">
							编号
						</view>
						<view class="num">
							规格
						</view>
					</view>
					<view class="collect">
						<view class="">
							收藏
						</view>
						<view class="">
							$666
						</view>
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
.save{
	.save-collect{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.save-card{
		.card{
			width: 672rpx;
			height: 208rpx;
			background-color: $uni-bg-color;
			margin: 40rpx 40rpx 0;
			display: flex;
			.pic{
				margin: 54rpx 0 0 34rpx;
				image{
					width: 140rpx;
					height: 140rpx;
				}
			}
			.info{
				margin: 34rpx 37rpx 0 66rpx;
				flex: 1;
				.detail{
					.sofa{
						color: $uni-text-color;
						font-size: $uni-font-size-base;
					}
					.num{
						color: $uni-text-color-grey;
						font-size: $uni-font-size-sm;
					}
				}
				.collect{
					display: flex;
					justify-content: space-between;
					color: $uni-text-color;
					font-size: $uni-font-size-sm;
				}
			}
		}
	}
}
</style>
