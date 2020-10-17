import * as React from 'react'
import {
  MyContext,
  ButtonContext
 } from './my-context'

function Child(props: any, context: any) {
  // useContext or ContextType
  const value:string = React.useContext(MyContext);
  const count:number = React.useContext(ButtonContext);
  return (
      <div>
        <p>{value}</p>
        <p>{count}</p>
      </div>
      )
}
export default Child

// {/* 多个context 且嵌套 ; Comsumer*/}
// <MyContext.Consumer>
//     {
//       (value: string) => (
//         <ButtonContext.Consumer>
//           { (count: number) => (
//             <>
//               <p>value: {value}</p>
//               <p>count: {count}</p>
//             </>
//           ) }
//         </ButtonContext.Consumer>
//       )
//     }
//   </MyContext.Consumer>

