export default {
  // 订阅
  subscribeToFriendStatus(id: string, callback: any) {
    console.log('id:', id)
    callback({isOnline: true})
  },
  // 取消订阅
  unsubscribeToFriendStatus(id: string, callback: any) {
    console.log('id:', id)
    callback({isOnline: false})
  },
}
