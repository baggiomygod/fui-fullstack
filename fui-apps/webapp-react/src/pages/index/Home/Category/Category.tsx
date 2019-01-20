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
}
class Category extends React.Component {
  public state = {
    categoryList: []
  }
  constructor(props: any) {
    super(props)
  }
  public componentWillMount () {
    const list = [
      {label: '摄影', iconUrl: FuiIcon2x, key: 'photo'},
      {label: '前端', iconUrl: FuiIcon2x, key: 'web'},
      {label: '足球', iconUrl: FuiIcon2x, key: 'ball'},
      {label: '旅行', iconUrl: FuiIcon2x, key: 'travel'},
      {label: '旅行', iconUrl: '', key: 'travel'},
    ]
   this.setState({
    categoryList: list
   })
  }
  public renderCategories () {
    return this.state.categoryList.map((item: ICategoryProps) => {
      return (
        <div className="category-item" key={item.key}>
          <ImgIcon src={item.iconUrl} size={'default'}/>
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
