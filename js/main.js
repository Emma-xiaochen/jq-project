function init() {
  // 1. 请求数据
  $.ajax({
    type: 'GET',
    url: 'http://10.65.41.54:8888/api/user',
    success: function (result) {
      // console.log('result:', result);
      // 2. 请求成功后，将数据插入到模板渲染到页面
      htmlRender(result.data);
    }
  })
}

init()

// 搜索功能
$('#search-btn').click(function () {
  var username = $('#search-ipt').val().trim();
  if (username === '') {
    alert('请输入姓名');
    return;
  }
  $.ajax({
    type: 'GET',
    url: 'http://10.65.41.54:8888/api/user?username=' + username,
    success: function (result) {
      console.log('result:', result);
      // 2. 请求成功后，将数据插入到模板渲染到页面
      // htmlRender(result.data);
      if (result.data.length === 0) {
        alert('查不到该姓名的数据');
        return;
      }
      htmlRender(result.data);
    }
  })
})

// 重置功能
$('#reset-btn').click(function () {
  $.ajax({
    type: 'GET',
    url: 'http://10.65.41.54:8888/api/user',
    success: function (result) {
      // console.log('result:', result);
      // 2. 请求成功后，将数据插入到模板渲染到页面
      htmlRender(result.data);
    }
  })
  // 重置输入框
  $('#search-ipt').val('');
})

// "保存"按钮
$('#save-btn').click(function () {
  var name = $('#username').val();
  var birth = $('#birthday').val();
  var place = $('#place').val();
  var telephone = $('#telephone').val();
  // console.log('姓名：', name);
  // console.log('出生日期：', birth);
  // console.log('籍贯：', place);
  // console.log('手机号码：', telephone);
  var obj = {
    name: name,
    birthday: birth,
    city: place,
    phone: telephone
  }
  console.log('obj：', obj);
  $.ajax({
    type: 'POST',
    url: 'http://10.65.41.54:8888/api/user/add',
    data: obj,
    success: function (result) {
      // console.log('result：', result);
      // 新增数据成功之后，关闭模态框
      $('#myModal').modal('hide');
    
      // 重新请求最新数据渲染到页面
      $.ajax({
        type: 'GET',
        url: 'http://10.65.41.54:8888/api/user',
        success: function (result) {
          // console.log('result:', result);
          // 2. 请求成功后，将数据插入到模板渲染到页面
          htmlRender(result.data);
        }
      })
    }
  })
})

// "新增"按钮
$('#add-btn').click(function () { 
  // 显示弹框
  $('#myModal').modal('show')
  // 重置表单
  resetForm();
})

// 重置数据表单
function resetForm() {
  $('#username').val('');
  $('#birthday').val('');
  $('#place').val('');
  $('#telephone').val('');
}

// 渲染模板
function htmlRender(dataList) {
  var htmlStr;
  dataList.forEach(function(item) {
    htmlStr += `
      <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.phone}</td>
      <td>${item.birthday}</td>
      <td>${item.city}</td>
      <td>
        <button class="btn btn-primary">编辑</button>
        <button class="btn btn-danger del-btn" data-id="${item.id}">删除</button>
      </td>
      </tr>
      `
  })
  $('#tbody').empty().append(htmlStr);
  
  // "删除"按钮
  $('.del-btn').click(function () {
    var id = $(this).data('id');
    // console.log('id:', id);
    var isDel = confirm('是否删除id为' + id + '的数据?');
    // console.log(isDel);
    if (isDel) {
      console.log('选择删除');
      $.ajax({
        type: 'DELETE',
        url: 'http://10.65.41.54:8888/api/user/delete',
        data: { id: id },
        success: function (result) {
          console.log('result:', result);
          // 删除数据成功后，重新请求数据
          $.ajax({
            type: 'GET',
            url: 'http://10.65.41.54:8888/api/user',
            success: function (result) {
              // console.log('result:', result);
              // 2. 请求成功后，将数据插入到模板渲染到页面
              htmlRender(result.data);
            }
          })
        }
      })
    } else {
      console.log('取消删除');
    }
  })
}



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
