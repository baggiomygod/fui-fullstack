import * as React from 'react'
import './control.styl'

interface IControlProps {
  // dispatch: any
  addTodo?: any
}
// let idSeq = Date.now()
function Control(props: IControlProps) {
  const iptRef: any = React.useRef()
  const onSubmit = (e: any): any => {
    e.preventDefault()
    const newText: string = iptRef.current.value.trim()
    if (!newText) {
      return
    }
    props.addTodo(newText)
    // props.dispatch(createAdd(todo))
    iptRef.current.value = ''
  }
  return (
    <div className="control">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input type="text"
                ref={iptRef}
                className="new-todo"
                placeholder="what need to be done?"/>
      </form>
    </div>
  )
}

export default Control
