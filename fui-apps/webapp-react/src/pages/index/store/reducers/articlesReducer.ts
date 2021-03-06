import * as types from '../actionTypes'
// interface IArticleItem {
//   author: string,
//   createTime: string | number
//   imgUrl: string
//   title: string
//   content: string
//   views: number
//   like: number
// }
const initState = {
  articleList: [],
  articleData: {}
}

/**
 * 请求列表数据
 * @param state
 * @param action
 *
 */
const fetchArticles = (state: any, action: any ) => {
  if (action.page === 0) {
    return {
      ...state,
      articleList: action.data.json
    }
  } else {
    const list = state.articleList
    return {...state, articleList: list.concat(action.data)}
  }
}

/**
 * 获取文章详情
 * @param state
 * @param action
 */
const fetchArticleDetail = (state: any, action: any) => {
  console.log('fetchArticleDetail....:', state, action)
  return {
    ...state,
    articleData: action.data,
  }
}

/**
 * 新增文章
 * @param state
 * @param action
 */
const addArticle = (state: any, action: any) => {
  console.log('add:', action)
  if (action) {
    return{
      ...state
    }
  }
}
const articlesReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case types.GET_ARTICLES: return fetchArticles(state, action)
    case types.ADD_ARTICLES: return addArticle(state, action)
    case types.GET_ARTICLE_DETAIL: return fetchArticleDetail(state, action)
    default: return state
  }
}

export default articlesReducer
