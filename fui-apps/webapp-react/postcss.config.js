const autoprefixer = require('autoprefixer');

/* 1. css编译完成后通过postcss优化css;
   2. 这里postcss通过autoprefixer组件去优化编译好的css；
   3. autoprefixer 自动添加需要加前缀的css属性；
*/
module.exports = {
  // parser: require('postcss-stylus'),
  // plugins: [
  //   require('postcss-import'),
  //   require('precss'),
  //   require('cssnano'),
  //   require('postcss-pxtorem')({
  //     "rootValue": 37.5, // 750的设计稿
  //         "propList": [
  //           "*"
  //         ]
  //   }),
  //   require("autoprefixer")({ browsers: ['last 2 versions'] }),
  // ]
  plugins: {
    autoprefixer,
    "postcss-pxtorem": {
      "rootValue": 37.5, // 750的设计稿
      "propList": [
        "*"
      ]
    }
  }
}
