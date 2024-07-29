import React, { useState } from 'react';
import './Todo.css';
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Alert from '../Alert/Alert';

function Todo() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [editBtn, setEditBtn] = useState(null);
    const [alertData, setAlertData] = useState({});

    const handleAddClick = () => {
        if (task !== '') {
            if (editBtn === null) {
                setTodos(prevTodos => {
                    let newTodos = [...prevTodos, { id: Date.now(), task: task }];
                    setTask('');
                    showAlert('success', 'Todo added successfully');
                    return newTodos;
                })
            } else {
                setTodos(prevTodos => {
                    let newTodos = prevTodos.map(value =>
                        value.id === editBtn ? { ...value, task } : value
                    );
                    showAlert('success', 'Todo updated successfully');
                    setTask('');
                    setEditBtn(null)
                    return newTodos;
                })
            }
        }
    }

    const showAlert = (type, message) => {
        setAlertData({type: type, message: message});
        setTimeout(() => {
            setAlertData({})
        }, 1200);
    }

    const handleEdit = (id) => {
        setEditBtn(id);
        let editTask = todos.filter(task => task.id === id);
        let { task } = editTask[0];
        setTask(task);
    }

    const handleDelete = (id) => {
        let filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
        showAlert('danger', 'Todo deleted successfully');

    }

    const handleClear = () => {
        setTodos([]);
        showAlert('danger', 'Todo deleted successfully');
    }
    return (
        <div className="todo-container col-md-6">
            <div className="d-flex justify-content-center">
                <Alert alertData={alertData} />
            </div>
            <h3 className='text-uppercase'>Todo List</h3>
            <div className="input-area mt-3">
                <input type="text" className='p-1' placeholder='Enter Todos' value={task} onChange={(e) => setTask(e.target.value)} />
                <button className='add-btn p-1' onClick={handleAddClick}>{editBtn ? 'Update' : 'Add'}</button>
            </div>
            <div className="show-todos mt-4">
                <ul>
                    {todos.map(todo => {
                        return (
                            <li key={todo.id}>
                                <div className="text-box">
                                    <p>{todo.task}</p>
                                </div>
                                <div className="icon-box ms-auto d-flex justify-content-center">
                                    <span className='edit-icon me-3' onClick={() => handleEdit(todo.id)}><FaRegEdit /></span>
                                    <span className='delete-icon' onClick={() => handleDelete(todo.id)}><FaRegTrashAlt /></span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                {todos.length > 0 ? <button className='clear-btn p-1' onClick={handleClear}>Clear All</button> : ''}
            </div>
        </div>
    )
}

export default Todo;