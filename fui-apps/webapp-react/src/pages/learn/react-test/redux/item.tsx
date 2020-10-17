import * as React from 'react'

interface ITodoItem{
  id: string | number | undefined
  text: string
  complete: boolean
}
interface ITodoEle {
  todo: ITodoItem
  key: string | number | undefined
  toggleTodo: any
  removeTodo: any
}
const TodoItem = (prop: ITodoEle) => {
  const { todo, key, toggleTodo, removeTodo } = prop
  return (
    <li className="item" key={key}>
      {todo.text}
      <button onClick={toggleTodo(todo.id)}>{ todo.complete ? 'ok' : '待完成' }</button>
      <i onClick={removeTodo(todo.id)}>x</i>
    </li>
  )
}

export default TodoItem
