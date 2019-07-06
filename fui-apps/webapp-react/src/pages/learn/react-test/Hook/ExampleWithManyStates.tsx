import * as React from 'react'
const useState = React.useState
function ExampleWithManyStates() {
  // 声明多个state 变量
  const [age, setAge] = useState(42)
  const [fruit, setFruit] = useState('apple')
  // const [todos, setTodos] = useState([{text: 'Learn Hooks'}])
  const handleAddAge = () => {
    return setAge(age + 1)
  }
  const handlesetFruit = () => {
    return setFruit(fruit + '!')
  }
  // const handleSetTodos = () => {
  //   return setTodos(todos.push({text: 'www'})))
  // }
  return(
    <div>
      <p>age {age}</p>
      <button onClick={handleAddAge}>add age!</button>

      <p>f: {fruit}</p>
      <button onClick={handlesetFruit}>add f!</button>

      {/* <p>todo: {todos}</p>
      <button onClick={handleSetTodos}>add todo!</button> */}

    </div>
  )
}

export default ExampleWithManyStates
