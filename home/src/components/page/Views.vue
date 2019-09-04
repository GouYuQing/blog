<template>
<div>
     <div class="section-page-header">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="title">Blog - Articles List</h1>
                <p class="subtitle">There are many articles here </p>
            </div>
            <div class="col-md-4">
                <ul class="breadcrumb">
                  <li><i class="icon iconfont icon-shouye"></i></li>
                    <li><i class="fa fa-fw fa-home"></i> <a href="#">Home</a></li>
                    <li>Blog/Views</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div>
        <p>{{$route.params.all}}</p>
    </div>
</div>
</template>
<script>
export default {
  name: 'Views',
  data () {
    return {
      
    }
  }
}
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
</style>