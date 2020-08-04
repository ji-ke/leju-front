import http from '../http.js'

function banner(data){
	// return http('/api/leju/front/home/banners',{use:0})
	return http({
	url: '/api/leju/front/home/banners',
	method: 'GET',
	data
	})
}

 function brandList(data){
	// return http('/api/leju/front/home/brandList')
	return http({
	url: '/api/leju/front/home/brandList',
	method: 'GET',
	data
	})
}

function hotlist(data){
	// return http('/api/leju/front/find/seriesAll')
	return http({
	url: '/api/leju/front/find/seriesAll',
	method: 'GET',
	data
	})
}

function detail(data){
	// return http('/api/leju/front/product/detail?productId')
	return http({
	url: '/api/leju/front/product/detail?productId',
	method: 'GET',
	data
	})
}


export default{
	banner,
	brandList,
	hotlist,
	// productlist,
	detail
}