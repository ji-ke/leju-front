<template>
	<view class="login">
		<image class="logo" src="../../../static/img/icons/leju-logo.png" mode=""></image>
		 <form  class="form">
		 <view class="uni-form-item uni-column">
			<input class="uni-input tel"  type="text" name="input" placeholder="请输入手机号/邮箱" />
			<input class="uni-input pass" type="password" name="input" placeholder="请输入密码" />
		</view>
		<view class="uni-btn-v">
			<button  @click.native="doLogin()">登录</button>
		</view>
		<view class="sea">
			<text class="tel">海外手机号登录</text>
			<text class="password">忘记密码</text>
		</view>
		</form>
		<view class="third">
			<text class="register" @tap="immediatelyClick">立即注册</text>
			<text class="login">第三方软件登录</text>
		</view>
		<view class="icon">
			<image src="../../../static/img/icons/QQ.png" mode=""></image>
			<image src="../../../static/img/icons/wb.png" mode=""></image>
			<image src="../../../static/img/icons/wx.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import loginApi from '../../../network/profile/profile.js';
	export default {
		data() {
			return {
				username: 'dpq',
				password: '123456'
			}
		},
		methods: {
			doLogin(){
				var obj = {
					username: this.username,
					password: this.password
				}
				loginApi.doLogin(obj)
				.then(res => {
					uni.reLaunch({
						url: '../../profile/profile'
					})
				})
				.catch(err => {
					console.log(err)
				})
			},
			immediatelyClick(){
				uni.navigateTo({
				    url: '/pages/home/register/register'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
 .login{
	 .logo{
		 width: 212rpx;
		 height: 212rpx;
		 display: block;
		 margin: 154rpx auto;
		 border-radius: $uni-border-radius-circle;
	 }
	 .form{
		 .uni-form-item{
		 		 .uni-input{
		 			 width: 536rpx;
		 			 height: 78rpx;
					 background-color: #E3DFDA;
					 margin: 0 auto;
					 font-size: $uni-font-size-base;
					 color: $uni-text-color-grey;
		 		 }
				 .uni-input:nth-child(1){
					 margin-bottom: 36rpx;
				 }
				 .uni-input:nth-child(2){
					 margin-bottom: 48rpx;
				 }
		 }
		 .uni-btn-v{
		 		 button{
		 			 width: 536rpx;
		 			 height: 92rpx;
		 			 background-color: $uni-bg-color-grey;
		 			 color: $uni-text-color-inverse;
		 			 font-size: $uni-font-size-lg;
		 		 }
		 }
	 }
	 .sea{
		 width: 536rpx;
		 margin: 0 auto;
		 color: $uni-text-color-grey;
		 font-size: $uni-font-size-sm;
		 display: flex;
		 justify-content: space-between;
		 margin-top: 22rpx;
	 }
	 .third{
		 display: flex;
		 flex-direction: column;
		 margin-top: 239rpx;
		 text-align: center;
		 .register{
			 color: $uni-bg-color-grey;
			 font-size: 40rpx;
			
		 }
		 .login{
			 margin-top: 28rpx;
			 color: $uni-text-color-grey;
			 font-size: $uni-font-size-sm;
		 }
		 .login::before{
			 content: '';
			 display: inline-block;
			 width: 126rpx;
			 height: 2rpx;
			 background-color: $uni-text-color-grey;
			 margin-right: 30rpx;
			 vertical-align: middle;
		 }
		 .login::after{
			 content: '';
			 display: inline-block;
			 width: 126rpx;
			 height: 2rpx;
			 background-color: $uni-text-color-grey;
			 margin-left: 30rpx;
			 vertical-align: middle;
		 }
	 }
	.icon{
		margin-top: 69rpx;
		text-align: center;
		image{
			margin: 0 26rpx;
			width: 69rpx;
			height: 69rpx;
		}
	}
 }
</style>
