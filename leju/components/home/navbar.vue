<template>
	<view class="btn-area">
		<view class="nav-bar left">
			<image src="../../static/img/icons/chat.png" mode="" @tap="infoClick"></image>
		</view>
		<view class="nav-bar center">					
				 <view class="recommend" :class="{active:isShow == 1}" @tap="isShow = 1">
				 
				 推荐
				</view>
					<view class="brand" :class="{active:isShow == 2}"  @tap="isShow = 2">
					品牌
				</view>
		</view>
		<view class="nav-bar right">
			<image src="../../static/img/icons/search.png" mode="" @tap="searchClick"></image>
			<image src="../../static/img/icons/cart.png" mode="" @tap="cartClick"></image>
		</view>	  
	</view>
</template>

<script>
	export default{
		// props: [isShow],
		props: {
			isShow: {
				type: Number,
				// default: null
			}
		},
		data(){
			return{}
		},
		created() {
		// console.log(1)
		// console.log(this.isShow)
		},
		methods:{
			infoClick(){
				// console.log('info')
				uni.showToast({
				    title: 'on client serve',
				    duration: 2000,
					// icon: 'none'
					image: '../../static/img/icons/chat.png'
				})
			},
			searchClick(){
				uni.navigateTo({
				    url: '/pages/home/search/search'
				})
			},
			cartClick(){
				uni.navigateTo({
				    url: '/pages/category/shoppinglist/shoppinglist'
				})
			},
		},
		
	}
</script>

<style lang="scss" scoped>
	.btn-area{
		display: flex;
		background-color: $uni-bg-color-grey;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		height: 45rpx;
		padding:  43rpx 0;
		// border-radius: 0 0 20rpx 20rpx;
		
		.nav-bar{
			flex: 1;	
		}
		.left{
			text-align: left;
			
			image{
				width: 42rpx;
				height: 42rpx;
				margin-left: 30rpx;
			}
		}
		.center{
			display: flex;
			justify-content: center;
			.active{
				background-color: red;
			}
				.recommend{
					text-align: center;
					font-size: $uni-font-size-lg;
					color: $uni-text-color-inverse;
					padding-right: 16rpx;
				}
				.brand{
					text-align: center;
					font-size: $uni-font-size-lg;
					color: $uni-text-color-inverse;
					padding-left: 16rpx;
				}
		}
		.right{
			text-align: right;
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 30rpx;
			}
		}
	}
</style>
