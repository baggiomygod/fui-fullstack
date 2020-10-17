
import * as types from '../actionTypes'
// import axios from 'axios';
import todosService from 'src/http-service/todolist'
// mock 未写
// 获取文章列表
export const fetchTodoList = () => async (dispatch: any) => {
    const res = await todosService.getTodos()
    if (res.code === 0) {
      dispatch({
        type: types.GET_TODOS,
        data: res.data
      });
    return
    }
    alert('error')
}

