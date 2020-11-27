function IsPC() {
    const a = navigator.userAgent;
    const d = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    let b = true;
    for (const c of d) {
        if (a.indexOf(d[c]) > 0) {
            b = false;
            break
        }
    }
    return b
}

export default {
    IsPC
}