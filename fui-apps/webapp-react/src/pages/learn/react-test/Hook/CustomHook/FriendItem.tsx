import UseFriendStatus from './UseFriendStatus';
/**
 *
 * @param props
 * 使用自定义Hook
 */
function FriendItem(props: any) {
  const isOnline = UseFriendStatus(props.friend.id)

  return (
    <div style={{color: isOnline ? 'green' : 'red'}}>
      {props.friend.name}
    </div>
  )
}

export default FriendItem
