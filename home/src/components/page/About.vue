<template>
  <div>
    <div class="section-page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="title">Blog - Contact List</h1>
            <p class="subtitle">How to contact me</p>
          </div>
          <div class="col-md-4">
            <ul class="breadcrumb">
              <li>
                <i class="icon iconfont icon-shouye"></i>
              </li>
              <li>
                <i class="fa fa-fw fa-home"></i>
                <a href="#">Home</a>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="message col-sm-8">
      <div class="col-sm-12">
        <textarea class="form-control" rows="20" disabled="disabled" id="me"></textarea>
      </div>
      <br />
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">name</label>
          <div class="col-sm-10">
            <input class="form-control-static col-sm-4" id="na" />
          </div>
        </div>
        <hr />
        <div class="form-group">
          <label for="inputPassword" class="col-sm-2 control-label">留言</label>
          <div class="col-sm-8">
            <textarea class="form-control" rows="3" id="texx"></textarea>
          </div>
        </div>
        <button type="reset" class="btn btn-warning">重置</button>
        <button type="button" class="btn btn-success" id="message" @click="leaveMessage">提交</button>
      </form>
    </div>
    <div class="content col-sm-4">
      <div class="information">
        <img src="/static/images/timg2.jpg" />
        <pre class="bg-info">
    星河滚烫，你是人间理想.
　　皓月清凉，你是人间曙光.
　　人海冷漠，你是人间炽热.
　　满眼星河，你是清风满月.
　　万事沉浮，你是人间归途.
　　众生平庸，你是人间星光.
　　世间无常，你是人间琳琅.
　　满树繁华，你是心之所往.
　　明月黯淡，你是最后曙光.
　　山花烂漫，你是昨夜晓凤.
　　人间苦咸，你是甜中透糖.
　　浩瀚银河，你是华星秋月.
</pre>
      </div>
  <div class="list-group">
  <a href="https://www.zhihu.com/" class="list-group-item list-group-item-success">知乎</a>
  <a href="https://github.com/GouYuQing" class="list-group-item list-group-item-info">github</a>
  <a href="https://juejin.im/timeline" class="list-group-item list-group-item-warning">掘金</a>
  <a href="#" class="list-group-item list-group-item-danger">3319948815@qq.com</a>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "Welcome to My about"
    };
  },
  methods: {
    leaveMessage() {
      let arr = new Array();
      $("#message").click(function() {
        let na = $("#na").val();
        let texx = $("#texx").val();
        if (na == "" || texx == "") {
          alert("姓名和留言不能为空！");
          return;
        }
        let temp =
          "[" +
          na +
          "]" +
          "(" +
          new Date().toLocaleDateString() +
          ")" +
          "：" +
          texx;
        if (arr.length < 30) {
          arr.unshift(temp);
        } else {
          arr.pop();
        }
        $("#me").val(arr.join("\n"));
      });
    }
  }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
.section-page-header {
  width: 100%;
  height: 100px;
  background: #f5f5f5;
}
.container .col-md-8 {
  color: #555;
  padding: 0;
  margin-left: -100px;
}
.container .col-md-4 {
  font-size: 18px;
  line-height: 80px;
  text-decoration: none;
}

.message .form-horizontal .form-group{
  padding: 20px;
}
.content .information img {
  width: 400px;
  height: 280px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.content .information .bg-info {
  border-radius: 3px;
  font-size: 16px;
  font-family: "楷体";
}
</style>
