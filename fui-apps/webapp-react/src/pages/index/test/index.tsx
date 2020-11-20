import React from 'react'
import testService from 'src/http-service/test'


export default function test() {
  const getData = async () => {
    Promise.race()
    await testService.getTestList1()
    await testService.getTestList2()
  }
  return (
    <div>
      <button onClick={getData}>click me</button>
    </div>
  )
}
