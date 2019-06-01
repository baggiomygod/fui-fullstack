import Mock from 'mockjs'
// import {Random} from 'mockjs'
import carMap from './carMap.json'
import personList from './personTable.json'
import personDetail from './personDetail.json'

export default () => {
    Mock.mock(/\/person.*/, /post/i, personList) // 菜单
    Mock.mock(/\/car_driving.*/, /get/i, carMap) // 菜单
    Mock.mock(/\/person.*/, /get/i, personDetail) // 菜单
  }
