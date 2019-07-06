import { useReducer } from "react";

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, [])
  function handleAddClick(text) {
    dispatch({
      type: 'add',
      text
    })
  }
}
