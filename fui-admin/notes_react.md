### react生命周期
    - getDefaultProps
    - getInitialState
    - componentWillMount: ***
    - render: ***
    - componentDidMount
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - componentDidUpdate
    - componentDidUnmount


### 单个组件生命周期
      initial render
            |
            |
      constructor()
    初始化一个组件的实例
            |
            |
    compenentWillMount()
      组件渲染之前调用
            |
            |
         render()
           渲染
            |
            |
    componentDidMount()
           更新
            |
            |
    componentWillUnmount()
           销毁
    

### 多个组件生命周期
        父组件render()
            |
            |
    componentWillReceiveProps()
            |
            |
    shouleComponentUpdate<————this.setState()
            |
            |
    compenentWillMount()<————this.forceUpdate()
      组件渲染之前调用
            |
            |
         render()
           渲染
            |
            |
    componentDidUpdate()
           更新
            |
            |
    componentWillUnmount()
           销毁