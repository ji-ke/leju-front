import http from '../http.js'

function kindlist(data){
	// return http.get('/api/leju/front/product/list')
	// return http('/api/leju/front/kind/list')
	return http({
	url: '/api/leju/front/kind/list',
	method: 'GET',
	data
	})
}

function productlist(data){
	// return http('/api/leju/front/product/list',data)
	return http({
	url: '/api/leju/front/product/list',
	method: 'GET',
	data
	})
}

function productdetail(data){
	// return http('/api/leju/front/product/detail')
	return http({
	url: '/api/leju/front/product/detail',
	method: 'GET',
	data
	})
}
// /api/leju/front/kind/list
export default{
	kindlist,
	productlist,
	productdetail
}