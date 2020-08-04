<template>
	<view class="shoppinglist">
		<view class="top">
			购物车
		</view>
		<view class="shoplist">
			<checkbox-group @change="selectClick">
			<view class="shopitem" v-for="(item,index) in shoppinglist" :key="index">
				<view class="pic">
					<label>
						<checkbox :value="item.id" :checked="checkbox.includes(item.id)"/>
					</label>
					<image src="../../../static/img/icons/kind.png" mode=""></image>
				</view>
				<view class="text">
					<view class="bed">
						切割式床头柜
					</view>
					<view class="num">
						编号
					</view>
					<view class="num">
						数量
					</view>
				</view>
				<view class="price">
					<view class="num">
						{{item.price}}
					</view>
					<view class="math">
						<view class="dec" :data-num="item.num" @tap="decClick">
							-
						</view>
						<view class="sum">
							{{item.num}}
						</view>
						<view class="ins" :data-num="item.num" @tap="insClick">
							+
						</view>
					</view>
				</view>
			</view>
		</checkbox-group>
		</view>
		<view class="like">
			<view class="title">
				猜你喜欢
			</view>
			<view class="pic">
				<view class="picitem">
					<image src="../../../static/img/icons/kind.png" mode=""></image>
				</view>
				<view class="picitem">
					<image src="../../../static/img/icons/kind.png" mode=""></image>
				</view>
				<view class="picitem">
					<image src="../../../static/img/icons/kind.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="ope">
			<view class="select">
			<checkbox-group @change="selectAllClick">
				<label>
					<checkbox value="1" :checked="selectAll"/>全选
				</label>
			</checkbox-group>
			</view>
			<view class="total">
				合计: {{totalprice}}
			</view>
			<view class="operation">
				结算
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkbox: [],
				// selectAll: false,
				shoppinglist: [
					{
						num: 1,
						price: 100,
						id: '1'
					},
					{num:2,price:100,id:'2'}
				]
			}
		},
		computed:{
			selectAll(){
				return this.checkbox.length == this.shoppinglist.length ? true : false
			},
			totalprice(){
				console.log(1)
				this.shoppinglist.reduce((total,current) => {
					return total + current.num * current.price
				})
				// return 666
			}
		},
		methods: {
			decClick(e){
				// console.log(e)
				let num = Number(e.currentTarget.dataset.num)
				// console.log(typeof(Number(num)))
				for(var i = 0; i < num; i ++){
					if(num <= 0){
						return  num = 0
						console.log(num)
					}else{
						num--
						this.shoppinglist.num = num --
					}
					// console.log(num)
				}
				console.log(num)
			},
			insClick(){
				// this.shoppinglist.num ++
				console.log(this.shoppinglist.num)
			},
			selectClick(e){
				// console.log(e)
				this.checkbox = e.detail.value
			},
			selectAllClick(e){
				// console.log(e)
				var value = e.detail.value 
				// console.log(value)
				// this.checkbox = this.selectAll
				// console.log(this.checkbox)
				if(value.length > 0){
					// console.log(value)
					// console.log(this.checkbox)
					this.shoppinglist.forEach(ele => {
						this.checkbox.push(ele.id)
					})
					// console.log(this.checkbox)
				}else{
					this.checkbox = []
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.shoppinglist{
	.top{
		height: 100rpx;
		line-height: 100rpx;
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		text-align: center;
		background-color: $uni-bg-color-grey;
	}
	.shoplist{
		.shopitem{
			width: 672rpx;
			height: 205rpx;
			background-color: $uni-bg-color;
			margin: 0 auto;
			margin-top: 32rpx;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.pic{
				display: flex;
				align-items: center;
				image{
					width: 136rpx;
					height: 136rpx;
				}
			}
			.text{
				.bed{
					color: $uni-text-color;
					font-size: $uni-font-size-base;
				}	
				.num{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
				}
			}
			.price{
				position: relative;
				
				.num{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-sm;
					margin-bottom: 37rpx;
				}
				.math{
					display: flex;
					align-items: bottom;
					color: $uni-text-color;
					// position: absolute;
					// bottom: 0;
					// right: 0;
					.dec{
						width: 30rpx;
						height: 30rpx;
						border-radius: $uni-border-radius-circle;
						// background-color: #ccc;
					}
					.sum{
						width: 72rpx;
						height: 40rpx;
						text-align: center;
					}
					.ins{
						width: 30rpx;
						height: 30rpx;
						border-radius: $uni-border-radius-circle;
					}
					
				}
			}
		}
	}
	.like{
		.title{
			margin-top: 94rpx;
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			font-weight: 700;
			text-align: center;
		}
		.title::before{
			margin-right: 30rpx;
			content: '';
			display: inline-block;
			width: 173rpx;
			height: 4rpx;
			background-color: #ccc;
			vertical-align: middle;
		}
		.title::after{
			margin-left: 30rpx;
			content: '';
			display: inline-block;
			width: 173rpx;
			height: 4rpx;
			background-color: #ccc;
			vertical-align: middle;
		}
		.pic{
			display: flex;
			justify-content: space-evenly;
			margin-top: 49rpx;
			.picitem{
				width: 208rpx;
				height: 208rpx;
				image{
					width: 208rpx;
					height: 208rpx;
				}
			}
		}
	}
	.ope{
		display: flex;
		height: 176rpx;
		background-color: $uni-bg-color;
		padding: 0 30rpx;
		align-items: center;
		margin-top: 136rpx;
		.select{
			flex: 2;
			color: $uni-text-color;
			font-size: $uni-font-size-base;
		}
		.total{
			flex: 1;
			color: $uni-text-color;
			font-size: $uni-font-size-base;
		}
		.operation{
			width: 208rpx;
			height: 80rpx;
			background-color: $uni-bg-color-grey;
			color: $uni-text-color-inverse;
			font-size: $uni-font-size-lg;
			text-align: center;
			line-height: 80rpx;
		}
	}
}
</style>
