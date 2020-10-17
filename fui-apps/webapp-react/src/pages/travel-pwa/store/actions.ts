export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO';
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = 'SET_CURRENT_SELECTING_LEFT_CITY';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA';
export const ACTION_SET_CITY_DATA = 'SET_CITY_DATA';
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'SET_IS_DATE_SELECTOR_VISIBLE';

export function setFrom(from: any) {
  return {
    type: ACTION_SET_FROM,
    payload: from,
  }
}

export function setTo(to: any) {
  return {
    type: ACTION_SET_TO,
    payload: to,
  }
}

export function setIsLoadingCityData(isLoadingData: boolean) {
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload: isLoadingData
  }
}

export function setCityData(cityData: any) {
  console.log('set city data:', cityData)
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData,
  }
}

export function exchangeFromTo() {
  return (dispatch: any, getState: any) => {
      const { from, to } = getState();
      dispatch(setFrom(to));
      dispatch(setTo(from));
  };
}

// 显示城市选择
export function showCitySelector(currentSelectingLeftCity: any) {
  console.log('1.actions: showCitySelector', currentSelectingLeftCity)
  return (dispatch: any) => {
      dispatch({
          type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
          payload: true,
      });

      dispatch({
          type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
          payload: currentSelectingLeftCity,
      });
  };
}

// 隐藏城市选择时
export function hideCitySelector() {
  console.log('hide')
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false,
  }
}

export function setSelectedCity(city: any) {
  return (dispatch: any, getState: any) => {
      const { currentSelectingLeftCity } = getState();

      // 如果左侧选中，设置始发站
      if (currentSelectingLeftCity) {
          dispatch(setFrom(city));

      // 如果右侧被选中，设置目的地站
      } else {
          dispatch(setTo(city));
      }

      // 隐藏城市选择
      dispatch(hideCitySelector());
  };
}



export function toggleHighSpeed() {
  return (dispatch: any, getState: any) => {
    const { highSpeed } = getState()
    dispatch({
      type: ACTION_SET_HIGH_SPEED,
      payload: !highSpeed,
    })
  }
}

export function showDateSelector() {
  return {
      type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
      payload: true,
  };
}

export function hideDateSelector() {
  return {
      type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
      payload: false,
  };
}

export function setDepartDate(departDate: any) {
  return {
      type: ACTION_SET_DEPART_DATE,
      payload: departDate,
  };
}

// interface ICityData {
//   expires: number
//   data: any
// }
export function fetchCityData() {
  return async (dispatch: any, getState: any) => {
    const { isLoadingCityData } = getState();
    if (isLoadingCityData) {
      return
    }
    // const lsCityCache: any = localStorage.getItem('city_data_cache')
    // const cache: ICityData = JSON.parse(lsCityCache)
    // // 如果当前时间在过期时间之前，使用缓存数据
    // if (cache && Date.now() < cache.expires) {
    //   dispatch(setCityData(cache.data))
    // }
    // 设置loading 为true
    dispatch(setIsLoadingCityData(true));
      fetch('/api/travel/cities?_' + Date.now())
        .then(res => res.json())
        .then((res: any) => {
          dispatch(setCityData(res.data));
          localStorage.setItem(
            'city_data_cache',
            JSON.stringify({
              expires: Date.now() + 60 * 1000, // 1分钟后过期
              data: res.data,
            })
          )
      dispatch(setIsLoadingCityData(false))
      }).catch(() => {
        dispatch(setIsLoadingCityData(false))
      })
  }
}
