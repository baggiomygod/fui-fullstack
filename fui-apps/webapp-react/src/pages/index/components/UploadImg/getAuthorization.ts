/* tslint:disable */
export const getAuthorization = (options: any, callback: (opt: any) => void) => {

  // 格式一、（推荐）后端通过获取临时密钥给到前端，前端计算签名
  // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
  // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
  // var url = 'http://127.0.0.1:3000/sts';
  var url = 'http://127.0.0.1:8000/cos-sts';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = (e: any) => {
      try {
          var data = JSON.parse(e.target.responseText);
          console.log('response:', data)
          var credentials = data.credentials;
      } catch (e) {

      }
      callback({
          TmpSecretId: credentials.tmpSecretId,
          TmpSecretKey: credentials.tmpSecretKey,
          XCosSecurityToken: credentials.sessionToken,
          ExpiredTime: data.expiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
      });
  };
  xhr.send();


  // // 格式二、（推荐）【细粒度控制权限】后端通过获取临时密钥给到前端，前端只有相同请求才重复使用临时密钥，后端可以通过 Scope 细粒度控制权限
  // // 服务端例子：https://github.com/tencentyun/qcloud-cos-sts-sdk/edit/master/scope.md
  // var url = 'http://127.0.0.1:3000/sts-scope';
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', url, true);
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.onload = function (e) {
  //     try {
  //         var data = JSON.parse(e.target.responseText);
  //         var credentials = data.credentials;
  //     } catch (e) {
  //     }
  //     callback({
  //         TmpSecretId: credentials.tmpSecretId,
  //         TmpSecretKey: credentials.tmpSecretKey,
  //         XCosSecurityToken: credentials.sessionToken,
  //         ExpiredTime: data.expiredTime,
  //         ScopeLimit: true, // 细粒度控制权限需要设为 true，会限制密钥只在相同请求时重复使用
  //     });
  // };
  // xhr.send(JSON.stringify(options.Scope));


  // // 格式三、（不推荐，分片上传权限不好控制）前端每次请求前都需要通过 getAuthorization 获取签名，后端使用固定密钥或临时密钥计算签名返回给前端
  // // 服务端获取签名，请参考对应语言的 COS SDK：https://cloud.tencent.com/document/product/436/6474
  // // 注意：这种有安全风险，后端需要通过 method、pathname 严格控制好权限，比如不允许 put / 等
  // var method = (options.Method || 'get').toLowerCase();
  // var query = options.Query || {};
  // var headers = options.Headers || {};
  // var pathname = options.Pathname || '/';
  // // var url = 'http://127.0.0.1:3000/auth';
  // var url = '../server/auth.php';
  // var xhr = new XMLHttpRequest();
  // var data = {
  //     method: method,
  //     pathname: pathname,
  //     query: query,
  //     headers: headers,
  // };
  // xhr.open('POST', url, true);
  // xhr.setRequestHeader('content-type', 'application/json');
  // xhr.onload = function (e) {
  //     try {
  //         var data = JSON.parse(e.target.responseText);
  //     } catch (e) {
  //     }
  //     callback({
  //         Authorization: data.authorization,
  //         // XCosSecurityToken: data.sessionToken, // 如果使用临时密钥，需要把 sessionToken 传给 XCosSecurityToken
  //     });
  // };
  // xhr.send(JSON.stringify(data));


  // // 格式四、（不推荐，适用于前端调试，避免泄露密钥）前端使用固定密钥计算签名
  // var authorization = COS.getAuthorization({
  //     SecretId: 'AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // 可传固定密钥或者临时密钥
  //     SecretKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // 可传固定密钥或者临时密钥
  //     Method: options.Method,
  //     Pathname: options.Pathname,
  //     Query: options.Query,
  //     Headers: options.Headers,
  //     Expires: 900,
  // });
  // callback({
  //     Authorization: authorization,
  //     // XCosSecurityToken: credentials.sessionToken, // 如果使用临时密钥，需要传 XCosSecurityToken
  // });

};
