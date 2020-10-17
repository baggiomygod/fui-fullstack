import * as React from 'react'
import CommonHeader from 'src/components/header'
import AddTodo from './add'
import { connect } from 'react-redux'
import { fetchTodoList } from 'src/pages/index/store/action/todosAction'

import List from './List'
interface IProps {
  todoList: any
  getTodoList: () => void
  [propName: string]: any
}
const { useEffect } = React

const todolist = (props: IProps) => {
  const { todoList } = props
  const getTodoList = () => {
    props.fetchTodoList()
  }
  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div className="todolist-container">
      <CommonHeader>Todo List</CommonHeader>
      <List listData={todoList} />
      <AddTodo />
    </div>
  )
}

const mapStateProp = (state: any) => {
  return {
    todoList: state.todosReducer.todoList
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodoList() {
      dispatch(fetchTodoList())
  },
  }
}

export default connect(mapStateProp, mapDispatchToProps)(todolist)
