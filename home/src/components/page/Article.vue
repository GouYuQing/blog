<template>
<div>
    <div class="section-page-header">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="title">Blog - Notes List</h1>
                <p class="subtitle">Some of my notes</p>
            </div>
            <div class="col-md-4">
                <ul class="breadcrumb">
                  <li><i class="icon iconfont icon-shouye"></i></li>
                    <li><i class="fa fa-fw fa-home"></i> <a href="#">Home</a></li>
                    <li>Notes</li>
                </ul>
            </div>
        </div>
    </div>
   </div>
   
  <div class="edit_container">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        <button v-on:click="saveHtml">保存</button>
    </div>  
    </div>
</template>

<script>
export default {
  name: 'Article',
  data(){
     return {
            content: ``,
            editorOption: {}
        }
  },computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        saveHtml:function(event){
          alert(this.content);
        }
    }
}
</script>

<style>
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
.ql-editor{
         height:450px;
     }
</style>