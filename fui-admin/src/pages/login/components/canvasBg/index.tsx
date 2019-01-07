import * as React from 'react'
import './index.scss'

interface IState {
    warea:any
    dots: any[]
}
// const canvas: any = document.getElementById('cas')

class CanvasBg extends React.Component {
    public state:IState = {
        warea: {
            x: 0,
            y: 0,
            max: 20000
        },
        dots: []
    }

    constructor(props: any) {
        super(props)
        this.casInit = this.casInit.bind(this)
        this.resize = this.resize.bind(this)
        this.animate = this.animate.bind(this)
    }
    public componentDidMount() {
        // this.casInit()
    }
    public casInit() {
        const canvas: any = document.getElementById('cas')
        this.resize()
        window.onresize = this.resize

        // 鼠标活动时获取鼠标的坐标
        window.onmousemove = (e) => {
            e = e || window.event
            this.state.warea.x = e.clientX
            this.state.warea.y = e.clientY
        }
        window.onmouseout = (e) => {
            this.state.warea.x = 0;
            this.state.warea.y = 0;
        };

        for (let i = 0; i < 100; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const xa = Math.random() * 2 - 1
            const ya = Math.random() * 2 - 1

            this.state.dots.push({
                x,
                y,
                xa,
                ya,
                max: 6000
            })
        }

        setTimeout(() => {
            this.animate()
        }, 500)
    }
    public resize() {
        const canvas:any = document.getElementById('cas')
        canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    public animate() {
        const canvas:any = document.getElementById('cas')
        // ...
        const ctx = canvas.getContext('2d')

        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        const ndots = [this.state.warea].concat(this.state.dots)

        this.state.dots.forEach((dot) => {
            // 粒子位移
            dot.x += dot.xa
            dot.y += dot.ya

            // 遇到边界将加速度反向
            dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;
            dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;

            // 绘制点
            ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

            // 循环比对粒子间的距离
            for(const d2 of ndots){
                if (dot === d2 || d2.x === null || d2.y === null) { 
                    continue
                }

                const xc = dot.x - d2.x;
                const yc = dot.y - d2.y;

                // 两个粒子之间的距离
                const dis = xc * xc + yc * yc;

                // 距离比
                let ratio;

                // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
                if (dis < d2.max) {

                    // 如果是鼠标，则让粒子向鼠标的位置移动
                    if (d2 === this.state.warea && dis > (d2.max / 2)) {
                        dot.x -= xc * 0.03;
                        dot.y -= yc * 0.03;
                    }

                    // 计算距离比
                    ratio = (d2.max - dis) / d2.max;

                    // 画线
                    ctx.beginPath();
                    ctx.lineWidth = ratio / 2;
                    ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(d2.x, d2.y);
                    ctx.stroke();
                }
            }

            // 将已经计算过的粒子从数组中删除
            ndots.splice(ndots.indexOf(dot), 1);
        })
        window.requestAnimationFrame(this.animate);
    }
    public render() {
        return (
            <canvas id="cas" />
        )
    }
}

export default CanvasBg