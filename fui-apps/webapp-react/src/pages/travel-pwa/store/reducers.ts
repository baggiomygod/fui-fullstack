import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA,
    ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    ACTION_SET_HIGH_SPEED,
    ACTION_SET_DEPART_DATE,
  } from './actions'

  // 返回state的新值
export default {
  from(state = '杭州', action: any) {
    const { type, payload } = action
    switch(type) {
      case ACTION_SET_FROM:
        return payload
        default:
          break;
    }
    return state
  },
  to(state = '拉萨', action: any) {
    const { type, payload } = action
    switch(type) {
      case ACTION_SET_TO:
        return payload
        default:
          break;
    }
    return state
  },
  isCitySelectorVisible(state = false, action: any) {
    console.log('2-1reducers city: isCitySelectorVisible', action)
      const { type, payload } = action;
      switch (type) {
          case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
              return payload;
          default:
      }
      return state;
  },
  currentSelectingLeftCity(state = false, action: any) {
    console.log('2-2reducers currentSelectingLeftCity:', action)
      const { type, payload } = action;
      switch (type) {
          case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
              return payload;
          default:
      }

      return state;
  },
  cityData(state = null, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_SET_CITY_DATA:
            return payload;
        default:
    }

    return state;
},
isLoadingCityData(state = false, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_SET_IS_LOADING_CITY_DATA:
            return payload;
        default:
    }

    return state;
},
isDateSelectorVisible(state = false, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
            return payload;
        default:
    }

    return state;
},
highSpeed(state = false, action: any) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_SET_HIGH_SPEED:
            return payload;
        default:
    }

    return state;
},
departDate(state = Date.now(), action: any) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_SET_DEPART_DATE:
            return payload;
        default:
    }

    return state;
},
}
