import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order.js'
import user from './modules/user.js'
import getters from './getters.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	getters,
	modules:{
		user,
		order
	}
})

export default store
