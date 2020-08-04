import http from '../http.js'

function addressList() {
	return http('/api/leju/front/address/list?userId=95a55baa619645cda9cf393124814afe')
}

function setOne() {
	return http('/api/leju/front/address/setOne?id=9541956fa98342c38765c5769c3a9d44&userId=6565e2ca994e4defa45099712fb0342f')
}

function detail() {
	return http('/api/leju/front/address/detail?id=957335f07b5949edb20c0d8aca99a836')
}

function del() {
	return http('/api/leju/front/address/del?id=')
}

function update() {
	return http('/api/leju/front/address/update')
}

function save() {
	return http('/api/leju/front/address/save')
}


export default{
	addressList,
	setOne,
	detail,
	del,
	update,
	save
}