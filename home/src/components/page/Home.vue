<template>
<div>
 <div class="banner" id="home">
			<div class="header">
			</div>	
			<div class="banner-top">
				<div class="banner-bottom">
					<h2>你来人间一趟，你要看看太阳</h2>
				</div>
				<div class="b-btn">
					<a href="#" class="hvr-sweep-to-right">阅读更多</a>
				</div>
			</div>
	</div>	
  <div class="footer">
		<div class="container">
			<div class="footer-main">
				<div class="col-md-6 footer-left">
					<a href="#"><h3>My Blog</h3></a>
					<p><span>但行好事，莫问前程</span>
					   <span>But if you do good, don't ask for future</span></p>
				</div>
				<div class="col-md-6 footer-right">
					<p>Hello World</p>
					<div class="ftr">
						<label>如果每个人都理解你，那你得普通成什么样</label>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
body{
    font-size: 100%;
	font-family: 'Lora', serif;
}
body a{
	transition: 0.5s all ease;
}
p{
	margin:0;
}
ul,label{
	margin:0;
	padding:0;
}
body a:hover{
	text-decoration:none;
}
.banner{
	background:url(../../../static/images/banner.png) no-repeat 0px 0px;
	background-size:100% 100%;
	min-height:790px;
}
.header {
  	padding: 1.5em 0px;
  	background: rgba(0, 0, 0, 0.45);
}
.banner-bottom h2 {
  	color: #fff;
  	font-size: 3.2em;
  	font-weight: 400;
  	width: 55%;
  	margin: 0 auto;
  	line-height: 1.4em;
}
.b-btn{
	margin-top:4%;
}
.b-btn a {
  	color: #fff;
  	padding: 14px 6em;
  	background: #f25555;
  	font-size: 24px;
  	font-weight: 400;
  	border: 2px solid #fff;
  	border-radius: 3px;
}
.b-btn a:hover{
  	background: #1d130f;
  	transition: 0.5s all ease;
}
a.hvr-sweep-to-right {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: visible;
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;
  background:#f25555;
  color: #fff;
}
a.hvr-sweep-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1d130f;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
a.hvr-sweep-to-right:hover,a.hvr-sweep-to-right:focus,a.hvr-sweep-to-right:active {
  color: white;
}
a.hvr-sweep-to-right:hover:before,a.hvr-sweep-to-right:focus:before,a.hvr-sweep-to-right:active:before {
  transform: scaleX(1);
}
.banner-top{
  	text-align: center;
  	margin-top: 7%;
}
.banner-bottom {
  	background: rgba(255, 255, 255, 0.12);
  	width: 50%;
  	margin: 0 auto;
  	border: 2px solid #fff;
  	border-radius: 3px;
  	padding: 2.2em 0px;
}
.footer{
	padding:7em 0px 2em 0px;
	background:#1d130f;
}
.footer-right{
	text-align:right;
}
.footer-right p {
  color: rgba(255, 255, 255, 0.52);
  font-size: 1.65em;
  font-weight: 400;
}
.ftr label{
	color:#fff;
	font-weight:400;
	font-size:1.52em;
}
.ftr {
  	border: 2px solid #fff;
  	width: 48.4%;
  	float: right;
  	padding: 13px 15px;
  	margin-top: 13px;
}
.footer-left h3{
	color:#fff;
	font-weight:400;
	font-size:2.1em;
	margin:0;
}
.footer-left p {
  	color: rgba(255, 255, 255, 0.52);
  	font-size: 1.2em;
  	font-weight: 400;
  	margin-top: 7px;
}
.footer-left p span{
	display:block;
}
</style>
