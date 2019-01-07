
import * as React from 'react'
import { Row, Col } from 'antd';
import Utils from '../../../utils/utils'
import Axios from '../../../axios'
import './index.less'
// state 接口
const axios = new Axios()
interface IMyComponentState {
    userName: string
    sysTime: string
    weather: string
    wind: string
    dayPictureUrl: string
}
// interface IProps {}
interface IWeatherAPIRes {
    status:string
    message:string
    results: any // 对象应该是什么类型
}
class Header extends React.Component<{}, IMyComponentState> {
    public componentWillMount() {
        this.setState({
            userName: 'admin'
        })
        setInterval(() => {
            const sysTime:string = Utils.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIData()
    }
    // 通过json的方式获取百度API的天气数据
    public getWeatherAPIData() {
        const city:string = '杭州'
        axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=dGP9r05crHNpG1yDHBMsOUKwXYM6Y9LD`
        }).then((res:IWeatherAPIRes) => {
            if (res.status === 'success') {
                console.log(res.results)
                const weatherData = res.results[0].weather_data[0]
                this.setState({
                    weather: weatherData.weather,
                    dayPictureUrl: weatherData.dayPictureUrl,
                    wind:weatherData.wind
                })
            }
        })
    }
    public render () {
        return (
            <div className="header-wrap">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎{this.state.userName}</span>
                    </Col>
                </Row>
                <Row className="breadceumb">
                    <Col span={4} className="breadceumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="weather-date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-text">{this.state.weather}, {this.state.wind}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header