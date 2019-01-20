import * as React from 'react'

import './List.styl'
/**
 * @constructor <Header />
 * @description Header
 */
// interface IProps {
//   test?: string
// }
class List extends React.Component {
  public state = {
    listData: [
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'},
      {key: '1', label: 'a'}
    ]
  }
  constructor(props: any) {
    super(props)
  }

  public renderList () {
    return this.state.listData.map((item, index) => {
      return (
        <li className="list-item" key={index}>{item.label}</li>
      )
    })
  }
  public render() {
    return (
      <div className="list-wrap">
        <ul className="list">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default List
