<template>
	<view class="brandlist">
		<view class="title">
			<view class="kind">
				品类推荐
			</view>
			<view class="more">
				更多
			</view>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" show-scrollbar="false">
				<view id="demo1" class="scroll-view-item_H"  v-for="item in brandlist" :key="item.id">
					<view class="img">
						<image :src="item.coverImg" mode=""></image>
					</view>
					<view class="font">
						<text class="cname">{{item.cname}}</text>
						<text class="descr">{{item.descr}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		props: ["brandlist"],
		data(){
			return{
				
			}
		},	
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.brandlist{
		// height: 750rpx;
		margin-top: 46rpx;
		.title{
			display: flex;
			justify-content: space-between;
			margin: 0 40rpx;
			margin-bottom: 39rpx;
			.kind{
				color: $uni-text-color;
				font-size: 32rpx;
			}
			.more{
				color: $uni-text-color-grey;
				font-size: 24rpx;
			}
			.more::after{
				content: '';
				display: inline-block;
				width: 30rpx;
				height: 30rpx;
				background: url(../../../static/img/icons/arr-r-1.png);
				color: red;
				// background-color: red;
			}
		}
		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
			height: 350rpx;
			.scroll-view-item_H {
				display: inline-block;
				// width: 100%;
				width: 208rpx;
				height: 140rpx;
				line-height: 140rpx;
				margin: 0 20rpx;
				font-size: $uni-font-size-lg;
					background-color: $uni-text-color-inverse;
					border-radius: $uni-border-radius-lg;
				.img{
					width: 140rpx;
					height: 130rpx;
					margin: 0 auto;
					image{
						margin-top: 52rpx;
						width: 100%;
						height: 100%;
					}
				}
				.font{
					width: 208rpx;
					height: 150rpx;
					margin-top: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text-align: center;
					line-height: 1.8;
					.cname{
						color: $uni-text-color;
						font-size: $uni-font-size-base;
					}
					.descr{
						color: $uni-text-color-grey;
						// color: red;
						font-size: $uni-font-size-sm;
					}
				}
			}
		}	
	}
</style>
