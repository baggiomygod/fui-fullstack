/**
 * useEffect就是一个EffectHook
 *
 * 它跟class组件中的componentDidmount,componentDidUpdate,componentWillUnmout具有相同的用途
 *
 * 当你调用useEffect时，就是在告诉react在完成对DOM的更改后运行你的“effect”函数。
 *
 *
 */

 import * as React from 'react'
const { useState, useEffect } = React

function EffectHookExample() {
  const [count, setCount] = useState(0)

  // componentDidMount componentDidUpdate是调用
  useEffect(() => {
    console.log(document.getElementById('title'))
  })
  const handleButton = () => {
    return setCount(count + 1)
  }


  // const [isOnline, setIsOnline] = useState(null)

  // function handleStatusChange(status) {
  //   setIsOnline(status.isOnline)
  // }

   // 通过使用Hook,你可以把组件内相关联的effect组织在一起，而不要把它们拆分到不同的声明周期函数里
   useEffect(() => {
     console.log('订阅')
    //  handleStatusChange()
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    // // 返回一个函数清除
    return () => {
      console.log('取消订阅')
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    }
  })

  // if (isOnline === null) {
  //   return 'loading...'
  // }
  return(
    <div>
      <p>count: {count}</p>
      <h1 id="title">count: {count}</h1>
      <button onClick={handleButton}>click</button>
    </div>
  )
}


// function EffectHookExample(props) {
//   const [isOnline, setIsOnline] = useState(null)

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline)
//   }

//   // 通过使用Hook,你可以把组件内相关联的effect组织在一起，而不要把它们拆分到不同的声明周期函数里
//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

//     // 返回一个函数清除
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     }
//   })

//   if (isOnline === null) {
//     return 'loading...'
//   }

//   return isOnline ? 'Online' : 'Offline'
// }
export default EffectHookExample
