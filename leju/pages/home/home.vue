<template>
	<view class="home">
		<!-- <wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab> -->
		<view class="btn-area" :backgroundColor="headColor">
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
		<view class="recommend" v-show="isShow == 1">
			<!-- 轮播图 -->
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="item in list" :key="item.id">
								<!-- <view class="swiper-item" >{{item.img_url}}</view> -->
								<image :src="item.img_url" mode="widthFix"></image>
							</swiper-item>
							
						</swiper>
					</view>
				</view>
			</view>
			<!-- 品类推荐 -->
			<!-- <view class="home-kind"> -->
			<brandlist :brandlist="brandlist"></brandlist>
			<!-- </view> -->
			<!-- 特色优选 -->
			<hotlist></hotlist>
		</view>
		 
		 <view class="brand" v-show="isShow == 2">
		 	<brand></brand>
		 </view>
		
	</view>
</template>

<script>
	import homeApi from '../../network/home/home.js'
	// import navbar from '@/components/home/navbar.vue'
	import brandlist from './components/brandlist.vue'
	import hotlist from './components/hotlist.vue'
	import brand from './brand/brand.vue'
	export default{
		data(){
			return{
				isShow: 1,
				list: [],
				brandlist: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		},
		components: {  brandlist ,hotlist,brand},
		// computed: {
		// 	bgcolor() {
		// 		return this.isShow == 1 ? 'transparent' : '$uni-bg-color-grey'
		// 	}
		// },
		computed: {
			headColor() {
				return this.isShow == 1 ? 'transparent' : '#354E44';
			}
			// console.log(1)
			// console.log(headColor)
		},
		methods: {
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
			 getList(){
				 let data = {
				 	use: '0'
				 }
				 homeApi.banner(data)
				 .then(res => {
				 	this.list = res.data.data
				 })
			 },
			 getBrandlist(){ 
				 homeApi.brandList()
				 .then(res => {
				 	this.brandlist = res.data.data
				 })
			 }
		},
		onLoad() {
			this.getList()
			this.getBrandlist()
		}
	}
	
</script>

<style lang="scss" scoped>
	.uni-padding-wrap{
	uni-image{
		width: 100%;
		// height: 400rpx;
	}
	}
	
	
</style>

<style lang="scss" scoped>
	.btn-area{
		position: fixed;
		top: 88rpx;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
		background-color: transparent;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		height: 45rpx;
		width: 100%;
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
				// background-color: red;
				border-bottom: 4rpx solid $uni-bg-color;
			}
				.recommend{
					text-align: center;
					font-size: $uni-font-size-lg;
					color: $uni-text-color-inverse;
					padding: 16rpx;
				}
				.brand{
					text-align: center;
					font-size: $uni-font-size-lg;
					color: $uni-text-color-inverse;
					padding: 16rpx;
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
