import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://local:8080/api/todos');
        setTodos(response.data);
    };

    const handleAddTodo = async () => {
        const response = await axios.post('http://local:8080/api/todos', { title: newTodo, completed: false });
        setTodos([...todos, response.data]);
        setNewTodo('');
    };

    const handleDeleteTodo = async (id) => {
        await axios.delete(`http://local:8080/api/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleTodo = async (id) => {
        const todo = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todo, completed: !todo.completed };
        await axios.put(`http://local:8080/api/todos/${id}`, updatedTodo);
        const newTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span>{todo.text}</span>
                        <button onClick={() => handleToggleTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
