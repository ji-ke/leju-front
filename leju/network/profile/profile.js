import http from '../http.js'

function doLogin(data) {
	return http({
	url: '/api/leju/front/user/doLogin',
	method: 'POST',
	data
	})
	
}



function register(data){
 	return http({
 		url: '/api/leju/front/user/register',
 		method: 'POST',
 		data
 	})
 }

function doLogout() {
	return http({
	url: '/api/leju/front/user/doLogout',
	})
	
}

export default{
	doLogin,
	register,
	doLogout
}