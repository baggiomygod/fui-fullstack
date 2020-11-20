import * as React from 'react'

const { useMemo, useState, memo, useCallback } = React

interface IProps {
  name: string
}
interface ICounter {
  count: number
  onClick: any
}
// count不变 Counter不会重新render
const Counter = memo((props: ICounter) => {
  console.log('Counter render2')
  return (
    <h1 onClick={props.onClick}>Counter: {props.count}</h1>
  )
})

export default function useMemoTest(props: IProps) {
  const [count, setCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  // count发生变化，double重新计算
  // [true or false],
  // count <3 or >3时数组中依赖的值不变，double不会重新计算
  // count为3时变化为true，double重新计算
  // count为4时变化为false，double重新计算
  const double = useMemo(() => {
    return count * 2
  }, [count === 3])

  // const half = useMemo(() => {}, [])

  const add = () => {
    setCount(count + 1)
  }
  const handleH = () => {
    console.log('click h1')
    setClickCount(() => clickCount + 1)
  }
  // const onClickUseMemo: any = useMemo(() => {
  //   return handleH
  // }, [])

  // 使用useCallback 同上面的useMemo，省略了一层函数
  const onClickUseCallback: any = useCallback(handleH, [])
  return (
    <div>
      <button onClick={add}>click add count</button>
      {count},
      {double}
      <br />
    {/* 使用useMemo或useCallback可以优化性能， */}
      <Counter count={double} onClick={onClickUseCallback}/>

      {/* 传入普通函数每次点击都会触发render */}
      <Counter count={double} onClick={handleH}/>
    </div>
  )
}
