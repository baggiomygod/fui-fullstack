import * as React from 'react'
import {Route, Switch, HashRouter } from 'react-router-dom';
import UseErrorBoundary from '../UseErrorBoundary/UseErrorBoundary'
import ErrorBoundary from '../react-test/ErrorBoundary/ErrorBoundary'
import Refs from '../react-test/Refs/Refs'
import ForwardRef from '../react-test/forwardRef'
import FancyButton from '../react-test/Refs/FancyButton'
import CallbackRefs from '../react-test/Refs/CallbackRefs'
import MouseTracker from '../react-test/RenderProps/MouseWithCat/MouseTracker'
import WithMouse from '../react-test/RenderProps/WithMouse'
import FileInput from '../react-test/FileInput/FileInput'
import ReactComponent from '../react-test/ReactComponent'
import SetState1 from '../react-test/SetState/SetState1'
import ReactPureComponent from '../react-test/ReactPureComponent'
import Context from '../react-test/context'

// Hook Component
import UseState from '../react-test/Hook/UseState';
import ExampleWithManyStates from '../react-test/Hook/ExampleWithManyStates';
import UseEffect from '../react-test/Hook/UseEffect';


console.log('ForwardRef:', <ForwardRef />)
class Main extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <HashRouter>
        <ErrorBoundary>
          <Switch>
                <Route exact={true} path="/error-boundary" component={UseErrorBoundary} />
                <Route exact={true} path="/refs" component={Refs} />
                <Route exact={true} path="/forward_ref" component={ForwardRef} />

                <Route exact={true} path="/fancy_button" component={FancyButton} />
                <Route exact={true} path="/callback-refs" component={CallbackRefs} />
                <Route exact={true} path="/mouse-tracker" component={MouseTracker} />
                <Route exact={true} path="/with-mouse" component={WithMouse} />
                <Route exact={true} path="/file-input" component={FileInput} />
                <Route exact={true} path="/react_com" component={ReactComponent} />
                <Route exact={true} path="/state1" component={SetState1} />
                <Route exact={true} path="/pure_comp" component={ReactPureComponent} />
                <Route exact={true} path="/context" component={Context} />


                <Route exact={true} path="/usestate" component={UseState} />
                <Route exact={true} path="/manystate" component={ExampleWithManyStates} />
                <Route exact={true} path="/useeffect" component={UseEffect} />

          </Switch>
        </ErrorBoundary>
      </HashRouter>
    )
  }
}
export default Main
