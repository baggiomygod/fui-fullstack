import * as React from 'react'

const {
  useState,
  useEffect,
  useReducer
} = React
const FETCH_INIT = 'FETCH_INIT'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILED = 'FETCH_FAILED'

const initState = {
  loading: false,
  error: false,
  data: '',
}

function reducer (state = initState, action: any) {
  switch(action.type) {
    case FETCH_INIT:
      return {
        data: '',
        loading: true,
        error: false,
      }
      case FETCH_SUCCESS:
        return {
          data: action.payload,
          loading: false,
          error: false,
        }
      case FETCH_FAILED:
        return {
          data: '',
          loading: false,
          error: true,
        }
      default:
        return initState
  }
}

const mockData = (url: string) => {
  console.log(url)
  const p = new Promise((resolve, reject) => {
    const random = Math.random()
    if (random > 0.5) {
      resolve({data: 'success'})
    } else {
      reject({data: 'error'})
    }
  })
  return p
}
function useFetch() {
  const [url, setUrl] = useState('/api')
  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: FETCH_INIT}) // 初始化

      try {
        const res = await mockData(url)
        dispatch({
          type: FETCH_SUCCESS,
          payload: res
        })
      } catch (e) {
        dispatch({
          type: FETCH_FAILED
        })
      }
    }
    fetchData()
  }, [url])

  // { loading, error, data, setUrl }
  return {
    ...state,
    setUrl,
  }
}

export default useFetch
