<template>
	<view class="brand">
		<!-- <navbar></navbar> -->
		<view class="brand-card" v-for="item in brandlist" :key="item.id">
			<view class="img">
				<image :src="item.coverImg" mode=""></image>
			</view>
			<view class="foot">
				<view class="avator">
					<view class="font">
						<text></text>
					</view>
					<view class="last">
						<text></text>
						<text></text>
						<text></text>
					</view>
				</view>
				<view class="title">
					<text class="cname">{{item.cname}}</text>
					<text class="descr">{{item.descr}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	// import navbar from '@/components/home/navbar.vue'
	import homeApi from '@/network/home/home.js'
	export default{
		components:{
			// navbar
		},
		data(){
			return{
				brandlist: []
			}
		},
		created() {
		 homeApi.brandList()
		 .then(res => {
			 this.brandlist = res.data.data
			 // console.log(this.brandlist)
		 })
		}
	}
	
</script>

<style lang="scss" scoped>
	.brand{
		.brand-card{
			width: 670rpx;
			height: 612rpx;
			margin: 56rpx auto;
			border-radius: $uni-border-radius-lg;
			.img{
				width: 100%;
				height: 426rpx;
				image{
					width: 100%;
					height: 426rpx;
				}
			}
			.foot{
				width: 100%;
				height: 186rpx;
				background-color: $uni-bg-color;
				position: relative;
				.avator{
					.font{
						position: absolute;
						left: 60rpx;
						top: -18rpx;
						text{
							display: inline-block;
							width: 36rpx;
							height: 36rpx;
							background-color: red;
							border-radius: $uni-border-radius-circle;
						}
					}
					.last{
						position: absolute;
						right: 60rpx;
						top: -30rpx;
						text{
							display: inline-block;
							width: 80rpx;
							height: 80rpx;
							background-color: red;
							border-radius: $uni-border-radius-circle;
						}
					}
				}
				.title{
					text-align: left;
					padding: 50rpx ;
					display: flex;
					flex-direction: column;
					line-height: 1.2;
					// line-height: 186rpx;
					.cname{
						color: $uni-text-color;
						font-size: $uni-font-size-lg;
					}
					.descr{
						color: $uni-text-color-grey;
						font-size: $uni-font-size-sm;
					}
				}
			}
			
		}
	}
</style>
