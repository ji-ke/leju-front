<template>
	<view class="safe">
		<view class="safe-nav">
			账户与安全
		</view>
		<view class="safe-item">
			<view class="project" v-for="(item,index) in safelist" :key="index">
				<view class="" >
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
				safelist: [
					'Z号','个人资料','绑定手机号','微信账号','QQ账号','支付绑定','设置登录密码'
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.safe{
	.safe-nav{
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-grey;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.safe-item{
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
