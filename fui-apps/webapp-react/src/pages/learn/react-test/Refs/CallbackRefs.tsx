import * as React from 'react'

class CallbackRefs extends React.Component<any>{
  public textInput:any = null
  public setTextInputRef = (element: any) => {
    console.log('ele:', element)
    this.textInput = element
  }
  //
  public focusTextInput = () => {
    console.log('textinput:', this.textInput)
    if (this.textInput) {
      this.textInput.focus();
    }
  }
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    // 1. 组件挂载时调用
    this.focusTextInput()
  }
  public render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" value="button" onClick={this.focusTextInput}/>
      </div>
    )
  }
}

export default CallbackRefs
