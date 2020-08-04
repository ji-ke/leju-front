<template>
	<view class="find">
		<view class="find-head">
			<view class="article" @tap="titleShow = 1">
				精选文章
			</view>
			<view class="recommend" @tap="titleShow = 2">
				好物推荐
			</view>
		</view>
		<view class="article-tab" v-show="titleShow == 1">
			<view class="find-article">
				<view class="item"  :class="`${index == itemShow ? 'active' : ''}`" v-for="(item,index) in navlist" :key="index" @tap="itemClick(index)">
					<image :src="item.imgsrc" mode=""></image>
				</view>
			</view>
			<view class="find-product" v-show="itemShow == 0">
				<view class="item" v-for="(item,index) in findlist" :key="index">
					<view class="img">
						<image :src="item.bg_img" mode=""></image>
						<view class="cname">
							{{item.cname}}
						</view>
						<view class="descr">
							{{item.descr}}
						</view>
					</view>
					
					<view class="foot">
						<view class="sight">
							<image src="../../static/img/icons/view.png" mode=""></image>
							
							<view class="save">
								666
							</view>
						</view>
						<view class="share">
							<image class="zan" src="../../static/img/icons/zan.png" mode=""></image>
							<image src="../../static/img/icons/share.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="" v-show="itemShow == 1">
				椅子
			</view>	
			<view class="" v-show="itemShow == 2">
				柜子
			</view>	
			<view class="" v-show="itemShow == 3">
				灯具
			</view>	
		</view>
		<view class="recommend-tab" v-show="titleShow == 2">
			好物推荐
		</view>
	</view>
</template>

<script>
	import findApi from '../../network/find/find.js'
	export default{
		data(){
			return{
				titleShow: 1,
				itemShow: 0,
				currentIndex: 0,
				findlist: [],
				navlist: [
					{
					imgsrc: '../../static/img/icons/decoration.png'	
					},
					{
					imgsrc: '../../static/img/icons/decoration.png'	
					},
					{
					imgsrc: '../../static/img/icons/decoration.png'	
					},
					{
					imgsrc: '../../static/img/icons/decoration.png'	
					},
					],
			}
				
		},
		methods:{
			itemClick(val){
				switch (val){
					case 0:
					this.itemShow = 0;
					// console.log(this.itemShow)
						break;
					case 1:
					this.itemShow = 1;
					// console.log(this.itemShow)
						break;
					case 2:
					this.itemShow = 2;
					// console.log(this.itemShow)
						break;
					case 3:
					this.itemShow = 3;
					// console.log(this.itemShow)
						break;
					default:
						break;
				}
			}
		},
		created() {
			findApi.seriesAll()
			.then(res => {
				this.findlist = res.data.data.splice(1,2)	
				// console.log(this.findlist)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.find{
		
		.find-head{
			height: 100rpx;
			display: flex;
			justify-content: center;
			background-color: $uni-bg-color-grey;
			color: $uni-text-color-inverse;
			.article{
				margin-right: 24rpx;
			}
			.recommend{
				margin-left: 23rpx;
			}
		}
		.find-article{
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			
			.item{
				text-align: center;
				width: 84rpx;
				height: 84rpx;
				border-radius: $uni-border-radius-circle;
				background-color: $uni-bg-color;
				line-height: 84rpx;
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.active{
				background-color: $uni-bg-color-grey;
				z-index: 999;
			}
		}
		.find-product{
			.item{
				width: 674rpx;
				height: 482rpx;
				margin: 46rpx auto 56rpx;
				background-color: $uni-bg-color;
				border-radius: $uni-border-radius-lg;
				position: relative;
				.img{
					image{
						width: 100%;
						height: 382rpx;
					}
					.cname{
						position: absolute;
						left: 20rpx;
						top: 244rpx;
						font-size: 48rpx;
						color: $uni-text-color-inverse;
						
					}
					.descr{
						position: absolute;
						left: 20rpx;
						top: 316rpx;
						font-size: $uni-font-size-base;
						color: $uni-text-color-inverse;
						
					}
				}
				
				.foot{
					height: 100rpx;
					display: flex;
					margin: 0 50rpx;
					justify-content: space-between;
					align-items: center;
					
					.sight{
						display: flex;
						align-items: center;
						.save{
							display: inline-block;
							vertical-align: middle;
							color: $uni-text-color-grey;
						}
						image{
							width: 43rpx;
							height: 28rpx;
							vertical-align: middle;
							margin-right: 10rpx;
						}
					}
					.share{
						.zan{
							margin-right: 43rpx;
						}
						image{
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
			}
			
			
		}
	}
</style>
