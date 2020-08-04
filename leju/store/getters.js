const getters = {
	user(state){
		if(state.user.userinfo.username){
			return state.user.userinfo
		}else{
			let userinfo = uni.getStorageSync('userData')
			if(!userinfo){
				uni.showModal({
					title: '未登录',
					content: '你未登录,需登陆后才能查看',
					success(res) {
						if(res.confirm){
							uni.navigateTo({
								url: '../home/login/login.vue'
							})
						}
					}
				})
				return {}
			}
			else{
				return userinfo
			}
		}
	}
}