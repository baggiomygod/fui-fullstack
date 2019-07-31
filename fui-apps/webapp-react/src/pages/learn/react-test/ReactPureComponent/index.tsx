import * as React from 'react'

// class IndexPage extends React.Component{
// // class IndexPage extends React.PureComponent{
//   public state = {
//     isShow: false,
//     obj: { a: 1 }
//   }
//   constructor(props: any) {
//     super(props);
//     console.log('constructor');
//   }
//   public changeState = () => {
//     this.setState({
//       isShow: true
//     })
//   };
//   public render() {
//     console.log('render');
//     return (
//       <div>
//         <button onClick={this.changeState}>点击</button>
//         <div>{this.state.isShow.toString()}</div>
//       </div>
//     );
//   }
// }

class IndexPage extends React.PureComponent{
  public state = {
    arr: [1]
  }
  constructor(props: any) {
    super(props);
    console.log('constructor');
  }
  public changeState = () => {
    const { arr } = this.state;
    // arr.push(2);
    console.log(arr);
    this.setState({
      // arr
      arr: [...arr, 2]
      // arr: arr.slice()
    })
  };
  public render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>
          {this.state.arr.map((item) => {
            return item;
          })}
        </div>
      </div>
    );
  }
}

export default IndexPage
