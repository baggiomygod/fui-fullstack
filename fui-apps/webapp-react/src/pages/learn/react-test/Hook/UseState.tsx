import * as React  from 'react'
// tslint:disable-next-line
// import style from './useState.css'
import './useState.css'

function UseState() {
  // useState就是一个HOOK
  const [count, setCount] = React.useState(0)
  const handleButton = () => {
    return setCount(count + 1)
  }
  return(
    <div className="container">
      <p>you clicjed {count} times</p>
      <button onClick={handleButton}>click!</button>
    </div>
  )
}

export default UseState
