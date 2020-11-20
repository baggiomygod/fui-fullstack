import Mock from 'mockjs'
// import {Random} from 'mockjs'
import post from './post.json'
import blogList from './bloglist.json'

export default () => {
    // /api/blog/list?title=&content=&author=
    Mock.mock(/\/api\/blog\/list.*/, /get/i, blogList) // 博客列表
    Mock.mock(/\/api\/blog\/detail.*/, /post/i, post) // 菜单
  }
