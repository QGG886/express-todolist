var express = require("express");

var todos = [{ item: "shopping" }, { item: "working" }, { item: "playing" }, { item: "get milk" }];

module.exports = function (app) {

    app.get("/todo", (req, res) => {
        res.render("todo", { todos: todos });

    });

    app.use(express.urlencoded({ extended: true }));

    app.post('/todo', function (req, res, next) {
        //console.log(req.body);
        todos.push(req.body);
        res.json(todos);
    });

    app.delete('/todo/:todo', function (req, res, next) {
        //console.log(req.params.todo !== todos.item);
        todos.forEach((todo,index,todos)=>{
            if(req.params.todo === todos[index].item)
            todos.splice(index,1);
        })
        res.json(todos);
    });

}