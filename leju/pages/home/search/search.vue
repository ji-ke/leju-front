<template>
	<view class="search">
		<view class="search-bar">
			<input type="text" value="" placeholder="搜索" name="search"/>
			<view class="cancel">
				取消
			</view>
			
		</view>
		<view class="search-hot">
			<view class="hot">
				<uni-title title="">热门搜索</uni-title>
			</view>
			<view class="list">
				<view class="card" v-for="(item,index) in hotlist" :key="index">
					<image :src="item.iconsrc" mode=""></image>
					<view class="title">
						<text>
							{{item.title}}
						</text>
						
					</view>
				</view>

			</view>
		</view>
		<view class="search-record">
			<view class="record">
				<uni-title title="">搜索记录</uni-title>
			</view>
			<view class="list">
				<view class="title" v-for="(item, index) in recordlist" :key="index">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotlist: [
					{
					title: '椅子',
					iconsrc: "../../../static/img/icons/chair.png"
				}, 
				{
					title: '灯具',
					iconsrc: "../../../static/img/icons/light.png"
				}, 
				{
					title: '装饰品',
					iconsrc: "../../../static/img/icons/decoration.png"
				}, 
				{
					title: '柜子',
					iconsrc: "../../../static/img/icons/cabinet.png"
				}, 
				{
					title: '灯',
					iconsrc: "../../../static/img/icons/eyelight.png"
				}, 
				{
					title: '灯',
					iconsrc: "../../../static/img/icons/eyelight.png"
				}, 
				],
				recordlist: ['椅子', '木灯', '鞋架', '灯具','','']
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.search {
		
		.search-bar{
			display: flex;
			align-items: center;
			justify-content: space-around;
			input{
				width: 544rpx;
				height: 70rpx;
				border-radius: 70rpx;
				background-color: $uni-bg-color;
				margin-left: 72rpx;
			}
			.cancel{
				
				color: $uni-font-size-lg;
				color: $uni-text-color-grey;
			}
		}
		.search-hot{
			margin-top: 60rpx;
			.hot{
				color: $uni-font-size-lg;
				color: $uni-text-color;
				margin-left: 42rpx;
			}
			.list{
				margin-top: 48rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				.card{
					width: 192rpx;
					height: 192rpx;
					background-color: #ccc;
					border-radius: $uni-border-radius-base;
					margin-bottom: 47rpx;
					text-align: center;
					image{
						width: 60rpx;
						height: 60rpx;
						color: red;
						margin-top: 42rpx;
					}
					.title{
						color: $uni-text-color-grey;
						font-size: $uni-font-size-sm;
					}
				}
			}
			
		}
		.search-record{
			.record{
				color: $uni-font-size-lg;
				color: $uni-text-color;
				margin-left: 42rpx;
			}
			.list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				.title{
					width: 192rpx;
					height: 86rpx;
					background-color: $uni-bg-color;
					margin-top: 47rpx;
					text-align: center;
					line-height: 86rpx;
					color: $uni-text-color-grey;
					font-size: $uni-font-size-base;
				}
			}
		}
	}
</style>
