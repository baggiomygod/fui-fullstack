
const stringUtils = {
    // 下划线转驼峰
    underlineTocamelCase(string){ 
        // Support: IE9-11+
        return string.replace( /_([a-z])/g, function( all, letter ) {
            return letter.toUpperCase();
        });
    },
}
module.exports = {
    // 对象中下划线可以转换为驼峰
    ObjectKeysCamelCase(objArr) {
        const copyArr = objArr.slice()
        copyArr.forEach(obj => {
            const keys = JSON.parse(obj).keys
            keys.forEach(item => {
                const before = obj[item]
                const key = stringUtils.underlineTocamelCase(item)
                obj[key] = before
                delete obj[item]
              })
        })
        console.log(copyArr)
        
        return copyArr
    },
    FormateDate() {
        
    }
}