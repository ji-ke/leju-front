<template>
	<view class="article">
		<view class="article-par">
			文章
		</view>
		<view class="article-card">
			<view class="card">
				<view class="pic">
					<image src="../../../static/img/icons/sofa.png" mode=""></image>
				</view>
				<view class="text">
					<view class="light">
						连花掉灯
					</view>
					<view class="save">
						连花掉灯
					</view>
					<view class="info">
						连花掉灯
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
.article{
	.article-par{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.article-card{
		.card{
			width: 316rpx;
			height: 416rpx;
			background-color: $uni-bg-color;
			// display: flex;
			.pic{
				width: 316rpx;
				height: 238rpx;
				image{
					width: 316rpx;
					height: 238rpx;
				}
			}
			.text{
				margin-left: 36rpx;
				.light{
					margin-top: 28rpx;
					color: $uni-text-color;
					font-size: $uni-font-size-lg;
				}
				.save{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
				}
				.info{
					margin-top: 30rpx;
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
				}
			}
		}
	}
}
</style>
