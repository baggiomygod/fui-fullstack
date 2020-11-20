import * as React from 'react'

interface IPerson {
  age: number
}

interface IProps {
  name: string
  person: IPerson
}

// export default class Child extends React.Component<IProps> {
//   public shouldComponentUpdate(nextProps: any, nextState: any) {
//     if (nextProps.name === this.props.name) {
//       return false
//     }
//     return true
//   }
//   public render() {
//     console.log('render Child')
//     return (
//       <div>
//         Child...
//         { this.props.name }
//       </div>
//     )
//   }
// }

// export default class Child extends React.PureComponent<IProps> {
//     public render() {
//       console.log('render Child')
//       return (
//         <div>
//           Child...
//           { this.props.name }
//           { this.props.count }
//           <br />
//           age:{ this.props.person.age }
//         </div>
//       )
//     }
//   }


function Child(props: IProps) {
  console.log('render ')
  return (
    <div>
      Child...
      { props.name }
      <br />
      age:{ props.person.age }
    </div>
  )
}


// export default Child
export default React.memo(Child) // 实现PureComponent浅比较功能
