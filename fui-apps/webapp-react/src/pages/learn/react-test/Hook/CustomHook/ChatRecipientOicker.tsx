import { useState } from "react";
import UseFriendStatus from './UseFriendStatus';

const friendList: any[] = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'},
]

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1)
  const isRevOnline = UseFriendStatus(recipientID)

  return (
    <>
      {isRevOnline}
    </>
  )
}
