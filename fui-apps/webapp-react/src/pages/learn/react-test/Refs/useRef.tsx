import * as React from 'react'
const {
  // useImperativeHandle,
  useRef,
  // forwardRef,
  useEffect,
  useState,
 } = React

// const Child = forwardRef(
//   (props: any, ref: any) => {
//     useImperativeHandle(ref, () => ({
//       speak: () => {
//         console.log('speak...')
//       },
//     }))
//     return (
//       <div>
//         child...
//       </div>
//     )
//   }
// )

/**
 * useRef 共享数据存储
 */
export default function useRefTest() {
  const [count, setCount] = useState(0)
  // let itTimer: any // 普通变量，每次setInterval都会重新复制，clearInterval无效
  const itTimer: any = useRef() // useRef保存变量, 可以清楚定时器
  const handleAdd = () => {
    setCount(() => count + 1)
  }
  useEffect(() => {
    itTimer.current = setInterval(() => {
      console.log(Date.now())
    }, 1000)
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(itTimer.current)
    }
  });
  return (
    <div>
      count: {count}
      <button onClick={handleAdd}>click</button>
    </div>
  )
}
