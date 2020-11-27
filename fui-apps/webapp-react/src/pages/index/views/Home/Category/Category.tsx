import * as React from 'react'
import {ImgIcon} from 'src/fui'
import { NavLink } from 'react-router-dom'

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
  text?: string
  url: ''
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
      {label: '摄影', iconUrl: FuiIcon2x, key: 'photo', text: '', url: ''},
      {label: '前端', iconUrl: FuiIcon2x, key: 'web', text: '', url: 'web_list'},
      {label: '足球', iconUrl: FuiIcon2x, key: 'ball', text: '', url: ''},
      {label: '旅行', iconUrl: '', key: 'travel', text: 'T', url: ''},
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
            <div className="category-item" key={item.key}>
        <NavLink to={item.url} >
              <ImgIcon src={item.iconUrl}
                        size={'large'}
                        shape="circle"
                        iconText={item.text} />
              <p className="text">{item.label}</p>
        </NavLink>
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
