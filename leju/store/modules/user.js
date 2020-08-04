const state = {
	userinfo: {}
}

const mutations = {
	setUserInfo(state,data){
		state.userinfo = data
		try{
			uni.setStorageSync('userData', data)
		}catch(e){
			//TODO handle the exception
			console.log(e)
		}
	},
	removeUserInfo(state){
		state.userinfo = {}
		uni.removeStorageSync('userDate')
	}
}

const actions = {}

export default{
	namespaced: true,
	state,
	mutations,
	actions
	
}
