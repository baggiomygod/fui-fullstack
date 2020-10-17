import * as React from 'react'
// import useCount from './useCount';

export default function index() {
  // const [count, setCount] = useCount(0)
  // tslint:disable-next-line
  // const add = () => setCount(1)
  // ts报错
  // This expression is not callable.
  // Not all constituents of type 'number | Dispatch<SetStateAction<number>>' are callable.
  //   Type 'number' has no call signatures.
  return (
    <div>
      {/* usecount: { count } */}
      {/* <button onClick={add}>add</button> */}
    </div>
  )
}
