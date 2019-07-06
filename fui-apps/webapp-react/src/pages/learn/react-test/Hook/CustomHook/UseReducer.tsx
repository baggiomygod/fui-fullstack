/**
 *
 */
import * as React from 'react'

 function useReducer(reducer, initailState) {
   const [state, setState] = React.useState(initailState)

   function dispatch(action) {
     const nextState = reducer(state, action)
     setState(nextState)
   }

   return [state, dispatch]
 }

 export default useReducer
