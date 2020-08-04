import store from '../store/index.js'

export function isLogin(){
	let userinfo = store.state.user.userinfo
	if(!userinfo.username){
		let userData = uni.getStorageSync('userData')
		if(userData){
			store.commit('user/setUserInfo',userData)
			return true
		}else{
			return false
		}
		
	}
	return true
}

export function checkLogin(fn){
	if(isLogin()){
		fn()
	}else{
		uni.showModal({
			title: '您未登录',
			content: '您未登录,需登录后才能查看',
			success(res) {
				if(res.confirm){
					uni.navigateTo({
						url: '/pages/home/login/login'
					})
				}
			}
		})
	}
}