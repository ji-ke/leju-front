<template>
	<view class="register">
		<text class="register-reg">注册</text>
		<input class="uni-input tel" v-model="tel" maxlength="11" name="input" placeholder="请输入手机号/邮箱" />
		<input class="uni-input tel" v-model="password" name="input" placeholder="登录密码" />
		<input class="uni-input tel" v-model="username" name="input" placeholder="用户名" />
		<input class="uni-input tel" v-model="nickname" name="input" placeholder="昵称" />
		<input class="uni-input tel" v-model="verCode"  name="input" placeholder="验证码" />
		<button type="default" @click.native="register">注册</button>
		<view class="font">
			完成注册即代表你同意<text>用户协议</text>和<text>隐私政策</text>
		</view>
		<view class="own" @tap="ownClick">
		<text>已有账号 去登录</text>	
		</view>
	</view>
</template>

<script>
	import loginApi from '@/network/profile/profile.js'
	export default {
		data() {
			return {
				avatar: '/static/logo.png',
				tel: '',
				password:'', 
				verCode:'', 
				nickname: '', 
				username: ''
			}
		},
		methods: {
			ownClick(){
				uni.navigateTo({
				    url: '/pages/home/login/login'
				})
			},
			register(){
				let data = {
						avatar: this.avatar,
						tel: this.tel,
						password: this.password, 
						username: this.username, 
						nickname: this.nickname, 
					}
					// console.log(data)
				loginApi.register(data).then(res => {
					// console.log(res)
					// if(res.code == 'S'){
						uni.showToast({
							title: '请求成功'
						})
						uni.redirectTo({
							url: '../login/login'
						})
					// }else{
					// 	uni.showToast({
					// 		title: res.msg
					// 	})
					// }
					
				})
			}
			// (){
			// 	let data = {
			// 		avatar: this.avatar,
			// 		tel: this.tel,
			// 		password: this.password, 
			// 		username: this.username, 
			// 		nickname: this.nickname, 
			// 	}
			// 	console.log(data)
			// 	register(data).then(res => {
			// 		console.log(res)
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.register{
		.register-reg{
			font-size: 60rpx;
			color: $uni-bg-color-grey;
			margin-left: 110rpx;
			margin-top: 138rpx;
			letter-spacing: 1.3;
			font-weight: 700;
		}
		input{
			width: 536rpx;
			height: 78rpx;
			background-color: #E3DFDA;
			margin: 78rpx auto 48rpx;
			border-radius: 78rpx;
			color: #000;
		}
		button{
		 width: 536rpx;
		 height: 92rpx;
		 background-color: $uni-bg-color-grey;
		 color: $uni-text-color-inverse;
		 font-size: $uni-font-size-lg;
		}
		.font{
			margin: 22rpx auto 0;
			text-align: center;
			color: $uni-text-color-grey;
			font-size: $uni-font-size-base;
			text{
				color: $uni-text-color;
			}
		}
		.own{
			text-align: center;
			color: $uni-bg-color-grey;
			font-weight: 800;
			margin-top: 215rpx;
		}
	}

</style>
