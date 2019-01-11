
#weapp-address-book

这是一个通讯录带字母可以滑动小程序组件


## 截屏

### 电脑上的截屏
![](https://github.com/kingbuwu/weapp-address-book/blob/master/images/1.png)
![](https://github.com/kingbuwu/weapp-address-book/blob/master/images/2.png)

## 如何使用

1. 将component目录的alphabet放到自己的项目目录中
2. 在使用的页面引入
### json
```
"usingComponents": {
    "alphabet": "/component/alphabet/index"
  }
```
### wxml
### list 是传入的数据,一定要和alphabetList.js里面data中list的json数据一样
```
<alphabet list="{{list}}" />
```
### wxss
### 下面是隐藏滚动条,组件里面不支持这样写
```
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
```

3. 编译

## 功能

- [x] 带字母滑动或点击选择的列表页面

### 其它

- 👉 欢迎issue
- 👉 欢迎pr
