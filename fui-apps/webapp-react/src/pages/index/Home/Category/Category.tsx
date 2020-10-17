import * as React from 'react'
import {ImgIcon} from 'src/fui'
// import Fui from '../../../../fui'
import './Category.styl'
// import FuiIcon2x from 'src/statics/images/logo/fui-2x.png'
const FuiIcon2x = require('src/statics/images/logo/fui-1x.png')
/**
 * @constructor <Header />
 * @description Header
 */
interface ICategoryProps {
  label: string
  iconUrl: string
  key: string
  text?: string,
  url?: string | undefined
}
class Category extends React.Component<any> {
  public state = {
    categoryList: []
  }
  constructor(props: any) {
    super(props)
  }
  public componentWillMount () {
    const list = [
      {label: '摄影', iconUrl: '', key: 'photo', text: 'C'},
      {label: '前端', iconUrl: FuiIcon2x, key: 'web', text: ''},
      {label: '足球', iconUrl: FuiIcon2x, key: 'ball', text: ''},
      {label: 'todo', iconUrl: '', key: 'travel', text: 'T', url: '/todolist'},
    ]
   this.setState({
    categoryList: list
   })
  }
  public goPage = (url: string | undefined) => {
      this.props.history.push(url)
  }
  public renderCategories () {
    return this.state.categoryList.map((item: ICategoryProps) => {
      return (
        <div className="category-item" key={item.key} onClick={this.goPage.bind(this, item.url)} >
          <ImgIcon src={item.iconUrl}
                    size={'large'}
                    shape="circle"
                    iconText={item.text} />
          <p className="text">{item.label}</p>
        </div>
      )
    })
  }
  public render() {
    return (
      <div className="category-wrap">
          {this.renderCategories()}
      </div>
    )
  }
}

export default Category
