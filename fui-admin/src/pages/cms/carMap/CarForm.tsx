import * as React from 'react'
import {Button} from 'antd'
import CmsService from 'src/service/cms'

import './carForm.less'
interface ICarProps {
    renderDriving: any
    renderLushu: any
}
class CarForm extends React.Component<ICarProps> {
    constructor(props:ICarProps) {
        super(props)
        this.getCarDriving = this.getCarDriving.bind(this)
        this.getCarLushu = this.getCarLushu.bind(this)
    }
    public getCarDriving() {
        CmsService.getCarDeiving()
            .then((res:any) => {
                if (res.code === 0) {
                    //  数据传给父组件
                    this.props.renderDriving(res.data)
                }
            }).catch((err:any) => {
                console.log(err)
            })
    }
    public getCarLushu() {

        CmsService.getCarDeiving()
        .then((res:any) => {
            if (res.code === 0) {
                //  数据传给父组件
                this.props.renderDriving(res.obj)
            }
        }).catch((err:any) => {
            console.log(err)
        })
    }
    public render() {
        return (
            <div className="car-form-wrap">
                <Button type="primary" onClick={this.getCarDriving}>获取车辆轨迹</Button>
                <Button type="primary" onClick={this.getCarLushu}>路书(未完)</Button>
                <Button type="primary">热力图(未完)</Button>
                <Button type="primary">闪烁(未完)</Button>
                <Button type="primary">交通轨迹(未完)</Button>
                <Button type="primary">绘制(未完)</Button>
                <Button type="default">控规-住宅</Button>
                <Button type="dashed">控规-商业</Button>
                <Button type="danger">控规-公园</Button>
            </div>
        )
    }
}
export default CarForm