/**
 *
 */
import * as React from 'react'

 function useReducer(reducer: any, initailState: any) {
   const [state, setState] = React.useState(initailState)

   function dispatch(action: any) {
     const nextState = reducer(state, action)
     setState(nextState)
   }

   return [state, dispatch]
 }

 export default useReducer
