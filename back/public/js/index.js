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
            url: 'api/user/register',
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
                url: '/api/user/login',
                data: {
                    username: $loginBox.find('[name="username"]').val(),
                    password: $loginBox.find('[name="password"]').val()
                },
                datatType: 'json',
                success: function (result) {
                    $loginBox.find('.colWarning').html(result.message)
                    if (!result.code) {
                        window.location.reload();
                    }
                }
            })
        })
        //点击退出
        $userInfo.find('button').on('click', function () {
            // console.log('logout');
            $.ajax({
            // type: 'post',
                url: '/api/user/logout',
                // datatType: 'json',
                success: function (result) {
                    if (!result.code) {
                        //重载页面
                        window.location.reload();
                    }
                // return result;

                }
            })
        })
    })
})