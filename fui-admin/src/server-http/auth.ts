/**
 * create by wengfan 2018-12-21
 */
// import * as Cookies from 'js-cookie'

// export function getCookie(key: string): any {
// 	return Cookies.get(key)
// }

// export function setCookie (key: string, token: string, params: any): any {
// 	return Cookies.set(key, token, params)
// }

// export function removeCookie (key: string, params: any) {
// 	return Cookies.remove(key, params)
// }

/**
 * 设置request header
 * @param {*} params url请求的参数
 * @param {*} token token,未登录传空字符串（""）
 *
 * 根据实际业务修改
 */
export function setHeader (token: string = ''):any {
	const headers = {
		token,
	}
	return headers
}

