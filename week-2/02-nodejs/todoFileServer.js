const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  let reqData = req.body;
  if (!reqData) {
    throw new Error("Invalid request body");
  }
  reqData = {
    id: Math.floor(Math.random() * 1000000),
    title: reqData.title,
    description: reqData.description,
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = data ? JSON.parse(data) : [];
    todos.push(reqData);
    fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
      if (err) {
        throw new Error("can not wirte data something went wrong");
      } else {
        res.status(201).json(reqData);
      }
    });
  });
});

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    console.log(todos);
    if (todos) {
      res.status(200).json({ todos });
    }
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let id = parseInt(req.params.id);
    let index = todos.findIndex((item) => item.id === id);
    if (todos) {
      res.status(200).json(todos[index]);
    }
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let id = parseInt(req.params.id);
    let index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      todos[index].title = req.body.title;
      todos[index].description = req.body.description;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(todos[index]);
      });
    } else {
      res.status(404).send();
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let id = parseInt(req.params.id);
    let index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json({ message: "Todo deleted successfully" });
      });
    } else {
      res.status(404).send();
    }
  });
});

app.listen(3000);

module.exports = app;
