$(function(){
    var $loginBox = $('#loginBox');
    var $registerBox = $('#registerBox');
    var $userInfo = $('#userInfo');

    //注册
    $loginBox.find('a').on('click',function(){
        $registerBox.show();
        $loginBox.hide();
    });
    //登录
    $registerBox.find('a').on('click',function(){
        $registerBox.hide();
        $loginBox.show();
    });
    //注册
    $registerBox.find('button').on('click',function(){
        //通过ajax提交请求
        $.ajax({
           type:'post',
           url:'api/user/register',
           data:{
               username:$registerBox.find('[name="username"]').val(),
               password:$registerBox.find('[name="password"]').val(),
               repassword:$registerBox.find('[name="repassword"]').val(),

           } ,
           datatType:'json',
           success:function(result){
            //    console.log(result);
            $registerBox.find('.colWarning').html(result.message);
            if(!result.code){
                //注册成功
                setTimeout(function(){
                    $loginBox.show();
                    $registerBox.hide();
                },1000);
            }
           }
        })
        //登录
        $loginBox.find('button').on('click',function(){
            $.ajax({
                type:'post',
                url:'/api/user/login',
                data:{
                    username:$loginBox.find('[name="username"]').val(),
                    password:$loginBox.find('[name="password"]').val()
                },
                datatType:'json',
                success:function(result){
                    $loginBox.find('.colWarning').html(result.message)
                    if(!result.code){
                        //登录成功
                        setTimeout(function(){
                            $loginBox.hide();
                            $userInfo.show();
                            //显示用户登录信息
                            $userInfo.find('.username').html(result.username);
                            $userInfo.find('.info').html('你好，欢迎光临我的博客')
                        },1000);
                    }
                }
            })
        })
    })
})