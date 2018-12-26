const { Router } = require('express');
const routes = Router();

const todos = [{ name: 'todo1' }];
let selectedTodo = '';

routes.get('/edit-todo/:name', (req, res) => {
    const { name } = req.params
    selectedTodo = name;
    res.render('editTodo', {initialValue: name});
});

routes.post('/edit-todo/:name', (req, res) => {
    const { name } = req.body;
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].name === selectedTodo) {
            index = i;
            break;
        }
    }

    if (index >= 0) {
        if (name) {
            todos.splice(index, 1, {name: name});
        }
    }
    res.redirect('/');
});

routes.get('/delete/:name', (req, res) => {
    const { name } = req.params;
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].name === name) {
            index = i;
            break;
        }
    }

    if (index >= 0) {
        todos.splice(index, 1);
    }
    res.render('todos', {
        todos: todos
    });
});

routes.get('/', (req, res) => {
    res.render('todos', {
        todos: todos
    });
});

routes.post('/', (req, res) => {
    if (req.body.name) {
        todos.push({ name: req.body.name });
    }
    res.render('todos', {
        todos: todos
    });
});

module.exports = routes;