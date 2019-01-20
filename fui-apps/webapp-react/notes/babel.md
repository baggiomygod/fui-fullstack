{
	"presets": [
    "@babel/preset-typescript",
    "@babel/preset-react",
    ["@babel/preset-env"]
	],
	"plugins": [
		["transform-runtime", {
			"helpers": false,
			"polyfill": false,
			"regenerator": true,
			"moduleName": "babel-runtime"
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],// ts中使用装饰器时才需要
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["react-hot-loader/babel"]
	]
}
##

### preset
1. @babel/preset-env:
  不需要再去手动安装babel-preset-es2015或其他年份，安装@babel/preset-env即可，相当于使用了最新版本的javascript
2. "@babel/preset-react",
   编辑jsx
