# 宣传页面

![1](C:\Users\oysd\Desktop\数据库2\Database-Principle2-master\第二三周\1.png)

# jqGrid练习

##### text.html代码如下

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible">
    <title>jsGrid - Basic Scenario</title>
    <link rel="stylesheet" type="text/css" href="demos/demos.css" />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600,400' rel='stylesheet' type='text/css'>

```
<link rel="stylesheet" type="text/css" href="css/jsgrid.css" />
<link rel="stylesheet" type="text/css" href="css/theme.css" />

<script src="external/jquery/jquery-1.8.3.js"></script>
<script src="db.js"></script>

<script src="src/jsgrid.core.js"></script>
<script src="src/jsgrid.load-indicator.js"></script>
<script src="src/jsgrid.load-strategies.js"></script>
<script src="src/jsgrid.sort-strategies.js"></script>
<script src="src/jsgrid.field.js"></script>
<script src="src/fields/jsgrid.field.text.js"></script>
<script src="src/fields/jsgrid.field.number.js"></script>
<script src="src/fields/jsgrid.field.select.js"></script>
<script src="src/fields/jsgrid.field.checkbox.js"></script>
<script src="src/fields/jsgrid.field.control.js"></script>
```

</head>
<body>

    <h1>Basic Scenario</h1>
    <div id="jsGrid"></div>

```
<script>
    $(function() {

        $("#jsGrid").jsGrid({
            height: "70%",
            width: "100%",
            filtering: true,
            editing: true,
            inserting: true,
            sorting: true,
            paging: true,
            autoload: true,
            pageSize: 15,
            pageButtonCount: 5,
            deleteConfirm: "您要删除信息吗",
            controller: db,
            fields: [
                { name: "姓名", type: "text", width: 150 },
                { name: "年龄", type: "number", width: 50 },
                { name: "身高", type: "text", width: 200 },
                { type: "control" }
            ]
        });

    });
</script>
```

</body>
</html>

##### db.js代码如下

`(function() {`

```
var db = {

    loadData: function(filter) {
        return $.grep(this.clients, function(client) {
            return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                && (filter.Age === undefined || client.Age === filter.Age)
          
                && (filter.shengao === undefined || client.shengao === filter.shengao);
        });
    },

    insertItem: function(insertingClient) {
        this.clients.push(insertingClient);
    },

    updateItem: function(updatingClient) { },

    deleteItem: function(deletingClient) {
        var clientIndex = $.inArray(deletingClient, this.clients);
        this.clients.splice(clientIndex, 1);
    }

};

window.db = db;

db.clients = [
    {
        "姓名": "于欣雨",
        "年龄": 20,
		"身高":"170"
    },
    {
        "姓名": "李诺怡",
        "年龄": 20,
		"身高":"168"
    },
    {
        "姓名": "李浩贤",
        "年龄": 20,
		"身高":"173"
    },
    {
        "姓名": "鞠林玲",
        "年龄": 20,
		"身高":"168"
    },
```

```
];
```

`}());`

截图

![0](https://github.com/Yxy0626/DATABASE2/blob/main/%E7%AC%AC%E4%B8%89%E5%91%A8/%E8%AF%BE%E5%90%8E%E4%BD%9C%E4%B8%9A/0.png)
