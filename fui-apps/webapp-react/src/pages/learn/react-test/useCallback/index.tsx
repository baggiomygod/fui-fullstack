import * as React from 'react'

const set = new Set()
const set2 = new Set()
export default function useCbTest() {
  const [count, setCount] = React.useState(0)
  const [val, setVal] = React.useState('')

  const usecb = React.useCallback(() => {
    console.log('count:', count)
  }, []) // 传入空，不需要重新生成函数

  // count变化时得到新的usecb 存入set
  set.add(usecb) // set.add(), 传入相同的值不会新增

  // 没有使用useCallback, count改变触发冲渲染是又执行了函数组件
  const noUsecbFn = () => {
    console.log('no use callback')
  }
  set2.add(noUsecbFn)
  return (
    <div>
      <h4>{count}</h4>
      <h4>{val}</h4>
      <h4>set1:{set.size}</h4>
      <h4>set2:{set2.size}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>button +</button>
        <button onClick={() => setVal(val + 'v')}>value +</button>
      </div>
    </div>
  )
}
