var dataList = [
  {
    id: '1',
    name: '小红',
    telephone: '12312312312',
    city: '广东广州',
    brithday: '2022-12-12'
  },
  {
    id: '2',
    name: '小陈',
    telephone: '12312312312',
    city: '广东广州',
    brithday: '2022-12-12'
  },
  {
    id: '3',
    name: '小杰',
    telephone: '12312312312',
    city: '广东广州',
    brithday: '2022-12-12'
  },
  {
    id: '4',
    name: '小子',
    telephone: '12312312312',
    city: '广东广州',
    brithday: '2022-12-12'
  }
];

function init() {
  htmlRender(dataList);
}

setTimeout(function () {
  init()
}, 1000)

$('#search-btn').click(function () {
  var username = $('#username').val().trim();
  if (username === '') {
    alert('请输入姓名');
    return;
  }
  var filterData = dataList.filter(function (item) {
    return item.name === username;
  })
  if (filterData.length === 0) {
    alert('查不到该姓名数据');
    return;
  }
  // console.log(filterData);
  htmlRender(filterData);
})

$('#reset-btn').click(function () {
  htmlRender(dataList);
  // 重置输入框
  $('#username').val('');
})

// 渲染模板
function htmlRender(dataList) {
  var htmlStr;
  dataList.forEach(function(item) {
    htmlStr += `
      <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.telephone}</td>
      <td>${item.brithday}</td>
      <td>${item.city}</td>
      <td>
        <button class="btn btn-primary">编辑</button>
        <button class="btn btn-danger">删除</button>
      </td>
      </tr>
      `
  })
  $('#tbody').empty().append(htmlStr);
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})