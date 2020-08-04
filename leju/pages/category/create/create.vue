<template>
	<view class="create">
		<view class="create-nav">
			<view class="nav-item" v-for="(item,index) in navlist" :key="index" @tap="navClick(index)">
				<text :class="{active: isactive == index}">
					{{item.title}}
				</text>
			</view>
		</view>
		
		<view class="create-list" v-show="isactive == 0">
			
			<view class="item" v-for="(item,index) in createlist" :key="index" @tap="detailClick(item.id)">
				<image :src="item.cover_img" mode=""></image>
				<view class="describe">
					<view class="gname">
						{{item.gname}}
					</view>
					<view class="price">
						<view class="price_now">
							{{item.price_now}}
						</view>
						<view class="origin_city">
							{{item.origin_city}}
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="create-list" v-show="isactive == 1">
			<view class="item" v-for="(item,index) in createlist" :key="index" @tap="detailClick(item.id)">
				<image :src="item.cover_img" mode=""></image>
				<view class="describe">
					<view class="gname">
						{{item.gname}}
					</view>
					<view class="price">
						<view class="price_now">
							{{item.price_now}}
						</view>
						<view class="origin_city">
							{{item.origin_city}}
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="create-list" v-show="isactive == 2">
			<view class="item" v-for="(item,index) in createlist" :key="index" @tap="detailClick(item.id)">
				<image :src="item.cover_img" mode=""></image>
				<view class="describe">
					<view class="gname">
						{{item.gname}}
					</view>
					<view class="price">
						<view class="price_now">
							{{item.price_now}}
						</view>
						<view class="origin_city">
							{{item.origin_city}}
						</view>
					</view>
				</view>
			</view>
		</view>
	
		<view class="create-list" v-show="isactive == 3">
			<view class="item" v-for="item in createlist" :key="item.id" @tap="detailClick(item.id)">
				<image :src="item.cover_img" mode=""></image>
				<view class="describe">
					<view class="gname">
						{{item.gname}}
					</view>
					<view class="price">
						<view class="price_now">
							{{item.price_now}}
						</view>
						<view class="origin_city">
							{{item.origin_city}}
						</view>
					</view>
				</view>
			</view>
		</view>
	 
	</view>
</template>

<script>
	import categoryApi from '../../../network/category/category.js'
	export default {
		data() {
			return {
				more: 'more', 
				page: {
					start: 1,
					limit: 10,
					kindId: null,
					lastpage: false
				},
				isactive: 0,
				// currenindex: 0,
				navlist: [
					{
						title: '新品',
						// isactive: 0
					},
					{
						title: '销量',
						// isactive: 0
					},
					{
						title: '价格',
						// isactive: 0
					},
					{
						title: '筛选',
						// isactive: 0
					},
					],
				createlist: []
			}
		},
		methods: {
			detailClick(val){
				console.log(val)
				let skuObj = this.createlist.filter(ele => ele.id == val)
				console.log(skuObj)
				uni.navigateTo({
				    url: '/pages/category/detail/detail?productId=' + val ,
					
				})
			},
			navClick(index){
				// console.log(index)
				// console.log(this.isactive)
				switch (index){
					case 0:
					this.isactive = 0
					// console.log(this.isactive)
						break;
					case 1:
					this.isactive = 1
					// console.log(this.isactive)
						break;
					case 2:
					this.isactive = 2
					// console.log(this.isactive)
						break;
					case 3:
					this.isactive = 3
					// console.log(this.isactive)
						break;
					default:
						break;
				}
			},
			getCreateList(){
				let page = {
					start: this.page.start,
					limit: this.page.limit,
					kindId: this.page.kindId
				}
				// console.log(1)
				// console.log(page)
				categoryApi.productlist(page)
				.then(res => {
					// console.log(res)
					// this.createlist = res.id
					this.createlist = this.createlist.concat(res.data.data.list)
					// this.page.lastpage = res.data
					// console.log(this.createlist)
				})
			}
		},
		
		onLoad(option) {
			// console.log(option)
			this.page.kindId = option.kindId
			this.getCreateList()
		},
		onReachBottom(){
			// console.log(this.page.lastpage)
			if(!this.page.lastpage){
				this.page.start ++
				setTimeout(() => {
					this.getCreateList()
				},500)
			}
		},
		 onPullDownRefresh() {
		        // console.log('refresh');
		        setTimeout(() => {
					this.getCreateList()
		            uni.stopPullDownRefresh();
		        }, 500);
		    }
	}
</script>

<style lang="scss" scoped>
.create{
	.create-nav{
		position: fixed;
		width: 100%;
		left: 0;
		right: 0;
		top: 88rpx;
		z-index: 999;
		display: flex;
		justify-content: space-evenly;
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-lg;
		background-color: $uni-bg-color-grey;
		.nav-item{
			text{}
			padding-bottom: 10rpx;
		}
	}
	.active{
		border-bottom: 4rpx solid $uni-bg-color;
	}
	.create-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-top: 72rpx;
		.item:nth-child(2n){
			height: 464rpx;
		}
		.item{
			position: relative;
			width: 316rpx;
			height: 416rpx;
			background-color: $uni-bg-color;
			margin-bottom: 48rpx;
			image{
				width: 316rpx;
				height: 238rpx;
			}
			.describe{
				.gname{
					color: $uni-text-color;
					font-size: $uni-font-size-base;
					position: absolute;
					left: 36rpx;
					bottom: 113rpx;
				}
				.price{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
					.price_now{
						position: absolute;
						left: 36rpx;
						bottom: 16rpx;
					}
					.origin_city{
						position: absolute;
						right: 36rpx;
						bottom: 16rpx;
					}
				}
			}
		}
	}
}
</style>
