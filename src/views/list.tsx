import React, { useState } from 'react';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input data-testid="input-add-todo" type="text" value={inputValue} onChange={handleInputChange} />
            <button data-testid="bouton-add-todo" onClick={handleAddTodo}>Add</button>
            <ul data-testid="ul-todo">
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span data-testid="todo">
                            {todo}{' '}
                        </span>
                        <button data-testid="delete-todo" onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;