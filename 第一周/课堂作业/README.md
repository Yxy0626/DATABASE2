一、更改背景颜色先导入javascript: 
var oHead = document.getElementsByTagName('HEAD').item(0); 
var oScript= document.createElement("script"); 
oScript.type = "text/javascript"; 
oScript.src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js";
oHead.appendChild( oScript);
alert('jquery注入完成');

选择元素
写jQuery语句修改元素背景颜色，鼠标移上去是黄色，移开是灰色$(document).ready(function(){
  $("#test").mouseover(function(){
    $("#test").css("background-color","yellow");
  });
  $("#test").mouseout(function(){
    $("#test").css("background-color","#E9E9E4");
  });
});

效果：鼠标移到上面时：
鼠标移开时：二、隐藏元素导入（代码同上）
选择元素
写入代码$("#pic").click(function(){
  $("#pic").hide();
});

结果：原网页点击后
