<template>
	<view class="category">
		<navbar></navbar>
		<view class="content">
			<!-- <navigator class="card" :url="'./create/create?kindId=' + categoryList[index].id" v-for="(item,index) in categoryList" :key="item.id"> -->
			<view class="card" v-for="item in categoryList" :key="item.id" @tap="categoryClick(item.id)">
				<view class="cname">
					{{item.ctitle}}
				</view>
				<view class="descr">
					{{item.etitle}}
				</view>
				<image :src="item.img" mode=""></image>
			</view>
		<!-- </navigator> -->
		
		</view>
	</view>
</template>

<script>
	import navbar from '../../components/home/navbar.vue'
	import categoeyApi from '../../network/category/category.js'
	export default{
		name: 'Category',
		components:{
			navbar
		},
		data(){
			return{
				categoryList: []
			}	
		},
		methods:{
			categoryClick(val){
				// console.log(val)
				uni.navigateTo({
					// url: "'./create/create?kindId=' + ",
					url: './create/create?kindId=' + val
				})
			},
			getCcategoryList(){
				categoeyApi.kindlist()
				.then(res => {
					this.categoryList = res.data.data
				})
			}
		},
		onLoad() {
			this.getCcategoryList()
		},
	}
</script>

<style lang="scss" scoped>
	.category{
		
		.card{
			position: relative;
			width: 670rpx;
			height: 302rpx;
			background-color: #ccc;
			border-radius: $uni-border-radius-base;
			margin: 0 auto;
				margin-bottom: 48rpx;
				image{
					position: absolute;
					bottom: 0;
					right: 0;
					width: 416rpx;
					height: 252rpx;
				}
				.cname{
					color: $uni-text-color;
					font-size: $uni-font-size-lg;
					font-weight: 700;
					position: absolute;
					left: 52rpx;
					bottom: 87rpx;
				}
				.descr{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-base;
					position: absolute;
					left: 52rpx;
					bottom: 40rpx;
				}
		}
		.card:nth-child(1){
			margin-top: 64rpx;
		}
	}
</style>
