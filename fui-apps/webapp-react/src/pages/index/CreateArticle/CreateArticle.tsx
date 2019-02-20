import * as React from 'react'
import './CreateArticle.styl'

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
      </div>
    )

  }
 }

 export default CreateArticle
