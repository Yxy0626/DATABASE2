(function() {

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
       

    ];

}());