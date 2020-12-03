# 一、更改背景颜色

1. ##### 先导入

   `javascript:` 
   `var oHead = document.getElementsByTagName('HEAD').item(0);` 
   `var oScript= document.createElement("script");` 
   `oScript.type = "text/javascript";` 
   `oScript.src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js";`
   `oHead.appendChild( oScript);`
   `alert('jquery注入完成');`

2. ##### 选择元素

   ![1](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\1.png)

3. ##### 写jQuery语句修改元素背景颜色，鼠标移上去是黄色，移开是灰色

   `$(document).ready(function(){`
     `$("#test").mouseover(function(){`
       `$("#test").css("background-color","yellow");`
     `});`
     `$("#test").mouseout(function(){`
       `$("#test").css("background-color","#E9E9E4");`
     `});`
   `});`

   #### 效果：

   ##### 鼠标移到上面时：

   ![3](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\3.png)

#####       鼠标移开时：

![2](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\2.png)

二、隐藏元素

1. 导入（代码同上）
2. 选择元素

![4](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\4.png)

![5](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\5.png)

3. 写入代码

   `$("#pic").click(function(){`
     `$("#pic").hide();`
   `});`

结果：

原网页

![7](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\7.png)

点击后

![8](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第一周\8.png)
