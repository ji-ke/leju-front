<template>
	<view class="orderlist">
		<!-- <view class="order-nav">
			<view class="order">
				乐居
			</view>
		</view> -->
		<view class="payment">
			<view class="wait">
				等待支付
			</view>
			<view class="detail">
				<view class="tel">
					tel
				</view>
				<view class="address">
					收货地址:
				</view>
			</view>
		</view>
		<view class="order-card">
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

						<view class="total">
							合计: 666
						</view>
					</view>
				</view>
				<view class="core">
					<view class="cancel">
						取消订单
					</view>
					<view class="sure">
						付款
					</view>
				</view>
			</view>

		</view>
		<!-- <view class="" v-show="orderShow == 1">
			待付款
		</view>
		<view class="" v-show="orderShow == 2">
			已付款
		</view>
		<view class="" v-show="orderShow == 3">
			已完成
		</view> -->
	</view>
</template>

<script>
	import orderApi from '../../../network/order/order.js';
	export default {
		name: 'OrderDetail',
		data() {
			return {
				// orderShow: 0,
				// orderList: ['全部', '待付款', '已付款', '已完成'],
				// totalList: []
			}
		},
		onLoad() {
			orderApi.orderList()
				.then(res => {
					console.log(1)
					console.log(res)
					// this.totalList = res.data.data.list[0].subList
					console.log(this.totalList)
				})
		},
		methods: {

		},
		computed:{
			orderCom(){
			return	this.$store.state.order.tempOrder
			}
		}
	}
</script>

<style lang="scss" scoped>
	.orderlist {
		.order-nav {
			.order {
				font-size: $uni-font-size-lg;
				color: $uni-text-color-inverse;
				background-color: $uni-bg-color-grey;
				text-align: center;
			}
		}

		.payment {

			.wait {
				font-size: 42rpx;
				color: #000;
				font-weight: 700;
				margin: 40rpx;
			}
			.detail{
				margin: 40rpx;
				color: #ccc;
				font-size: 30rpx;
			}
		}

		.order-tab {
			height: 98rpx;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			font-size: $uni-font-size-lg;
			color: $uni-text-color-inverse;
			background-color: $uni-bg-color-grey;

			.active {
				border-bottom: 4rpx solid $uni-bg-color;
			}
		}

		.order-card {
			.card {
				width: 672rpx;
				height: 334rpx;
				background-color: $uni-bg-color;
				margin: 40rpx auto;
				overflow: hidden;

				.number {
					margin: 22rpx 36rpx 0;
					display: flex;
					justify-content: space-between;
					font-size: $uni-font-size-base;
					color: $uni-text-color;
				}

				.content {
					display: flex;
					margin: 29rpx 36rpx 0;

					// justify-content: space-between;
					.pic {
						image {
							width: 162rpx;
							height: 162rpx;
						}
					}

					.detail {
						margin-left: 28rpx;
						flex: 1;

						.info {
							display: flex;
							justify-content: space-between;

							.left {
								.sofa {
									font-size: $uni-font-size-base;
									color: $uni-text-color;
								}

								.spec {
									font-size: $uni-font-size-sm;
									color: $uni-text-color-grey;
								}
							}

							.right {
								font-size: $uni-font-size-sm;
								color: $uni-text-color-grey;
							}
						}

						.total {
							font-size: $uni-font-size-base;
							color: $uni-text-color-grey;
							text-align: right;
						}
					}
				}

				.core {
					display: flex;
					margin: 17rpx 36rpx 0;
					justify-content: flex-end;

					.cancel,
					.sure {
						width: 130rpx;
						height: 50rpx;
						border: 1px solid #ccc;
						color: $uni-text-color-grey;
						font-size: $uni-font-size-base;
						line-height: 50rpx;
						text-align: center;
					}

					.sure {
						margin-left: 32rpx;
					}

				}
			}

		}
	}
</style>
