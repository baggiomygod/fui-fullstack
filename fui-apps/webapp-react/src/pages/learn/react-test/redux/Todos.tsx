import * as React from 'react'
// import TodoItem from './item'
import './todos.styl'

interface ITodoProps {
  todos: never[]
  removeTodo?: any
  toggleTodo?: any
}
interface ITodoItem{
  id: string | number | undefined
  text: string
  complete: boolean
}
function Todos(props: ITodoProps) {
  const {
    todos,
    removeTodo,
    toggleTodo,
    // dispatch,
  } = props

  const renderList = (arr: never[]) => arr.map((todo: ITodoItem) => {
    return (
      <li key={todo.id} className="item">
        <p>{todo.text}</p>
        <div>
          <button onClick={
            () => toggleTodo(todo.id)
            }>
            {todo.complete ? 'ok' : '代办'}
          </button>
          <button onClick={
            () => removeTodo(todo.id)
            }>
              X
          </button>
        </div>
      </li>
    )
    // return <TodoItem
    //   todo={todo}
    //   key={todo.id}
    //   toggleTodo={toggleTodo}
    //   removeTodo={removeTodo}/>
  })
  return (
    <div className="todos">
      <ul className="list">
      {
        renderList(todos)
      }
      </ul>
    </div>
  )
}

export default Todos
