
import * as types from '../actionTypes'
// import axios from 'axios';
import homeService from 'src/http-service/home'
// mock 未写
export const fetchArticles = (page: number) => async (dispatch: any) => {
    const res = await homeService.getArticles()
    console.log('res:', res)
    // const res = await axios({
    //     method: 'get',
    //     url: '../../mock/articles.json', // mock
    // });

    dispatch({
        type: types.GET_ARTICLES,
        page,
        data: res.data
    });

}
