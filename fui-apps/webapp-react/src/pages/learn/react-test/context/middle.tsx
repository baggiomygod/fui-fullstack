import * as React from 'react'
import Child from './children'
function Middle(props: any, context: any) {
  return (
    <div>
        middle
        <Child />
    </div>
  )

}

export default Middle
