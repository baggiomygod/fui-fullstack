import * as React from 'react'
import ChatAPI from './ChatAPI'

function UseFriendStatus(friendId: any) {
  const [isOnline, setIsOnline] = React.useState(null);

  React.useEffect(() => {
    function handleStatusChange(status: any) {
      setIsOnline(status.isOnline)
    }

    // 订阅
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)

    return () => {
      // 取消订阅
      ChatAPI.unsubscribeToFriendStatus(friendId, handleStatusChange)
    }
  })

  return isOnline
}

export default UseFriendStatus
