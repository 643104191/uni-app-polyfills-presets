# uni-app-polyfills-presets

基于[@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)改写的presets

传参可以按照@babel/preset-env来传参

修改的地方

* 将core-js改为[uni-app-core-js](https://www.npmjs.com/package/uni-app-core-js)

* 修复`shippedProposals: true`时不添加`es7.array.flat-map`兼容的问题