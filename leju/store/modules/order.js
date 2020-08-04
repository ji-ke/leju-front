const state = {
	tempOrder: {},
	tempOrderBack: {}
}

const mutations = {
	addOrderTemp(state,data){
		state.tempOrder = data
	},
	addOrderCart(state,data){
		state.tempOrder = data
	},
	addTempOrderBack(state,data){
		state.tempOrderBack = data
	},
}

const actions = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}