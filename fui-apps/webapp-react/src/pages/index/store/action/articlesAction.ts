
import * as types from '../actionTypes'
// import axios from 'axios';
import homeService from 'src/http-service/home'
// mock 未写
export const fetchArticles = (page: number) => async (dispatch: any) => {
    const res = await homeService.getArticles()
    console.log('fetchArticles:', res)
    dispatch({
        type: types.GET_ARTICLES,
        page,
        data: res.data
    });

}

interface IArticle{
  title: string
  content: string
}
export const createArticles = (blogData: IArticle) => async (dispatch: any) => {
  const res = await homeService.addArticles(blogData)
  console.log('create res:', res)
  dispatch({
    type: types.ADD_ARTICLES,
    data: res.data
  })
}
