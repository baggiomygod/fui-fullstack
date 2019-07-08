
import * as types from '../actionTypes'
// import axios from 'axios';
import homeService from 'src/http-service/home'
// mock 未写
// 获取文章列表
export const fetchArticles = (page: number) => async (dispatch: any) => {
    const res = await homeService.getArticles()
    dispatch({
        type: types.GET_ARTICLES,
        page,
        data: res.data
    });

}

// 获取文章详情
export const fetchArticleDetail = (id: string) => async (dispatch: any) => {
  const res = await homeService.getArticleDetail({id})
  dispatch({
    type: types.GET_ARTICLE_DETAIL,
    data: res.data
  })
}

interface IArticle{
  title: string
  content: string
}
export const createArticles = (blogData: IArticle) => async (dispatch: any) => {
  const res = await homeService.addArticles(blogData)
  dispatch({
    type: types.ADD_ARTICLES,
    data: res.data
  })
}
