import * as React from 'react'

import {connect} from 'react-redux'
import { fetchArticles } from 'src/pages/index/store/action/articlesAction'
import { ArticleCert } from 'src/business-components'
import './List.styl'
/**
 * @constructor <Header />
 * @description Header
 */
interface IProps {
  dispatch: any
  articleList: any[]
}
class List extends React.Component<IProps> {
  public state = {
    listData: [],
    canScroll: true, // 标识页面是否可以滚动
    loadingText: '加载更多'
  }
  // 分页
  private page: number = 1

  constructor(props: IProps) {
    super(props)
    this.fetchList(this.page)
  }
  public componentWillMount () {
    this.listenerScroll()
  }
  public componentDidMount() {
    console.log(this.props.articleList)
  }
  public componentWillUnmount () {
    window.removeEventListener('scroll', this.listenerScroll)
  }
  // 监听 scroll 事件
  public listenerScroll = () => {
    window.addEventListener('scroll', () => {
      const clientHeight: number = document.documentElement.clientHeight
      const scrollHeight: number = document.body.scrollHeight
      const scrollTop: number = document.documentElement.scrollTop
      const proLoadDis = 30
      if (scrollHeight - clientHeight - scrollTop <= proLoadDis) {
        this.page++
        if (this.page > 2) {
          this.setState({
            canScroll: false,
            loadingText: '没有更多数据'
          })
        } else {
          this.setState({
            canScroll: true,
            loadingText: '加载中'
          })
          this.fetchList(this.page)
        }
      }
    })
  }

  // 请求列表数据
  public fetchList = (page: number) => {
    this.props.dispatch(fetchArticles(page))
    setTimeout(() => {
      this.setState({
        loadingText: '加载完成'
      })
    }, 800)

  }
  public renderList () {
    const {articleList} = this.props
    return articleList.map((item, index) => {
      return (
        <li className="list-item" key={index}>
          <ArticleCert data={item} />
        </li>
      )
    })
  }

  public render() {
    const { loadingText } = this.state
    return (
      <div className="list-wrap">
        <ul className="list">
          {this.renderList()}
        </ul>
        <div className="loading">
          {/* <span className="icon iconfont icon-loading" /> */}
          {loadingText}
        </div>
      </div>
    )
  }
}

export default connect(
  (state: any) => ({
    articleList: state.articlesReducer.articleList // 文章列表
  })
)(List)
