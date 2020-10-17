import * as React from 'react'
const { useState, useEffect } = React

export default function useEffectTest1() {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({width: 1})

  const add = () => {
    setCount(count + 1)
  }
  const changeSize = () => {
    setSize({
        width: Date.now()
      }
    )
  }
  // componentDidMount componentDidUpdate是调用
  /**
   * didmount时调用
   * didupdate是调用
   */
  useEffect(() => {
    if (count < 1) {
      console.log('did mount', count)
    } else {
      console.log('mount update', count)
    }
  })
  /**
   * didmount时调用
   * didupdate是调用
   */
  useEffect(() => {
    console.log('test effect')
  });

  /**
   * didmount时调用
   * size改变时调用
   *
   * count改变时这个函数不会调用
   * size改变第一个effect会被调用
   */
  useEffect(() => {
    console.log('size', size)
  }, [size])
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>add count</button>
      <button onClick={changeSize}>add size</button>
    </div>
  )
}
