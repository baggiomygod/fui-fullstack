
import Http from 'src/http-axios'

export default {
  /**
   * 修改文章
   * @param {*} data
   */
	doLogin (data = {}) {
		return Http({url: '/blog_h5/api/user/login', method: 'post', data})
  },
  // 登录测试
  loginTest(){
		return Http({url: '/blog_h5/api/user/login-test', method: 'get', params: {}})
  },
  ListTest() {
		return Http({url: '/blog_h5/api/blog/list', method: 'get', query: {}})
  }
}
