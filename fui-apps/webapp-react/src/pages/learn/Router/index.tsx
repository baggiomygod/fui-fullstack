import * as React from 'react'
import {Route, Switch, HashRouter } from 'react-router-dom';
import UseErrorBoundary from '../UseErrorBoundary/UseErrorBoundary'
import ErrorBoundary from '../react-test/ErrorBoundary/ErrorBoundary'
import Refs from '../react-test/Refs/Refs'
// import FancyButton from '../react-test/Refs/FancyButton'
import CallbackRefs from '../react-test/Refs/CallbackRefs'
import MouseTracker from '../react-test/RenderProps/MouseWithCat/MouseTracker'
import WithMouse from '../react-test/RenderProps/WithMouse'
import FileInput from '../react-test/FileInput/FileInput'

// Hook Component
import UseState from '../react-test/Hook/UseState';
import ExampleWithManyStates from '../react-test/Hook/ExampleWithManyStates';
import UseEffect from '../react-test/Hook/UseEffect';

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
                {/* <Route exact={true} path="/fancy-button" component={FancyButton} /> */}
                <Route exact={true} path="/callback-refs" component={CallbackRefs} />
                <Route exact={true} path="/mouse-tracker" component={MouseTracker} />
                <Route exact={true} path="/with-mouse" component={WithMouse} />
                <Route exact={true} path="/file-input" component={FileInput} />


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
