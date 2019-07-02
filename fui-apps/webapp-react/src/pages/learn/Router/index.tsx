import * as React from 'react'
import {Route, Switch, HashRouter } from 'react-router-dom';
import UseErrorBoundary from '../UseErrorBoundary/UseErrorBoundary'
import ErrorBoundary from '../react-test/ErrorBoundary/ErrorBoundary'
import Refs from '../react-test/Refs/Refs'


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
          </Switch>
        </ErrorBoundary>
      </HashRouter>
    )
  }
}
export default Main
