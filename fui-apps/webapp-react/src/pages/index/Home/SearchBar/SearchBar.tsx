import * as React from 'react'
import './SearchBar.styl'
/**
 * @constructor <SearchBar />
 * @description SearchBar
 */
interface IProps {
  test?: string
}
class SearchBar extends React.Component<IProps> {
    constructor (props: any) {
        super(props)
    }

    public render () {
        return (
            <div className="search-bar-wrap">
                <div className="logo">F</div>
                <div className="search">
                  <p className="search-btn">apple</p>
                </div>
                <div className="setting">
                  <i className="icon iconfont icon-caidan" />
                </div>
            </div>
        )
    }
}

export default SearchBar
