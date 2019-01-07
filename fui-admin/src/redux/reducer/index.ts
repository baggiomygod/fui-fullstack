
/**
 * reducer
 */
// import { combineReducers } from 'redux'
import { type } from '../action'

const ebikeData = (state: any, action: any) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
        default:
            return {...state}
    }
}

export default ebikeData