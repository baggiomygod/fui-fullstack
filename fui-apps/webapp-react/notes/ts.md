### 对象上找不到属性 Property 'xx' does not exist on type 'Object'.
```
  modele.hot
// error: TS2339: Property 'hot' does not exist on type 'NodeModule'.
```

 原因：原因是ts是静态语言，类型是需要定义的，未定义就有可能找不到

 解决
```
  (module as any).hot
```

知识点：
