// 处理业务逻辑的中间件
const Axios = require('axios')
const path = require('path')
const fileUtils = require('../utils/file_utils')

// 用户信息
const dataList = [
  {
    id: 1,
    name: '小明',
    birthday: '2020-12-12',
    city: '广东广州',
    phone: '11111111111'
  },
  {
    id: 2,
    name: '小红',
    birthday: '2020-12-12',
    city: '广东广州',
    phone: '22222222222'
  },
  {
    id: 3,
    name: '小亮',
    birthday: '2020-12-12',
    city: '广东广州',
    phone: '33333333333'
  },
  {
    id: 4,
    name: '小朱',
    birthday: '2020-12-12',
    city: '广东广州',
    phone: '44444444444'
  }
];

const dataFormat = ({
  code = 200,
  data = [],
  message =  '请求成功'
}) => {
  return JSON.stringify({
    code: code,
    data: data,
    message: message
  });
}


module.exports = async (ctx, next) => {
  // 获取客户端访问的接口地址
  console.log('请求接口：', ctx.request.url)
  const [ url ] = ctx.request.url.split('?')
  try {
    // 解析 url
    if (url === '/api/user') { // FIXME: get 获取数据
      const { username } = ctx.query;
      if (username) {
        const filterData = dataList.filter(data => data.name === username);
        ctx.response.body = dataFormat({ data: filterData });
      } else {
        ctx.response.body = dataFormat({ data: dataList });
      }
    } else if (url === '/api/user/add') { // FIXME: post 新增数据
      const data = ctx.request.body
      if (!data.name) {
        ctx.response.body = dataFormat({ code: 400, message: '新增数据失败，至少新增个姓名啊，小鸡狗~' })
        return;
      }
      dataList.push({ id: dataList.length + 1, ...data})
      ctx.response.body = dataFormat({ message: '新增数据成功~' })
    } else if (url === '/api/user/edit') { // FIXME: put 编辑数据
      const data = ctx.request.body
      dataList.forEach((item, index, arr) => {
        // console.log('arr[index]:', arr[index])
        // TODO: data.id传过来变成字符串？
        if (item.id == data.id) {
          arr[index] = data;
        }
      })
      ctx.response.body = dataFormat({ message: '编辑数据成功~' })
    } else if (url === '/api/user/delete') { // FIXME: delete 删除数据
      const { id } = ctx.request.body
      if (!id) {
        ctx.response.body = dataFormat({ code: 400, message: 'i need id!' });
        return;
      }
      let idIndex;
      dataList.forEach((data, index) => {
        if (data.id == id) {
          idIndex = index;
        }
      })
      dataList.splice(idIndex, 1);
      ctx.response.body = dataFormat({ message: `成功删除id为${id}的数据~` });
    } else { // FIXME: get 接口文档
      const contentType = 'text/html; charset=utf-8'
      ctx.type = contentType
      ctx.body = require('./readme')
    }
  } catch (error) {
    console.log('error:', error)
    const errorMsg = {
      message: '请求失败~',
      code: 500
    }
    // 返回错误信息给客户端
    ctx.response.body = JSON.stringify(errorMsg)
  }

  await next()
}