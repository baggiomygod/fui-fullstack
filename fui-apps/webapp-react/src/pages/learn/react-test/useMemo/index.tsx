import * as React from 'react'

export default function useMemoTest() {
  const [count, setCount] = React.useState(0)
  const [value, setValue] = React.useState('')

  // useMemo缓存了结果，count变化时才更新结果，value变化不会重新渲染
  const expensiveMemo = React.useMemo(() => {
    let sum = 0
    sum = count * 10
    console.log('sum:', sum)
    return sum
  }, [count])

  // 没有缓存优化，value, count变化时都会再次执行expensiveNoMemo(), 导致重新渲染
  const expensiveNoMemo = () => {
    let sum = 0
    sum = count * 10
    console.log('sum2:', sum)
    return sum
  }

  return (
    <div>
      <p>{count}-{value}-{expensiveMemo}</p>
      <p>{expensiveNoMemo()}</p>
      <div onClick={() => setCount(count + 1)}>setCount</div>
      <div onClick={() => setValue(value + 's')}>setValue</div>
    </div>
  )
}
