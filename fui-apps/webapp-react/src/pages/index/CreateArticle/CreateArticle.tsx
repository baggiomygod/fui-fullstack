import * as React from 'react'
import {connect} from 'react-redux'
import { createArticles } from 'src/pages/index/store/action/articlesAction'
import './CreateArticle.styl'
import UploadImg from '../components/UploadImg/UploadImg';
import { GoBackHeader } from 'src/business-components'
/**
 *
 */
interface IPorps {
  dispatch: any
  test: any
}
 class CreateArticle extends React.Component<IPorps> {
  public save = () => {
    console.log('save')
  }
  public addArticle = () => {
    this.props.dispatch(createArticles(
      {title: 'test', content: 'add....1'},
    ))
  }
  public render () {
    return (
      <div className="create-article-wrap">
          <GoBackHeader />
          <button onClick={this.save}>create...</button>
          <UploadImg />

          <button onClick={this.addArticle}>新增文章</button>
      </div>
    )

  }
 }

 export default connect(
  () => ({})
 )(CreateArticle)
