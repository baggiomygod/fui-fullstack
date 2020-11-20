import * as React from 'react';

import {  bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import Header from '@travel/components/header'
import Header from '../../components/header'
import DepartDate from './components/DepartDate'
import HighSpeed from './components/HighSpeed'
import Journey from './components/Journey'
import Submit from './components/Submit'
import CitySelector from '../../components/CitySelector';

// import { h0 } from '../../utils/fp'

import {
  exchangeFromTo,
  showCitySelector,
  toggleHighSpeed,
  setSelectedCity,
  hideCitySelector,
  fetchCityData,
} from '../../store/actions'

import './index.styl'

const {
  useCallback,
  useMemo
} = React

interface ICbs {
  exchangeFromTo: () => void
  showCitySelector: (currentSelectingLeftCity: any) => (dispatch: any) => void;
}
function TravelHome(props: any) {
  const {
    dispatch,
    from,
    to,
    departDate,
    highSpeed,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
} = props

  // 返回按钮 向子组件传递函数
  // onback如果每次都是新的句柄，每次返回都会重复渲染
  // 因此引入useCallback， 避免不必要的重渲染
  const onBack = useCallback(() => {
    console.log('back...')
  }, [])
  // useMemo 性能优化，避免不必要的渲染
  const cbs:ICbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector,
      },
      dispatch
    )
  }, [])

  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      onClick: showCitySelector,
    }, dispatch)
  }, [])

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators({
      toggle: toggleHighSpeed,
    }, dispatch)
  }, [])

  // useMemo返回变量，
  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
        {
            onBack: hideCitySelector,
            fetchCityData,
            onSelect: setSelectedCity,
        },
        dispatch
    );
}, []);
  return (
    <div className="trvel-container">
      <div className="header-wrapper">
        <Header onBack={onBack} title="车票" />
      </div>
      <form action="/query" className="form">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs}/>
        <Submit />
      </form>
      <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                {...citySelectorCbs}
            />
    </div>
  )
}

function mapStateToProps(state: any) {
  console.log('map state:', state)
  return state
}
function mapDispatchToProps(dispatch: any) {
  return { dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(TravelHome)
