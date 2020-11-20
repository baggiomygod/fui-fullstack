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
import Children from '../react-test/Children'
import BatchedUpdate from '../react-test/batchedUpdate'
import LifeCycleExample from '../react-test/lifeCycle/Example'
import MemoTest from '../react-test/memo'
import useMemoTest from '../react-test/memo/useMemoTest'
import useMemoTest2 from '../react-test/useMemo'
import useRefTest from '../react-test/Refs/useRef'
import useCallback from '../react-test/useCallback'

// Hook Component
import UseState from '../react-test/Hook/UseState';
import ExampleWithManyStates from '../react-test/Hook/ExampleWithManyStates';
import UseEffect from '../react-test/Hook/UseEffect';
import UseEffectTest1 from '../react-test/Hook/useEffectTest1';
import customHooks from '../react-test/customHooks';
import ReduxTodoList from '../react-test/redux';

// animate
import LetterOpen from '../animate/LetterOpen/letter';
import LetterAnimation from '../LetterAnimation'

// 插件测试
import Calaulator1 from '../calculators/react-calculator'

// video test
import GriffithVideo from '../h5-media/griffith-video'

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
                <Route exact={true} path="/children" component={Children} />
                <Route exact={true} path="/batched_update" component={BatchedUpdate} />
                <Route exact={true} path="/life_cycle_example" component={LifeCycleExample} />

                <Route exact={true} path="/usestate" component={UseState} />
                <Route exact={true} path="/manystate" component={ExampleWithManyStates} />
                <Route exact={true} path="/useeffect" component={UseEffect} />
                <Route exact={true} path="/useeffect_test1" component={UseEffectTest1} />

                <Route exact={true} path="/memo" component={MemoTest} />
                <Route exact={true} path="/useMemoTest" component={useMemoTest} />
                <Route exact={true} path="/useMemo2" component={useMemoTest2} />
                <Route exact={true} path="/useCallback" component={useCallback} />

                <Route exact={true} path="/useRefTest" component={useRefTest} />
                <Route exact={true} path="/customHooks" component={customHooks} />
                <Route exact={true} path="/ReduxTodoList" component={ReduxTodoList} />

                {/* animate */}
                <Route exact={true} path="/letter_open" component={LetterOpen} />
                <Route exact={true} path="/r_calaulator" component={Calaulator1} />
                <Route exact={true} path="/letter_animation" component={LetterAnimation} />

                {/* media */}
                <Route exact={true} path="/griffith_video" component={GriffithVideo} />

          </Switch>
        </ErrorBoundary>
      </HashRouter>
    )
  }
}
export default Main
