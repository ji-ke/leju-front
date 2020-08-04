import http from '../http.js'

function seriesAll(){
	return http('/api/leju/front/find/seriesAll')
}

function articleDetail(){
	return http('/api/leju/front/find/articleDetail?id')
}

function aritlceList(){
	return http('/api/leju/front/find/aritlceList?kindId=d00d61c5cbb14d6592d79085bb638e2d')
}
function product(){
	return http('/api/leju/front/find/product?productId=c2326bd22e7749f29b5b04af8f26b464')
}

export default{
	seriesAll,
	articleDetail,
	aritlceList,
	product
}