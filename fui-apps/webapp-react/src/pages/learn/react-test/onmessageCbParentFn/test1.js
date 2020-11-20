
// 父组件
function parent() {
  const [obj, setObj] = useState({})

  useEffect(
    () => {
      // fetch
      setObj(data)
    }, [])

  const forceSubmit = () => {
    console.log(obj) // obj 为{}
  }
}
// ------------------------------
// 子组件方法
const workOnMsg = () => {
  timeWorker.onmessage = (e) => {
    // forceSubmit()
    // 距离结束时间s
    const durationTime = e.data;
    if (durationTime === 0) {
      forceSubmit()
    }
  }
}
