import * as React from 'react'

/**
 *
 * @param defaultCount
 * 自定义hooks
 */
const useCount = (defaultCount: number) => {
  const [count, setCount] = React.useState(defaultCount)
  const it: any = React.useRef()

  React.useEffect(() => {
    it.current = setInterval(() => {
      console.log('add...', count)
      setCount(() => count + 1)
    }, 1000)
  }, [])

  React.useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current)
    }
  });
  return [count, setCount]
}

export default useCount
