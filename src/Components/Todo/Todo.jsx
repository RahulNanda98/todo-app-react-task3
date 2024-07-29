import React from 'react';
import './Todo.css';
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo() {
    return (
        <div className="todo-container col-md-6">
            <div className="alert">
                <p>Item added successfully</p>
            </div>
            <h3 className='text-uppercase'>Todo List</h3>
            <div className="input-area mt-3">
                <input type="text" className='p-1' placeholder='Enter Todos' />
                <button className='add-btn p-1'>Add</button>
            </div>
            <div className="show-todos mt-4">
                <ul>
                    <li>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, excepturi.</p>
                        </div>
                        <div className="icon-box ms-auto d-flex justify-content-center">
                            <span className='edit-icon me-3'><FaRegEdit /></span>
                            <span className='delete-icon'><FaRegTrashAlt /></span>
                        </div>
                    </li>
                    <li>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon-box ms-auto d-flex justify-content-center">
                            <span className='edit-icon me-3'><FaRegEdit /></span>
                            <span className='delete-icon'><FaRegTrashAlt /></span>
                        </div>
                    </li>
                    <li>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon-box ms-auto d-flex justify-content-center">
                            <span className='edit-icon me-3'><FaRegEdit /></span>
                            <span className='delete-icon'><FaRegTrashAlt /></span>
                        </div>
                    </li>
                </ul>
                <button className='clear-btn p-1'>Clear All</button>
            </div>
        </div>
    )
}

export default Todo;