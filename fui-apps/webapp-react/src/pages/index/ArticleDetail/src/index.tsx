import * as React from 'react'
import {connect} from 'react-redux'
import { fetchArticleDetail } from 'src/pages/index/store/action/articlesAction'


 function ArticleDetail(props: any) {
  React.useEffect(() => {
    const { query } = props.location
    props.dispatch(fetchArticleDetail(query.id))
  }, [])

  const { articleData } = props
  return (
    <div>
      detail...
      <section>
      <h1>{articleData.title}</h1>
      {articleData.content}
      </section>
    </div>
  )
}

export default connect(
  (state: any) => ({
    articleData: state.articlesReducer.articleData
  })
)(ArticleDetail)
