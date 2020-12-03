## jQuery HTML

`$("button").click(function(){`
    `$("p").html("<b>404</b>!");`
`});`

点击前：

![3](https://github.com/Yxy0626/DATABASE2/blob/main/%E7%AC%AC%E4%BA%8C%E5%91%A8/%E8%AF%BE%E5%A0%82%E4%BD%9C%E4%B8%9A/3.png)

点击后：

![4](https://github.com/Yxy0626/DATABASE2/blob/main/%E7%AC%AC%E4%BA%8C%E5%91%A8/%E8%AF%BE%E5%A0%82%E4%BD%9C%E4%B8%9A/4.png)

## JQuery 遍历

`$("button").click(function(){`
  `$("li").each(function(){`
    `alert($(this).text())`
  `});`
`});`

## JQuery Ajax

`<html>`

<head>
<script type="text/javascript" src="/jquery/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $("#b01").click(function(){
  htmlobj=$.ajax({url:"/jquery/test1.txt",async:false});
  $("#myDiv").html(htmlobj.responseText);
  });
});
</script>
</head>

`<body>`

<div id="myDiv"><h2>嘿</h2></div>

`<button id="b01" type="button">改变</button>`

`</body>`
`</html>`

点击前：

![1](https://github.com/Yxy0626/DATABASE2/blob/main/%E7%AC%AC%E4%BA%8C%E5%91%A8/%E8%AF%BE%E5%A0%82%E4%BD%9C%E4%B8%9A/1.png)

点击后：

![2](https://github.com/Yxy0626/DATABASE2/blob/main/%E7%AC%AC%E4%BA%8C%E5%91%A8/%E8%AF%BE%E5%A0%82%E4%BD%9C%E4%B8%9A/2.png)
