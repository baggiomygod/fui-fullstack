import * as React from 'react'
import './CreateArticle.styl'
import UploadImg from '../components/UploadImg/UploadImg';
/**
 *
 */
interface IPorps {
  test: any
}
 class CreateArticle extends React.Component<IPorps> {
  public save = () => {
    console.log('save')
  }
  public render () {
    return (
      <div className="create-article-wrap">
          <button onClick={this.save}>create...</button>
          <UploadImg />
      </div>
    )

  }
 }

 export default CreateArticle
