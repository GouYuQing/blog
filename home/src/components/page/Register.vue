<template>
  <div class="Register">
    <div class="section-page-header">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="title">Blog - Register And Login</h1>
                <p class="subtitle">Registration and login </p>
            </div>
            <div class="col-md-4">
                <ul class="breadcrumb">
                  <li><i class="icon iconfont icon-shouye"></i></li>
                    <li><i class="fa fa-fw fa-home"></i> <a href="#">Home</a></li>
                    <li>Register</li>
                </ul>
            </div>
        </div>
    </div>
   </div>
     <div class="user_list">
        <div class="rightBox" id="userInfo" style="display:none">
            <div class="title"><span class="col-sm-12 text-center">用户信息</span></div>
            <p><span class="colDark">用户名</span></p>

            <p><span class="colDanger">你好，欢迎光临我的管理员！</span></p>
            <a href="http://127.0.0.1:3002/admin" style="font-size: 22px;text-decoration: underline">进入管理界面</a>
            <p><span class="colDanger" >你好，欢迎光临我的博客！</span></p>
            <p><span class="colDark"><button id="logout" >退出</button></span></p>
        </div>
        <div class="rightBox" id="loginBox" style="display:none">
            <div class="title"><span>登录</span></div>
            <div class="line"><span class="colDark">用户名：</span><input type="text" name="username"><em></em></div>
            <div class="line"><span class="colDark">密码：</span><input type="password" name="password"><em></em></div>
            <div class="line"><span class="colDark">登录：</span><button>登录</button></div>
            <p class="textRight">还没注册？<a href="#" class="colMint" style="text-decoration: underline">马上注册</a></p>
            <p class="colWarning textCenter"></p>
        </div>

        <div class="rightBox" id="registerBox" >
            <div class="title"><span>注册</span></div>
            <div class="line"><span class="colDark">用户名：</span><input type="text" name="username"><em></em></div>
            <div class="line"><span class="colDark">密码：</span><input type="password" name="password"><em></em></div>
            <div class="line"><span class="colDark">确认密码：</span><input type="password" name="repassword"><em></em>
            </div>
            <div class="line"><span class="colDark"></span><button>注册</button></div>
            <p class="textRight">已有账号？<a href="#" class="colMint" style="text-decoration: underline">马上登录</a></p>
            <p class="colWarning textCenter"></p>
        </div>
       
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
            username: '',
            password: '',
            repassword: '',
          }
    }
}
</script>
<script>
$(function () {
    var $loginBox = $('#loginBox');
    var $registerBox = $('#registerBox');
    var $userInfo = $('#userInfo');


    //注册
    $loginBox.find('a').on('click', function () {
        $registerBox.show();
        $loginBox.hide();
    });
    //登录
    $registerBox.find('a').on('click', function () {
        $registerBox.hide();
        $loginBox.show();
    });
    //注册
    $registerBox.find('button').on('click', function () {
        //通过ajax提交请求
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:3002/api/user/register',
            data: {
                username: $registerBox.find('[name="username"]').val(),
                password: $registerBox.find('[name="password"]').val(),
                repassword: $registerBox.find('[name="repassword"]').val(),
            },
            datatType: 'json',
            success: function (result) {
                //    console.log(result);
                $registerBox.find('.colWarning').html(result.message);
                if (!result.code) {
                    //注册成功
                    setTimeout(function () {
                        $loginBox.show();
                        $registerBox.hide();
                    }, 1000);
                }
            }
        })
        //登录
        $loginBox.find('button').on('click', function () {
            $.ajax({
                type: 'post',
                url: 'http://127.0.0.1:3002/api/user/login',
                data: {
                    username: $loginBox.find('[name="username"]').val(),
                    password: $loginBox.find('[name="password"]').val()
                },
                datatType: 'json',
                success: function (result) {
                    $loginBox.find('.colWarning').html(result.message)
                    if (!result.code) {
                        // window.location.reload();
                        //登陆成功
                         setTimeout(function () {
                        $loginBox.hide();
                        $registerBox.hide();
                        $userInfo.show();
                    }, 1000);
                    }
                    // return this.data;
                }
            })
        })
        //点击退出
        $userInfo.find('button').on('click', function () {
            // console.log('logout');
            $.ajax({
            // type: 'post',
                url: 'http://127.0.0.1:3002/api/user/logout',
                // datatType: 'json',
                success: function (result) {
                    if (!result.code) {
                        //重载页面
                        window.location.reload();
                    }

                }
            })
        })
    })
})
</script>
<style scoped>
body{
  padding: 0;
  margin: 0;
}
.section-page-header{
  width: 100%;
  height:100px;
  background: #f5f5f5;
}
.container .col-md-8{
    color: #555;
    padding: 0;
    margin-left: -100px;
}
.container .col-md-4{
  font-size: 18px;
  line-height: 80px;
  text-decoration: none;
}
.user_list {
  background-image: url('../../../static/images/back.jpg');
  background-size: cover;
  width: 100%;
  height: 600px;
  /* color: white; */
  font-size: 18px;
  font-family: '楷体';
}
.user_list div{
  border: 1px solid white;
  /* margin-top: 10px; */
  margin-bottom: 10px;
  box-shadow: 0 0 8px hsla(0,0%,100%,.3);
  border: 1px solid hsla(0,0%,100%,.65);
  border-radius: 3px;
}
.user_list .rightBox input{
background-color: transparent;
border: none;
}
.user_list .rightBox {
  /* border:1px solid red; */
  width: 350px;
  height: 250px;
  position: absolute;
  margin-left: 40%;
  margin-top: 10%;
}
.user_list .rightBox .title{
  font-size: 25px;
  font-family: '楷体';
  background-color: #cccccc;
}
</style>
