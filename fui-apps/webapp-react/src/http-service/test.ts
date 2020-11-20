
import Http from 'src/http-axios'

export default {
  /**
   * 获取todos列表
   * @param {*} data
   */
	getTestList1 (query = {}) {
		return Http({url:'/blog_h5/api/test/list1', method: 'get', params: query})
  },
  getTestList2 (query = {}) {
		return Http({url:'/blog_h5/api/test/list2', method: 'get', params: query})
  },
}
