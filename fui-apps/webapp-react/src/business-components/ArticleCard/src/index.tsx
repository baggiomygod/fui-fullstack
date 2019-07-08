import * as React from 'react'
import {ImgIcon} from 'src/fui'
import { withRouter } from 'react-router-dom';

import './index.styl'

const defaultImg = require('./img/namucuo.jpeg')
/**
 * @constructor <Header />
 * @description Header
 */
interface IArticleItem {
  id: string | number
  author: string
  avatar?: string
  img?: string
  description: string
  content: string
  title: string
  update_time?: string
  create_time?: string
  niceCount?: number | string
  commentCount?: number | string
}
interface IProps {
  data: IArticleItem
  history: any
}
class ArticleCert extends React.Component<IProps> {
  public state = {
    data: {}
  }
  constructor(props: IProps) {
    super(props)
  }
  public viewDetail = (e: any) => {
    e.preventDefault()
    const { history } = this.props
    const option = {
      pathname: '/article_detail',
      query: { id: this.props.data.id }
    }
    // console.log('options:', option)
    history.push(option)
    // history.pushState({id: 20}, '详情', '/article_detail')
  }
  /* 渲染列表 */
  public renderCard = () => {
    const {data} = this.props
    const imgStyle = {
      backgroundImage: `url(${defaultImg})` // data.img
    }
    return (
      <dl className="cart-main">
        <dt className="author-info">
          <ImgIcon src={data.avatar}
                      size={'small'}
                      shape="circle" />
          <div className="author">{data.author}</div>
        </dt>
        <div onClick={this.viewDetail}>
        <dd className="article-img-wrap">
          <a className="article-img" style={imgStyle} />
        </dd>
        <dd className="article-info">
          <h4 className="title">
            {data.title}
          </h4>
          <p className="text">{data.content}</p>
        </dd>
        </div>
        <dd className="cart-footer">
          <span className="text">{ data.update_time ? data.update_time : data.create_time}</span>
          <span className="icon iconfont icon-nice">{data.niceCount}</span>
          <span className="icon iconfont icon-talk-line">{data.commentCount}</span>
        </dd>
      </dl>
    )
  }
  public render() {
    return (
      <div className="article-card-wrap">
        {this.renderCard()}
      </div>
    )
  }
}

export default withRouter<any, any>(ArticleCert)
