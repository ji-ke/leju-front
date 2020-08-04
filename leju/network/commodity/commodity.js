import http from '../http.js'

function productDetail(data) {
	// return http('/api/leju/front/product/detail?productId=0265d0a4bead4156b924bd43738e8f98')
	return http({
	url: '/api/leju/front/product/detail',
	method: 'GET',
	data
	})
}

function productList(data) {
	// return http('/api/leju/front/product/list?kindId=1bfad10d58c241c7b919dbb25b3d2043&start=&limit=')
	return http({
	url: '/api/leju/front/product/list',
	method: 'GET',
	data
	})
}


export default{
	productDetail,
	productList
}
