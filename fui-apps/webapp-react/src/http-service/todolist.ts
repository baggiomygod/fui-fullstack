
import Http from 'src/http-axios'

export default {
  /**
   * 获取todos列表
   * @param {*} data
   */
	getTodos (query = {}) {
		return Http({url:'/blog_h5/api/todos/list', method: 'get', params: query})
  },
  /**
   * 修改文章
   * @param {*} data
   */
	editTodo (data = {}) {
		return Http({url: '/blog_h5/api/todos/update', method: 'post', data})
  },
  /**
   * 新增文章
   * @param {*} data
   */
	addTodo (data = {}) {
		return Http({url: '/blog_h5/api/todos/add', method: 'post', data})
  },
  /**
   * 删除文章
   * @param {*} data
   */
	delTodo (data = {}) {
		return Http({url: '/blog_h5/api/todos/del', method: 'post', data})
  },
}
