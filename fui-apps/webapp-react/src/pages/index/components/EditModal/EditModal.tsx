import * as React from 'react'
import './EditModal.styl'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {Mask} from 'src/fui'

/**
 *
 */
interface IPorps {
  handleClick: any
  history: any
}
 class EditModal extends React.Component<IPorps> {
  public createArticle = (e: any) => {
    e.stopPropagation()
    console.log('create article', e.target)
    const { history } = this.props
    history.push('create_article')
  }
  public createPhoto = (e:any) => {
    e.stopPropagation()
    console.log('create photo',  e.target)
  }
  public render () {
    const {handleClick} = this.props
    return (
      <div className="edit-mask-wrap">
      <Mask className="edits" handleClick={handleClick}>
        <div className="edit-item" onClick={this.createArticle}>
          <i className="icon iconfont icon-doc-s" />
          写文章
        </div>
        <div className="edit-item" onClick={this.createArticle}>
          <i className="icon iconfont icon-yingpan" />
          分享图片
        </div>
      </Mask>
      </div>
    )

  }
 }

export default withRouter<any, any>(connect()(EditModal))
