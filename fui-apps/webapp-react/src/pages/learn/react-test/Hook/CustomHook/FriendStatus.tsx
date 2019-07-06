import UseFriendStatus from './UseFriendStatus';
// 使用自定义Hook
function FriendStatus(props: any) {
  const isOnline = UseFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus
