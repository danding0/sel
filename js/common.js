$(function () {

  //进度条
  NProgress.configure({ minimum: 0.8 });
  NProgress.configure({ ease: 'ease', speed: 1000 });
  $(document).ajaxStart(function(){
    NProgress.start();
  })
  $(document).ajaxStop(setTimeout(function() {
    NProgress.done();
  }, 1000))
  // 展开分类管理菜单
  $('.manage_list').on('click', function () {
    $('.classify').slideToggle();
  })
  // 隐藏侧边栏 ...切换类,,,改变侧边栏的left值,,,和主体部分的padding值
  $('.main_top').children().eq(0).on('click', function () {
    $('.side').toggleClass('active');
    $('.main').toggleClass('active');
  })
  // 点击退出弹出模态框
  $('.main_top').children().eq(1).on('click',function(){
    $('#login_out').modal('show');
  })
  // 退出登录点击事件
  $('.btn_out').on('click',function(){
    $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      success: function(data){
        console.log(data);
        if(data.success){
          location.href = "login.html";
        }
      }
    })
  })

})