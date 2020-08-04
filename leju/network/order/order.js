import http from '../http.js'

function orderList(data) {
	return http({
	url: '/api/leju/front/order/list',
	method: 'GET',
	data
	})
	// '/api/leju/front/order/list?userId=b6da113f23cf428bbe646b358e76b89c',data)
}

 function delOrderPre(data) {
	// return http('/api/leju/front/order/delOrderPre?orderId=')
	return http({
	url: '/api/leju/front/order/delOrderPre',
	method: 'GET',
	data
	})
}

 function allDone(data) {
	return http({
	url: '/api/leju/front/order/allDone',
	method: 'GET',
	data
	})
}

function orderBackList(data) {
	return http({
	url: '/api/leju/front/order/orderBackList',
	method: 'GET',
	data
	})
}

function payConfirm(data) {
	return http({
	url: '/api/leju/front/order/payConfirm',
	method: 'POST',
	data
	})
}

function backOrder(data) {
	return http({
	url: '}/api/leju/front/order/backOrder',
	method: 'POST',
	data
	})
}

function addOrderBatch(data) {
	return http({
	url: '/api/leju/front/order/addOrderBatch',
	method: 'post',
	data
	})
}

export default{
	orderList,
	delOrderPre,
	allDone,
	orderBackList,
	payConfirm,
	backOrder,
	addOrderBatch
}