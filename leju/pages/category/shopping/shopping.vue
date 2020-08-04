<template>
	<view class="shopping">
		<view class="pic">
			<view class="picture">
				<image :src="detailList.cover_img" mode=""></image>
			</view>
			<view class="contain">
				<view class="coach">
					单人沙发
				</view>
				<view class="store">
					库存数量:
					<view class="" v-if="isShow">
						{{skuList[0].count}}
					</view>
					<view class="" v-if="!isShow">
						{{skuList[1].count}}
					</view>
					<!-- <view class="font" v-if="" v-for="item in skuList" :key="item.id" @tap="color1Click(item.color_text)">
						{{item.count}}
					</view> -->
				</view>
			</view>
			<view class="error">
				<image src="../../../static/img/icons/x.png" mode=""></image>
			</view>
		</view>
		<view class="color">
			<view class="title">
				   颜色分类
			</view>
			<view class="text">
				<!-- <view class="font" @tap="color1Click()">
					{{skuList[0].color_text}}
				</view>
				<view class="font" @tap="color2Click">
					{{skuList[1].color_text}}
				</view> -->
				<view class="font" v-for="item in skuList" :key="item.id" @tap="color1Click(item.color_text)">
					{{item.color_text}}
				</view>
			</view>
		</view>
		<view class="serve">
			<view class="title">
				   特色服务
			</view>
			<view class="text">
				<view class="font" >
					送货上门
				</view>
				<view class="font" >
					上门安装
				</view>
			</view>
		</view>
		<view class="operate">
			<view class="sum">
				购买数量
			</view>
			<view class="degital">
				<view class="dec" @tap="decNum">
					-
				</view>
				<view class="num">
					{{count}}
				</view>
				<view class="ins" @tap="insNum">
					+
				</view>
			</view>
		</view>
		<view class="sure" @tap="addSure">
			确定
		</view>
	</view>
</template>

<script>
	import commodityApi from '../../../network/commodity/commodity.js'
	export default {
		data() {
			return {
				isShow: true,
				productId: '',
				detailList: '',
				skuList: [],
				count: 1,
				skuObj: {}
			}
		},
		methods: {
			getDeatilList() {
				let data = {
					productId: this.productId
				}
				commodityApi.productDetail(data).then(res => {
					// console.log(res)
					this.detailList = res.data.data
					this.skuList = res.data.data.skuList
					// console.log(this.skuList)
				})
			},
			//选中的商品数据存储到vuex
			saveInfo(){
				// let a = this.color1Click()
				// console.log('a===>',a)
				
			},
			color1Click(val){
				// console.log(val)
				this.isShow = true
				if(val == this.skuList[0].color_text){
					this.isShow = true
				}else{
					this.isShow = false
				}
				let sku = this.skuList.filter(ele => ele.color_text == val)
				// console.log(sku)
				return sku
			},
			// color2Click(){
			// 	this.isShow = false
			// },
			decNum(){
				if(this.count > 0){
					this.count --
				}else{
					this.count = 0
				}
			},
			insNum(){
				this.count ++
			},
			addSure(){
				this.saveInfo()
				uni.navigateTo({
					url: '../../profile/detail/index'
				})
			}
		},
		onLoad(option) {
			// console.log(option);
			this.productId = option.productId;
			// this.getDetail();
		},
		onShow() {
			this.getDeatilList()
		},
	}
</script>

<style lang="scss" scoped>
.shopping{
	width: 628rpx;
	height: 924rpx;
	margin: 200rpx auto 322rpx;
	background-color: $uni-bg-color;
	border-radius: 40rpx;
	position: relative;
	.pic{
		display: flex;
		align-items: center;
		justify-content: space-around;
		.picture{
			image{
				// position: absolute;
				// left: 62rpx;
				// top: -30rpx;
				width: 192rpx;
				height: 192rpx;
				background-color: #ccc;
				overflow: hidden;
			}	
		}
		.contain{
			.coach{
				color: $uni-text-color;
				font-size: $uni-font-size-base;
			}
			.store{
				color: $uni-text-color-grey;
				font-size: $uni-font-size-sm;
			}
		}
		.error{
			image{
				width: 42rpx;
				height: 42rpx;
			}
		
		}
	}
	.color{
		margin-top: 54rpx
	}
	.serve{
		margin-top: 31rpx;
	}
	.color,.serve{
		
		margin-left: 76rpx;
		.title{
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			margin-bottom: 26rpx;
		}
		.text{
			display: flex;
			flex-wrap: wrap;
			.font{
				width: 238rpx;
				height: 37rpx;
				color: $uni-text-color-grey;
				font-size: $uni-font-size-base;
				margin-bottom: 21rpx;
				background-color: #ccc;
				margin-right: 12rpx;
			}
			
		}
	}
	.operate{
		display: flex;
		justify-content: space-between;
		margin: 0 70rpx;
		margin-top: 81rpx;
		.sum{
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			font-weight: 700;
		}
		.degital{
			display: flex;
			
			.dec,.ins{
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				// margin: 5rpx;
				color: $uni-text-color;
			}
			.num{
				width: 72rpx;
				height: 40rpx;
				color: $uni-text-color;
				text-align: center;
			}
		}
	}
	.sure{
		width: 208rpx;
		height: 80rpx;
		background-color: $uni-bg-color-grey;
		font-size: $uni-font-size-lg;
		color: $uni-bg-color;
		text-align: center;
		line-height: 80rpx;
		margin: 48rpx auto 0;
	}
}
</style>
