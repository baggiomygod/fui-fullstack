import * as React from 'react'
// import propTypes from 'prop-types'

interface IProp{
  name: string
}
class Greeting extends React.Component<IProp> {
  public render() {
    return (
      <h1>hello, {this.props.name}</h1>
    )
  }
}

// Greeting.propTypes = {
//   name: propTypes.string
// }

export default Greeting
