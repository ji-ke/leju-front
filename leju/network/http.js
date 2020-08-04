// import url from './baseurl.js'
// import settingFile
import settingFile from '@/setting.js'
import qs from 'qs'

// let obj = {
// 	get(path,params){
// 		return new Promise((resolve,rejected) => {
// 			uni.request({
// 				url: url + path,
// 				data: params,
// 				success(res) {
// 					resolve(res)
// 				},
// 				fail(err) {
// 					rejected(err)
// 				}
// 			})
// 		})
// 	},
// 	post(path,params){
// 		return new Promise((resolve,rejected) =>{
// 			uni.request({
// 				url: url + path,
// 				method: 'POST',
// 				data: qs.stringify(params,{allowDots: true}),
// 				header: {
// 					"content-type":"application/x-www-form-urlencoded"
// 				},
// 				success() {
// 					resolve(res)
// 				},
// 				fail(err) {
// 					rejected(err)
// 				}
// 			})
// 		})
// 	}
// }


function http(options) {
	return new Promise((resolve, reject) => {
		// if (options.method.toLowerCase() == 'post') {
		// 	// qs系列化  
		// 	// https://www.npmjs.com/package/qs 
		// 	//  arrayFormat: 'repeat' 作用:  { a: ['b', 'c'] }  ==> 'a=b&a=c'
		// 	//  allowDots: true  作用: { a: { b: { c: 'd', e: 'f' } } }  ==>  'a.b.c=d&a.b.e=f'
		// 	options.data = qs.stringify(options.data, {
		// 		arrayFormat: 'repeat',
		// 		allowDots: true
		// 	})
		// }
		
		var setting = {
			url: settingFile.host + options.url,
			data: options.data,
			method: options.method.toUpperCase() || 'GET',
			timeout: 6000,
			header: {
				'content-type': 'application/x-www-form-urlencoded', // from data
			},
			success(res) {
				resolve(res);
			},
			fail(err) {
				console.log('err',err);
				uni.showToast({
					icon:'error',
					title: '网络超时!'
				})
				reject(err);
			},
			
		}
		if (options.header) {
			setting.header = Object.assign(setting.header, options.header);
		}
		uni.request(setting);
	})
}
 
export default http