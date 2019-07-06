import * as React from 'react'
import './BottomBar.styl'
import { connect } from 'react-redux' // ?
import { changeTabs } from '../../store/action/tabAction';
import { NavLink, withRouter } from 'react-router-dom'
/**
 * @constructor <BottomBar>
 * @description 底部tabs组件
 */
interface IProps {
  dispatch: any
  activeTab: string
  tabs: any
}
class BottomBar extends React.Component<IProps> {
  constructor(props: any) {
    super(props)
  }
  public changeTabs = (tab: string): void => {
    console.log('------Redux:-------')
    console.log('1. dispatch...')
    this.props.dispatch(changeTabs({
      activeTab: tab
    }))
  }
  public onClick = (key: string) => {
    this.changeTabs(key)
  }

  public renderBars = (tabs: any) => {
    return tabs.map((item: any, index: number) => {
      return (
        <NavLink className="bar-item"
          activeClassName="active"
          to={"/" + item.key}
          key={index}
          onClick={this.changeTabs.bind(this, item.key)}>
          <div className="tab-icon">
            <i className={item.icon} />
          </div>
          <div className="btn-name">{item.label}</div>
        </NavLink>
      )
    })
  }
  public render() {
    // const activeTab: string = this.props.activeTab
    const tabs: any = this.props.tabs
    return (
      <div>
        <div className="bottom-bar-wrap">
          {this.renderBars(tabs)}
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state: any) => ({
  tabs: state.tabReducer.tabs,
  activeTab: state.tabReducer.activeTab,
})
export default withRouter<any, any>(
  connect(
    mapStateToProps
  )(BottomBar)
)
