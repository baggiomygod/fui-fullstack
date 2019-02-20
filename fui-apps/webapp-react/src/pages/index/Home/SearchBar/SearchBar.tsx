import * as React from 'react'
import { NavLink } from 'react-router-dom'
import EditModal from '../../components/EditModal/EditModal';

import './SearchBar.styl'
/**
 * @constructor <SearchBar />
 * @description SearchBar
 */
interface IProps {
  test?: string
}
interface IState {
  editModalVisible: boolean
}
class SearchBar extends React.Component<IProps> {
  public state:IState = {
    editModalVisible: false
  }
    constructor (props: any) {
        super(props)
    }
    public handleEdit  = () => {
      this.setState({
        editModalVisible: !this.state.editModalVisible
      })
    }
    public render () {
      const {editModalVisible} = this.state
        return (
            <div className="search-bar-wrap">
                <div className="logo">F</div>
                <NavLink to="/search" className="search">
                  <p className="search-btn">apple</p>
                </NavLink>
                <div className="setting" onClick={this.handleEdit}>
                  <i className="icon iconfont icon-fill" />
                </div>
                {editModalVisible && <EditModal handleClick={this.handleEdit} />}
            </div>
        )
    }
}

export default SearchBar
