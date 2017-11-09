$(function(){
    // 登录表单校验
  // 1. 用户名密码不能为空
  // 2. 密码长度是6-12位 

  // 获取表单
  var $form = $('form');
  // 调用bootstrapValidator 校验表单
  $form.bootstrapValidator({　
    // 配置校验是的小图标　　　　　　　　
    feedbackIcons: {　　　　　　　　
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'　　　　　　　　
    },
    // 规则
    fields: {
      // 对应表单中的name属性
      username: {
        //  validators 证实
        validators: {
          // notEmpty  非空的
          notEmpty: {
            //  message  消息
            message: '用户名不能为空'
          },
          // callback 回叫信号
          callback: {
            message: '用户名错误'
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度为6-12为之间'
          },
          callback: {
            message: '密码错误'
          }
        }
      }
    }
  });

  // 校验成功 success.form.bv
  $form.on('success.form.bv', function (e) {
    // 阻止默认跳转
    e.preventDefault();
    // 发送ajax请求
    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      // 获取form表单提交的属性值
      data: $form.serialize(),
      success: function (data) {
        console.log(data);
        if (data.success) {
          // 密码正确跳转到首页
          location.href = "index.html";
        }
        if (data.error === 1000) {
          //alert("用户名不存在")
          //使用updateStatus方法，主动把username这个字段变成校验失败
          //第一个参数：字段名  表单中的name属性
          //第二个参数：INVALID :校验失败
          //第三个参数：配置提示消息
          $form.data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
        }
        if (data.error === 1001) {
          //手动让密码校验失败
          $form.data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
        }
      }
    })
  })
  NProgress.done();
})