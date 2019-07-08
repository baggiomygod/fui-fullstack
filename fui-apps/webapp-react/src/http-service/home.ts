
import Http from 'src/http-axios'

export default {
  /**
   * 获取列表
   * @param {*} data
   */
	getArticles (query = {}) {
		return Http({url:'/blog_h5/api/blog/list', method: 'get', params: query})
  },
  /**
   * 获取文章详情
   * @param query
   */
  getArticleDetail (query = {}) {
		return Http({url:'/blog_h5/api/blog/detail', method: 'get', params: query})
  },
  /**
   * 修改文章
   * @param {*} data
   */
	editArticles (data = {}) {
		return Http({url: '/blog_h5/api/blog/update', method: 'post', data})
  },
  /**
   * 新增文章
   * @param {*} data
   */
	addArticles (data = {}) {
		return Http({url: '/blog_h5/api/blog/add', method: 'post', data})
  },
  /**
   * 删除文章
   * @param {*} data
   */
	delArticles (data = {}) {
		return Http({url: '/blog_h5/api/blog/del', method: 'post', data})
  },

}
