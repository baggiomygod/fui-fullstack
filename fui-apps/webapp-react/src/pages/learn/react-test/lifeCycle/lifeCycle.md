# 生命周期

![image](../images/react-live.png)

## 组件生命周期
每个组件都包含”生命周期方法“

### 挂载时
当组件实例被创建并插入DOM中时，其生命周期顺序如下：
1. constructor
2. getDerivedStateFromProps
3. render
4. React更新DOM和refs
5. compondntDidMount

### 更新时
当组件的props或state发生变化时会触发更新。

组件更新的声明周期顺序如下：
1. getDerivedStateFromProps
2. shouldComponentUpadte
3. render
4. getSnapshotBeforeUpdate
5. React更新DOM和refs
6. componentDidUpdate

### 卸载时
当组件从DOM中移除时会调用如下方法：

1. componentWillUnmount

### 错误处理

当渲染过程，声明周期，或子组件的构造函数中抛出错误时

会调用如下方法
- static getDerivedStateFromError
- componentDidCatch


### 即将废弃的声明周期

- componentWillMount
- componentWillUpdate
- componentWillReceiveProps

## 不同阶段
1. render阶段：纯净且不含作用。可能会被react暂停，中止或重新启动
2. Pre-commit阶段，可以读取DOM
3. Commit阶段：可以使用DOM，运行副作用，安排更新


## 常用声明周期方法
- render()
- constructor(): react组件在挂载之前，会调用它的构造函数。
- componentDidMount
- componentDidUpdate
- componentWillUnmount(将废弃)

## 不常用的声明周期方法
- shouldComponentUpdate
- static getDerivedStateFromProps(props, state)
    它在调用render方法之前调用，并且在初始挂载及后续更新时被调用。它应返回一个对象来更新state,如果返回null不更新任何内容

- getSnapshotBeforeUpdate(prevProps, prevState)
    它在最近一次渲染输出之前调用。它使得组件能在发生更改之前从DOM中捕获一些信息。此声明周期的任何返回值将作为参数传递给componentDidUpdate
- getDerivedStateFromError:
    在后代组件抛出错误后被调用。它将抛出的错误作为参数，并返回一个值以更新state

- componentDidCatch
    在后代组件抛出错误调用

