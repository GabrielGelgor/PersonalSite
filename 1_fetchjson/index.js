"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var ID = todo.id;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n        ID: " + ID + "\n        Title: " + title + "\n        Finished: " + finished + "    \n    ");
});
