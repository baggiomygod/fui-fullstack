import * as React from 'react'

interface IPorps {
  myRef: any
}
class RefsTest extends React.Component<IPorps>{
  // 1. 通过React.createRef创建一个React ref，并赋值给myRef变量
  public myRef:any = React.createRef()
  constructor(props: IPorps) {
    super(props)
  }
  componentDidMount () {
    console.log('myRef:', this.myRef)
  }
  public render() {
    // 3. react传递myRef给forwardRef(props, refs)内函数，作为第二个参数
    const FacyButton = React.forwardRef((props: any, ref: any) => (
      // 4. 向下转发myRef参数到<button ref={ref}>, 将其指定为jsx属性
      // 5. 当ref挂载完成，ref.current将指向<button>DOM节点
      <button ref={ref} className="fancy-button">
        {props.children}
      </button>
    ))
    return (
      <div>
        {/* 2. 通过ref属性将 myRef向下传递下去*/}
        <FacyButton ref={this.myRef}>Click!!</FacyButton>
      </div>
    )
  }
}
export default RefsTest
