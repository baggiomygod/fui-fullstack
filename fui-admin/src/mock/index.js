import Mock from 'mockjs'
const config = require('../config/app-config')
import cmsMock from './mooc'
import blogMock from './blog'

window.gitReview = config.gitReview
if (config.mock) {
    Mock.setup({ timeout: 2000 })
    cmsMock()
    blogMock()
}
