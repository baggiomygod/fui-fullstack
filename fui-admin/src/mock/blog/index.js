import Mock from 'mockjs'
// import {Random} from 'mockjs'
import post from './post.json'

export default () => {
    Mock.mock(/\/api\/blog\/list.*/, /post/i, post) // 菜单
    Mock.mock(/\/api\/blog\/detail.*/, /post/i, post) // 菜单
  }
