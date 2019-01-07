export default {
    formateDate(time:number):string {
        if (!time) {
            return ''
        } else {
            const date = new Date(time)
            const timeMonth = date.getMonth() + 1
            const timeDate = date.getDate()
            const timeHours = date.getHours()
            const timeMinutes = date.getMinutes()
            const timeSeconds = date.getSeconds()
            const MM = timeMonth < 10 ? 0 + '' + timeMonth : timeMonth
            const DD = timeDate < 10 ? 0 + '' + timeDate : timeDate
            const hh = timeHours < 10 ? 0 + '' + timeHours : timeHours
            const mm = timeMinutes < 10 ? 0 + '' + timeMinutes : timeMinutes
            const ss = timeSeconds < 10 ? 0 + '' + timeSeconds : timeSeconds
            return `${date.getFullYear()}-${MM}-${DD} ${hh}:${mm}:${ss}`
        }
    }
}


//  参考时间转换
    //  Date.prototype.Format = function (format) {
    //     var o = {
    //         "M+": this.getMonth() + 1, //月份
    //         "d+": this.getDate(), //日
    //         "h+": this.getHours(), //小时
    //         "m+": this.getMinutes(), //分
    //         "s+": this.getSeconds(), //秒
    //         "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    //         "S": this.getMilliseconds() //毫秒
    //     };
    //     if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    //     for (var k in o)
    //         if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    //     return format;
    // }

    // Date.prototype.toJSON = function () {
    //     return this.Format('yyyy-MM-dd hh:mm:ss');
    // }
