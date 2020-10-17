/api/travel/...
/api/blog/...
/api/user/...

## 接口

**博客列表**
url: api/blog/list
method: GET
params: 
```
    {
        title: string
        content: string
        author: string
    }
```

**获取详情**

 获取详情
  url: api/blog/detail
  method: get
```
  {
   id: string,
  }
```