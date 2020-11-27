/**
 * 全景看房js
 */
/* tslint:disable */
class Orienter {
    constructor(props) {
        this.lon = 0
        this.lat = 0
        this.direction = 0
        this.fix = 0
        this.os = ""
        return this.initialize.apply(this, props)
    }
    initialize(i) {
        var t = i || {};
        switch (this.orient = t.orient ||
            function() {},
            this.change = t.change ||
                function() {},
            this._orient = this.orientHandler.bind(this), this._change = this.changeHandler.bind(this), this.lon = 0, this.lat = 0, this.direction = window.orientation || 0, this.direction) {
            case 0:
                this.fix = 0;
                break;
            case 90:
                this.fix = -270;
                break;
            case - 90 : this.fix = -90
        }
        this.os = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? "ios": navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") ? "android": ""
    }
    // deviceorientation 方向传感器输出新数据的时候触发
    init() {
        window.addEventListener("deviceorientation", this._orient, !1),
            window.addEventListener("orientationchange", this._change, !1)
    }
    destroy() {
        window.removeEventListener("deviceorientation", this._orient, !1),
            window.removeEventListener("orientationchange", this._change, !1)
    }
    changeHandler() {
        this.direction = window.orientation,
            this.change(this.direction)
    }
    changeDirectionTo(i) {
        this.direction = i
    }
    orientHandler(i) {
        switch (this.os) {
            case "ios":
                switch (this.direction) {
                    case 0:
                        this.lon = i.alpha + i.gamma,
                        i.beta > 0 && (this.lat = i.beta - 90);
                        break;
                    case 90:
                        this.lon = i.gamma < 0 ? i.alpha - 90 : i.alpha - 270,
                            this.lat = i.gamma > 0 ? 90 - i.gamma: -90 - i.gamma;
                        break;
                    case - 90 : this.lon = i.gamma < 0 ? i.alpha - 90 : i.alpha - 270,
                        this.lat = i.gamma < 0 ? 90 + i.gamma: -90 + i.gamma
                }
                break;
            case "android":
                switch (this.direction) {
                    case 0:
                        this.lon = i.alpha + i.gamma + 30,
                            this.lat = i.gamma > 90 ? 90 - i.beta: i.beta - 90;
                        break;
                    case 90:
                        this.lon = i.alpha - 230,
                            this.lat = i.gamma > 0 ? 270 - i.gamma: -90 - i.gamma;
                        break;
                    case - 90 : this.lon = i.alpha - 180,
                        this.lat = -90 + i.gamma
                }
        }
        this.lon += this.fix,
            this.lon %= 360,
        this.lon < 0 && (this.lon += 360),
            this.lon = Math.round(this.lon),
            this.lat = Math.round(this.lat),
            this.orient.apply(this, [{
                a: Math.round(i.alpha),
                b: Math.round(i.beta),
                g: Math.round(i.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            }])
    }
}
const Orienter =  (i) => {
    return i = function() {
        this.initialize.apply(this, arguments)
    }
    
}
