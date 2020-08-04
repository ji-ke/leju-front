<template>
	<view class="hotlist">
		<view class="title">
			<view class="kind">
				特色优选
			</view>
			<view class="more">
				更多
			</view>
		</view>
		<view class="card">
			<scroll-view class="scroll-view_H" scroll-x="true" show-scrollbar="false">
				<view id="demo1" class="scroll-view-item_H"  v-for="item in hotlist" :key="item.id">
					<view class="img">
						<image :src="item.bg_img" mode=""></image>
					</view>
					<view class="font">
						<text class="cname">{{item.cname}}</text>
						<text class="ename">{{item.ename}}</text>
						<view class="point">
							<text></text>
							<text></text>
							<text></text>
						</view>
						<text class="descr">{{item.descr}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import homeApi from '../../../network/home/home.js'
	export default{
		data(){
			return{
				hotlist: []
			}
		},
		created() {
			homeApi.hotlist()
			.then(res => {
				// console.log(res)
				this.hotlist = res.data.data.splice(1,2)
				// console.log(this.hotlist)
			})
			.catch(err => {
				console.log(err)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.hotlist{
		margin-top: 46rpx;
		.title{
			display: flex;
			justify-content: space-between;
			margin: 0 40rpx;
			margin-bottom: 39rpx;
			.kind{
				color: $uni-text-color;
				font-size: $uni-font-size-lg;
			}
			.more{
				color: $uni-text-color-grey;
				font-size: $uni-font-size-sm;
			}
			.more::after{
				content: '';
				display: inline-block;
				width: 30rpx;
				height: 30rpx;
				background: url(../../../static/img/icons/arr-r-1.png);
			}
		}
		
		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
			height: 260rpx;
			.scroll-view-item_H {
				display: inline-block;
				width: 590rpx;
				height: 260rpx;
				line-height: 260rpx;
				text-align: center;
				font-size: 36rpx;
				background-color: $uni-bg-color;
				border-radius: $uni-border-radius-lg;
				position: relative;
				margin: 0 20rpx;
				.img{
					position: absolute;
					left: 44rpx;
					bottom: 34rpx;
					width: 194rpx;
					height: 280rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.font{
					position: absolute;
					right: 0;
					top: 0;
					width: 316rpx;
					height: 260rpx;
					text-align: left;
					padding: 50rpx 0;
					display: flex;
					flex-direction: column;
					line-height: 1.8;
					.cname{
						font-size: $uni-font-size-base;
						color: $uni-text-color;
					}
					.ename{
						font-size: $uni-font-size-sm;
						color: $uni-text-color-grey;
					}
					.point{
						text{
							display: inline-block;
							width: 20rpx;
							height: 20rpx;
							border-radius: 50%;
							background-color: red;
							margin: 5rpx;
						}
					}
					.descr{
						font-size: $uni-font-size-base;
						color: $uni-text-color-grey;
					}
				}
			}
		}
	}
</style>
