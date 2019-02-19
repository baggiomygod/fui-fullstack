
import * as types from '../actionTypes'
import axios from 'axios';

// mock 未写
export const fetchArticles = (page: number) => async (dispatch: any) => {
    const res = await axios({
        method: 'get',
        url: '../../mock/articles.json', // mock
    });

    dispatch({
        type: types.GET_ARTICLES,
        page,
        data: res.data
    });

}
