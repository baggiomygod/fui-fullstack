import * as React from 'react';
import './App.css';
// import logo from './logo.svg';

// 引入less styl没生效
// import '../pages/demo/style.less'
// import '../pages/demo/style.styl'
import './app.less'
class App extends React.Component {
  public render() {
    return (
      <div className="app-wrap">
          {this.props.children}
      </div>
    );
  }
}

export default App;
