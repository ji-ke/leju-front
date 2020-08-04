<template>
	<view class="profile">
		<view class="pro-top">
			<view class="avatar">
				<image src="../../static/img/icons/avatar.png" mode=""></image>
				<view class="text">
					<text>hi~</text>
					<text>你还没有登录呢</text>
				</view>
			</view>
			<view class="set">
				<image src="../../static/img/icons/setting.png" mode=""></image>
			</view>
		</view>
		<view class="pro-operate">
			<view class="register" @tap="regClick">
				注册
			</view>
			<view class="login" @tap="loginClick">
				登录
			</view>
		</view>
		<view class="pro-order">
			<view class="order">
				<view class="mine">
					我的订单
				</view>
				<view class="arrow">
					<image src="../../static/img/icons/arr-r-1.png" mode=""></image>
				</view>
			</view>
			<view class="pay">
				<view class="sell" v-for="(item,index) in orderlist" :key="index" @tap="sellClick(item)">
					<view class="icon">
						<image :src="item.iconsrc" mode=""></image>
					</view>
					<view class="text">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="pro-serve">
			<view class="serve" v-for="(item,index) in servelist" :key="index" @tap="itemClick(item)">
				<view class="icon">
					<image :src="item.iconsrc" mode=""></image>
				</view>
				<view class="text">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {checkLogin} from '@/utils/common.js'
	export default{
	data(){
			return{
				orderlist: [
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '待付款'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '待收货'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '已完成'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '售后'
					}
				],
				servelist: [
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '收藏'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '品牌'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '文章'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '地址'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '卡包'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '客服'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '安全'
					},
					{
						iconsrc: '../../static/img/icons/card.png',
						title: '关于'
					},
					{
						iconsrc: '',
						title: ''
					},
				]
			}
		},
	methods:{
		sellClick(item){
			let name = item.title
			// console.log(name)
			switch(name){
				case '待付款':
				uni.navigateTo({
				    url: '/pages/profile/orderlist/orderlist'
				})
				break;
				case '待收货':
				uni.navigateTo({
				    url: '/pages/profile/orderlist/orderlist'
				})
				break;
				case '已完成':
				uni.navigateTo({
				    url: '/pages/profile/orderlist/orderlist'
				})
				break;
				case '售后':
				uni.navigateTo({
				    url: '/pages/profile/aftersale/aftersale'
				})
				break;
				default: nothing;
			}
		},
		itemClick(val){
			let name = val.title
			// console.log(name)
			switch(name){
				case '收藏':
				uni.navigateTo({
				    url: '/pages/profile/save/save'
				})
				break;
				case '品牌':
				uni.navigateTo({
				    url: '/pages/profile/brand/brand'
				})
				break;
				case '文章':
				uni.navigateTo({
				    url: '/pages/profile/article/article'
				})
				break;
				case '卡包':
				uni.navigateTo({
				    url: '/pages/profile/package/package'
				})
				break;
				case '客服':
				uni.showToast({
				    title: 'nothing',
				    duration: 2000
				});
				break;
				case '安全':
				uni.navigateTo({
				    url: '/pages/profile/safe/safe'
				})
				break;
				case '关于':
				uni.navigateTo({
				    url: '/pages/profile/about/about'
				})
				break;
				case '地址':
				uni.navigateTo({
				    url: '/pages/profile/address/address'
				})
				break;
				default:
				nothing;
			}
		},
		regClick(){
			uni.navigateTo({
			    url: '/pages/home/register/register'
			})
		},
		loginClick(){
			uni.navigateTo({
			    url: '/pages/home/login/login'
			})
		}
	},
	onShow(){
		// console.log('lisa')
		checkLogin(() => {
			console.log('lisa')
		})
	}
	}
	
</script>

<style lang="scss" scoped>
	.profile{
		.pro-top{
			display: flex;
			margin: 0 40rpx;
			justify-content: space-between;
			.avatar{
				display: flex;
				align-items: center;
				image{
					width: 150rpx;
					height: 150rpx;
				}
				.text{
					margin-left: 32rpx;
					display: flex;
					flex-direction: column;
					text{
						color: $uni-text-color;
						font-size: $uni-font-size-base;
					}
				}
			}
			.set{
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
		.pro-operate{
			display: flex;
			// align-items: center;
			justify-content: center;
			margin-top: 52rpx;
			.register{
				// flex: 1;
				width: 182rpx;
				height: 76rpx;
				border: 1prx solid $uni-bg-color-grey;
				background-color: $uni-bg-color;
				font-size: $uni-font-size-lg;
				color: $uni-bg-color-grey;
				text-align: center;
				line-height: 76rpx;
				margin-right: 30rpx;
			}
			.login{
				// flex: 1;
				width: 182rpx;
				height: 76rpx;
				background-color: $uni-bg-color-grey;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-inverse;
				text-align: center;
				line-height: 76rpx;
				margin-left: 30rpx;
			}
		}
		.pro-order{
			width: 670rpx;
			height: 208rpx;
			background-color: $uni-bg-color;
			margin: 52rpx auto 0;
			overflow: hidden;
			.order{
				margin: 20rpx 56rpx 0;
				display: flex;
				justify-content: space-between;
				.mine{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-base;
				}
				.arrow{
					image{
						width: 16rpx;
						height: 26rpx;
					}
				}
				
			}
			.pay{
				display: flex;
				justify-content: space-around;
				align-items: center;
				.sell{
					text-align: center;
					margin-top: 41rpx;
					.icon{
						image{
							width: 40rpx;
							height: 40rpx;
						}
						
					}
					.text{
						color: $uni-text-color-grey;
						font-size: $uni-font-size-base;
					}
				}
			}
		}
		.pro-serve{
			width: 670rpx;
			background-color: $uni-bg-color;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			// margin-top: 40rpx;
			margin: 40rpx auto 0;
			.serve{
				text-align: center;
				width: 33%;
				height: 200rpx;
				// line-height: 200rpx;
				.icon{
					margin-top: 50rpx;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
				.text{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-base;
				}
			}
		}
	}
</style>
