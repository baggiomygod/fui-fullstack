import Mock from 'mockjs'
// const config = require('../app-config')
import cmsMock from './mooc'
import blogMock from './blog'
const config = { mock: true }
if (config.mock) {
    Mock.setup({ timeout: 2000 })
    cmsMock()
    blogMock()
}
