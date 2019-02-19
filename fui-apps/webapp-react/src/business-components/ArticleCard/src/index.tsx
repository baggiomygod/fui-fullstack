import * as React from 'react'
import {ImgIcon} from 'src/fui'

import './index.styl'

const defaultImg = require('./img/namucuo.jpeg')
/**
 * @constructor <Header />
 * @description Header
 */
interface IArticleItem {
  author: string
  avatar?: string
  img?: string
  description: string
  title: string
  niceCount?: number | string
  commentCount?: number | string
}
interface IProps {
  data: IArticleItem
}
class ArticleCert extends React.Component<IProps> {
  public state = {
    data: {}
  }
  constructor(props: IProps) {
    super(props)
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
        <dd className="article-img-wrap">
          <a className="article-img" style={imgStyle} />
        </dd>
        <dd className="article-info">
          <h4 className="title">
            <a href="">
            {data.title}
            </a>
          </h4>
          <p className="text">{data.description}</p>
        </dd>

        <dd className="cart-footer">
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

export default ArticleCert
