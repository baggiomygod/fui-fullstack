# mysql

### 1. 删除表
```drop table tableName```

### 2. 表中insert数据
```
    INSERT INTO `articles`(`id`, `title`, `content`, `collection`, `like`, `views`, `img_url`, `author`, `avator`) VALUES (001,'骑车去西藏,Day1','四川，雅安test雅安test雅安test雅安test雅安test雅安test.',50,200,500,'','蓝with黑','')
```

### 3. update某个字段的数据
```
    UPDATE `articles` SET `id`='2019001' WHERE `id`=001
```
