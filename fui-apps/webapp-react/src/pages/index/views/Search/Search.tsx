import * as React from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import './Search.styl'

/**
 * @constructor <Home />
 * @description 首页
 */
interface IProps {
  history: any
}
interface IState {
  keyword: string | number
}
class Search extends React.Component<IProps> {
    public state:IState = {
      keyword: ""
    }
    constructor (props: any) {
        super(props)
    }
    public handleBack = () => {
      const { history } = this.props
      history.goBack();
    }
    public clear = () => {
      this.setState({
        keyword: ''
      })
    }
    public inputChangedHandler = (event: any) => {
      this.setState({
        keyword: event.target.value
      })
    }
    public render () {
      const {keyword} = this.state
        return (
            <div className="search-wrap">
              <div className="search-header">
                <i className="icon iconfont icon-zuojiantou" onClick={this.handleBack} />
                <form className="search-form" action="">
                  <input type="search"
                          onChange={this.inputChangedHandler.bind(this, event)}
                          className="search-input"
                          placeholder="请输入搜索词"
                          value={keyword || ''} />
                </form>
                <i className="icon iconfont icon-close-line" onClick={this.clear} />
              </div>
              <div className="response-list">
                搜索功能未完成
              </div>
            </div>
        )
    }
}

// export default Search
export default withRouter<any, any>(connect()(Search))
