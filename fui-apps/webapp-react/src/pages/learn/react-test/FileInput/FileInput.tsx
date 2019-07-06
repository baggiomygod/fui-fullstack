import * as React from 'react'

class FileInput extends React.Component<any>{
  public fileInput: any = React.createRef()
  constructor(props: any) {
    super(props)
  }
  public handleSubmit = (e: any) => {
    e.preventDefault()
    alert(this.fileInput.current.files[0].name)
  }
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>name:
          <input type="file" ref={this.fileInput}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default FileInput
