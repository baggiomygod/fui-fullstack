import * as React from 'react'
import {connect} from 'react-redux'
import { createArticles } from 'src/pages/index/store/action/articlesAction'
import './CreateArticle.styl'
import UploadImg from '../../components/UploadImg/UploadImg';
import { GoBackHeader } from 'src/business-components'
/**
 *
 */
interface IPorps {
  dispatch: any
  test: any
}
interface IState {
  addForm: IAddArticle
}
interface IAddArticle {
  title: string
  content: string
}
 class CreateArticle extends React.Component<IPorps> {
   public state: IState = {
     addForm: {
       title: '',
       content: '',
     }
   }
  public save = () => {
    console.log('save')
  }
  // 提交保存
  public handleSubmit = (e: any) => {
    e.preventDefault()
    const params = Object.assign({}, this.state.addForm)
    this.props.dispatch(
      createArticles(params)
    )
  }
  // 输入框输入变化时
  public handleInputChange = (e:any) => {
    const target = e.target
    const value = target.value
    const name = target.name
    const data = Object.assign({}, this.state.addForm, {[name]: value})
    this.setState({
      addForm: data
    })
  }
  public render () {
    return (
      <div className="create-article-wrap">
          <GoBackHeader />
          <button onClick={this.save}>create...</button>
          <UploadImg />
          <div className="article-form">
            <form className="add-form" onSubmit={this.handleSubmit}>
              <div className="form-item">
                <input type="text"
                        name="title"
                        className="article-title-ipt f-input"
                        placeholder="文章标题"
                        onChange={this.handleInputChange} />
              </div>
              <div className="form-item">
                <textarea name="content"
                        className="article-title-ipt f-input"
                        placeholder="文章内容"
                        onChange={this.handleInputChange} />
              </div>
              <div className="submit-btn">
                    <button
                      type="submit"
                      className="f-button primary">保存</button>
                  </div>
            </form>
          </div>
      </div>
    )

  }
 }

 export default connect(
  () => ({})
 )(CreateArticle)
