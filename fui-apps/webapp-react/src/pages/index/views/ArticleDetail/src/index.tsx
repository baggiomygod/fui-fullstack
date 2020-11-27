import * as React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchArticleDetail } from 'src/pages/index/store/action/articlesAction'
import { GoBackHeader } from 'src/business-components'


 function ArticleDetail(props: any) {
  React.useEffect(() => {
    const { query } = props.location

    props.dispatch(fetchArticleDetail(query.id))
  }, [])
  const { articleData } = props
  return (
    <div>
      <GoBackHeader />
      detail...
      <section>
      <h1>{articleData.title}</h1>
      {articleData.content}
      </section>
    </div>
  )
}

export default withRouter<any, any>(connect(
  (state: any) => ({
    articleData: state.articlesReducer.articleData
  })
)(ArticleDetail))
