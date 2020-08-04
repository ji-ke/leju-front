<template>
	<view class="about">
		<view class="about-head">
			<view class="avatar">
				<image src="../../../static/img/icons/leju-logo.png" mode=""></image>
			</view>
			<view class="version">
				造物1.1.01
			</view>
		</view>
		<view class="about-item">
			<view class="project" v-for="(item,index) in aboutlist" :key="index">
				<view class="">
					{{item}}
				</view>
				<view class="pic">
					<image src="../../../static/img/icons/arr-r-1.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aboutlist: ['隐私声明','官方网站','版本更新','分享app']
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.about{
	.about-head{
		// width: ;
		height: 380rpx;
		background-color: $uni-bg-color-grey;
		position: relative;
		.avatar{
			position: absolute;
			left: 270rpx;
			bottom: 102rpx;
			image{
				width: 212rpx;
				height: 212rpx;
				border-radius: $uni-border-radius-circle;
			}
		}
		.version{
			position: absolute;
			left: 312rpx;
			bottom: 43rpx;
			color: $uni-text-color-inverse;
			font-size: $uni-font-size-base;
		}
	}
	.about-item{
		.project{
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				margin: 0 40rpx;
				height: 126rpx;
				align-items: center;
				border-bottom: 2rpx solid #ccc;
				display: flex;
				justify-content: space-between;
				.pic{
					image{
						width: 21rpx;
						height: 34rpx;
					}
				}
			}
		}
}
</style>
