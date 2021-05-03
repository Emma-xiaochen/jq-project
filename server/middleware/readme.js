const getIPAddress = require('../utils/getIPAddress'); // 获取本机ip
module.exports = `
  <h2>服务器地址：${getIPAddress()}:8888</h2>
  <table border="1" style="width:100%;text-align:center;">
    <thead>
      <tr>
        <th>#</th>
        <th>接口描述</th>
        <th>请求方式</th>
        <th>接口地址</th>
        <th>data</th>
        <th>params</th>
        <th>备注</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>获取数据</td>
        <td>GET</td>
        <td>/api/user</td>
        <td>-</td>
        <td>username=xxx</td>
        <td>-</td>
      </tr>
      <tr>
        <td>2</td>
        <td>新增数据</td>
        <td>POST</td>
        <td>/api/user/add</td>
        <td>{name,phone,city,birthday}</td>
        <td>-</td>
        <td>id是由后端自动生成的，不需要传（准确来说是数据库自动生成的）</td>
      </tr>
      <tr>
        <td>3</td>
        <td>编辑数据</td>
        <td>PUT</td>
        <td>/api/user/edit</td>
        <td>{<b>id</b>,name,phone,city,birthday}</td>
        <td>-</td>
        <td>记得带上id</td>
      </tr>
      <tr>
        <td>4</td>
        <td>删除数据</td>
        <td>DELETE</td>
        <td>/api/user/delete</td>
        <td>{id}</td>
        <td>-</td>
        <td>删除数据需要数据的id</td>
      </tr>
    </tbody>
  </table>
  <h1 style="text-align:center;margin-top:200px;font-size:100px;color: rgba(0,0,0,.026);">我系领公</h1>
`