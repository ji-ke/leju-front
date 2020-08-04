<template>
	<view class="aftersale">
		<view class="sale-apply">
			申请售后
		</view>
		<view class="sale-serve">
			<view class="serve">
				服务类型
			</view>
			<view class="model">
				<view class="">
					换货
				</view>
				<view class="">
					退货
				</view>
				<view class="">
					仅退款
				</view>
			</view>
		</view>
		<view class="sale-card">
			<view class="card">
				<view class="number">
					<view class="order">
						取消订单
					</view>
					<view class="pay">
						付款
					</view>
				</view>
				<view class="content">
					<view class="pic">
						<image src="../../../static/img/icons/sofa.png" mode=""></image>
					</view>
					<view class="detail">
						<view class="info">
							<view class="left">
								<view class="sofa">
									头层牛皮沙发
								</view>
								<view class="spec">
									编号
								</view>
								<view class="spec">
									规格
								</view>
							</view>
							<view class="right">
								<view class="">
									x666
								</view>
								<view class="">
									x1
								</view>
								
							</view>
						</view>		
					</view>
				</view>
				<view class="total">
					合计: 666
				</view>
			</view>
					
		</view>
		<view class="sale-describe">
			<view class="describe">
				问题描述
			</view>
			<view class="area">
				请输入您的评价信息
			</view>
		</view>
		<view class="sale-submit">
			提交
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
.aftersale{
	.sale-apply{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.sale-serve{
		margin: 20rpx 42rpx 0;
		.serve{
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			
		}
		.model{
			display: flex;
			margin-top: 19rpx;
			view{
				margin-right: 32rpx;
				width: 124rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				border: 2rpx solid $uni-bg-color-grey;
				color: $uni-text-color;
				font-size: $uni-font-size-base;
			}
		}
	}
	.sale-card{
		.card{
			width: 672rpx;
			height: 334rpx;
			background-color: $uni-bg-color;
			margin: 40rpx auto;
			overflow: hidden;
			.number{
				margin: 22rpx 36rpx 0;
				display: flex;
				justify-content: space-between;
				font-size: $uni-font-size-base;
				color: $uni-text-color;
			}
			.content{
				display: flex;
				margin: 29rpx 36rpx 0;
				// justify-content: space-between;
				.pic{
					image{
						width: 162rpx;
						height: 162rpx;
					}
				}
				.detail{
					margin-left: 28rpx;
					flex: 1;
					.info{
						display: flex;
						justify-content: space-between;
						.left{
							.sofa{
								font-size: $uni-font-size-base;
								color: $uni-text-color;
							}
							.spec{
								font-size: $uni-font-size-sm;
								color: $uni-text-color-grey;
							}
						}
						.right{
							font-size: $uni-font-size-sm;
							color: $uni-text-color-grey;
						}
					}
					
				}
			}
		.total{
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			text-align: right;
			margin-right: 37rpx;
		}
		}
			
	}
	.sale-describe{
		.describe{
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			font-weight: 700;
			margin: 32rpx 0 0 42rpx;
		}
		.area{
			padding: 24rpx 36rpx;
			color: $uni-text-color-grey;
			font-size: $uni-font-size-sm;
			width: 672rpx;
			height: 334rpx;
			background-color: $uni-bg-color;
			margin: 31rpx auto 0;
		}
	}
	.sale-submit{
		width: 536rpx;
		height: 94rpx;
		background-color: $uni-bg-color-grey;
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-lg;
		text-align: center;
		line-height: 94rpx;
		margin: 232rpx auto 0;
	}
}
</style>
