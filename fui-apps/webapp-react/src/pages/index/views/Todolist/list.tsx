import * as React from 'react'
import './list.styl'

interface IProps {
  listData: any[]
}

function list(props: IProps) {
  const { listData } = props
  const renderList = (data: any[]) => {
    return data.map(item => (
      <div className="list-item">
        <div className="todo-td todo-title">{ item.title }</div>
        <div className="todo-td todo-content">{ item.content }</div>
        <div className="todo-td todo-finish-time">{ item.finish_time.substring(0, 10) }</div>
        { !item.status || item.status === 'N'
          ?  <i className="icon iconfont icon-warn-line" />
          : <i className="icon iconfont icon-check-circle" />
        }

      </div>
    ))
  }
  const ListHead = () => (
    <div className="list-head-wrap">
      <div className="list-head-title">任务</div>
      <div className="list-head-content">内容</div>
      <div className="list-head-time">完成时间</div>
      <div className="list-head-statuc">状态</div>
    </div>
  )
  return (
    <div className="todo-list-wrap">
      <ListHead />
      { renderList(listData) }
    </div>
  )
}

export default list
