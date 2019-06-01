## 接口规范
```
    {
        code: 200 // 4xx 5xx 2xx
        msg: '成功'
        json: {
            key1: '1',
            key2: '2'
        }
    }
```
### 1. 首页
1. banner接口

2. 退出接口

3. 登录接口

4. 类型接口
        ```
        list:[{
            url: '',
            imgUrl: '',
            label: '',
            key: ''
        }]
        ```
5. 文章列表接口
        ```
            json: {
                list: [
                    {
                      "title": "标题",
                      "img": "./mock/destop.jpg",
                      "description": "描述， 描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描描述描述描述描描述描述描述描描述描述描述描描述描述描述描述描述描述描述描述描述描述",
                      "author": "wengf",
                      "commentCount": 10,
                      "niceCount": 99
                    },
                    // ...
                ],
                current: 1,
                total: 10,
                more: true
            }
        ```
6. 搜索返回列表
    ```
      json: {
        list: [
        {
          id: '',
          content: '结果',
        },
        // ...
      ],
      total: 10,
      }
    ```
7. 我的用户基本信息
    ```
      {
        avatar: '',
        name: 'baggio',
        completion: '70%',
        city: '杭州',
        sex: '',
        age: 22
      }
    ```
8. 收藏列表
   ```
    json: {
                list: [
                    {
                      id: ''
                      "title": "标题",
                    },
                    // ...
                ],
                current: 1,
                total: 10,
                more: true
            }
   ```
9.  我的发布

10.  最近浏览
