#### 我的博客 
*安装依赖 项目创建 安装初始化 第一个请求的实现*
*设置静态文件托管public*
*用户发送请求-URL-解析路由-找到匹配的规则-执行指定的函数，返回对应内容到用户*
*模块划分，前台 后台管理 api*
*先写后台，然后才好调用后台数据 使用mongoose数据库*
#### 开始
***
##### 首页html
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/1.png)
***
##### 登录和注册功能
*使用cookies保存用户登录状态,退出的时候cookies状态为null，退出到注册页面了*
###### *退出失败了，暂时没有找到原因，只能手动退出*
*完成普通用户和管理员用户的功能，如果是管理员的话，切换到其他的语句*
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/6.png)
##### *管理员界面有错，只是暂时的，还是需要注册，无法直接登录，因为没有把管理员的信息写入mongoose,还不会*
#### 实现后台管理界面的搭建
*后台主界面将就着完成*
*为了实现用户列表的展示，需要从数据库中读取所有的用户列表信息*
*将注册用户的数据信息分页展示,并分离出去，可以多次使用*
*博客添加一些分类的功能实现，成功了的提示和失败后的提示，成功就跳转，失败返回上一级目录*
*实现分类的管理，删除和修改，还存在问题需要手动刷新，待检查*
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/7.png)
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/8.png)
***
#### 页面的分类导航展示和排序
*博客内容的删除与编辑*
*博客的内容管理里面加上作者，添加时间和点击量，作者名字显示不出来*
*作者名字现在可以显示*
#### 前台页面展示
*从数据库中读出数据展示*
*分类展示，点击哪个分类就展示哪一个*
*上一页下一页的跳转*
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/2.png)
##### 后面想到什么新的功能会再去实现
*后面会把页面进行完善*

***
##### 原先使用的也是node写的前端页面，学习完vue之后，使用vue编写了一个界面
* 上图的几乎都是vue搭建的页面，但是功能很简单，是从后台获取的数据，尚未完善，可以进行简单的查看*
*下图也是其中的内容*
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/3.png)
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/4.png)
![Image text](https://raw.githubusercontent.com/GouYuQing/blog/master/images/5.png)
*使用vue和node完成的博客，刚刚开始的时候没想到那么完善，后台的功能要好一些，页面展示很粗糙，以后若要完善需要进行重构*