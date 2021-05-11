# jq-project 用户信息管理界面

## 项目描述

- 该项目可以对用户信息进行查询、新增、编辑、删除操作



## 项目展示图

![项目展示图](C:\Users\cm\Desktop\项目展示图.png)



## 项目文件目录介绍

![目录](C:\Users\cm\Desktop\目录.png)



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

  ![查询成功效果图](C:\Users\cm\Desktop\查询成功效果图.png)

  ![查询失败效果图](C:\Users\cm\Desktop\查询失败效果图.png)

- 重置功能

  - 点击重置，回到刚进页面初始化的样子

  ![重置后效果图](C:\Users\cm\Desktop\重置后效果图.png)

- 新增功能

  - 点击新增按钮，弹出弹框添加新的用户信息后，保存到后台数据，再展示到页面。

  ![新增用户信息填表](C:\Users\cm\Desktop\新增用户信息填表.png)

  ![新增后展示页面](C:\Users\cm\Desktop\新增后展示页面.png)

- 编辑功能

  - 点击编辑按钮，弹出所在行的数据信息，修改信息保存后，更新最新信息到页面。

  ![修改小明信息](C:\Users\cm\Desktop\修改小明信息.png)

  ![修改小明信息后更新最新数据到页面](C:\Users\cm\Desktop\修改小明信息后更新最新数据到页面.png)

- 删除功能

  - 点击删除按钮，弹出提示框，选择确定后，会删除当前行的信息。

  ![删除功能](C:\Users\cm\Desktop\删除功能.png)

  ![删除成功](C:\Users\cm\Desktop\删除成功.png)



## 踩坑

### 问题： Uncaught TypeError: dataList.forEach is not a function

- 这里说dataList.forEach不是一个函数。因为forEach是数组的方法，dataList不是一个数组，所以要传输给它一个数组数据

