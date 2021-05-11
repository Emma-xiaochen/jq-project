# jq-project 用户信息管理界面

## 项目描述

- 该项目可以对用户信息进行查询、新增、编辑、删除操作



## 项目展示图

![项目展示图](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E9%A1%B9%E7%9B%AE%E5%B1%95%E7%A4%BA%E5%9B%BE.png?raw=true)



## 项目文件目录介绍

![目录](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E7%9B%AE%E5%BD%95.png?raw=true)



##  项目启动

### 第一步： 启动后端服务(项目要求安装node)

- 进入server文件夹
- 安装项目依赖： npm install
- 启动后端服务： npm run dev



### 第二步： 打开页面

- 点到index.html，然后go live打开前端页面



## 项目功能介绍

- 查询功能

  - 输入用户姓名查找对应信息，查找成功将信息展示在页面，否则弹出提示框。

  ![查询成功效果图](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E6%9F%A5%E8%AF%A2%E6%88%90%E5%8A%9F%E6%95%88%E6%9E%9C%E5%9B%BE.png?raw=true)

  ![查询失败效果图](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E6%9F%A5%E8%AF%A2%E5%A4%B1%E8%B4%A5%E6%95%88%E6%9E%9C%E5%9B%BE.png?raw=true)

- 重置功能

  - 点击重置，回到刚进页面初始化的样子

  ![重置后效果图](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E9%87%8D%E7%BD%AE%E5%90%8E%E6%95%88%E6%9E%9C%E5%9B%BE.png?raw=true)

- 新增功能

  - 点击新增按钮，弹出弹框添加新的用户信息后，保存到后台数据，再展示到页面。

  ![新增用户信息填表](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E6%96%B0%E5%A2%9E%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E5%A1%AB%E8%A1%A8.png?raw=true)

  ![新增后展示页面](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E6%96%B0%E5%A2%9E%E5%90%8E%E5%B1%95%E7%A4%BA%E9%A1%B5%E9%9D%A2.png?raw=true)

- 编辑功能

  - 点击编辑按钮，弹出所在行的数据信息，修改信息保存后，更新最新信息到页面。

  ![修改小明信息](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E4%BF%AE%E6%94%B9%E5%B0%8F%E6%98%8E%E4%BF%A1%E6%81%AF.png?raw=true)

  ![修改小明信息后更新最新数据到页面](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E4%BF%AE%E6%94%B9%E5%B0%8F%E6%98%8E%E4%BF%A1%E6%81%AF%E5%90%8E%E6%9B%B4%E6%96%B0%E6%9C%80%E6%96%B0%E6%95%B0%E6%8D%AE%E5%88%B0%E9%A1%B5%E9%9D%A2.png?raw=true)

- 删除功能

  - 点击删除按钮，弹出提示框，选择确定后，会删除当前行的信息。

  ![删除功能](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E5%88%A0%E9%99%A4%E5%8A%9F%E8%83%BD.png?raw=true)

  ![删除成功](https://github.com/Emma-xiaochen/jq-project/blob/main/image/%E5%88%A0%E9%99%A4%E6%88%90%E5%8A%9F.png?raw=true)



## 踩坑

### 问题： Uncaught TypeError: dataList.forEach is not a function

- 这里说dataList.forEach不是一个函数。因为forEach是数组的方法，dataList不是一个数组，所以要传输给它一个数组数据

