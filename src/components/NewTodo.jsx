import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewTodo({ isDarkMode }) {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTodo(e.target.value)
    };

    const handleChecked = (id) => {
        const updatedTodos = todos.map((t) =>
            t.id === id ? { ...t, checked: !t.checked } : t
        );
        setTodos(updatedTodos);
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    const handleAdd = () => {
        if (todo != '') {
            setTodos([...todos, { id: uuidv4(), todo, checked: false }])
            setTodo("");
        }
    };

    return (
        <div className={`bg-blue-100 h-100 w-100 flex items-center justify-center font-sans ${isDarkMode ? "bg-gray-900" : "bg-teal-lightest"}`}>
            <div className={`${isDarkMode ? "bg-gray-800 text-white shadow-lg" : "bg-white text-black shadow"} rounded p-6 m-4 w-full lg:w-3/4 lg:max-w-lg`}>
                <div className="mb-4">
                    <h1 className={`text-center ${isDarkMode ? "text-white" : "text-grey-darkest"}`}>My Todo List</h1>
                    <div className="flex mt-4">
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "text-grey-darker"}`}
                            type="text"
                            value={todo}
                            onChange={handleChange}
                            placeholder="add a todo..."
                        />
                        <button
                            className={`flex-no-shrink p-2 ml-2 border-2 rounded ${isDarkMode ? "text-teal-200 border-teal-200 hover:text-black hover:bg-teal-200" : "text-teal border-teal hover:bg-teal-200"}`}
                            onClick={handleAdd}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div>
                    {todos.map(item => (
                        <div key={item.id} className="flex mb-4 items-center">
                            <input
                                className={`cursor-pointer p-6 ${isDarkMode ? "bg-gray-800 border-gray-600" : ""}`}
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleChecked(item.id)}
                            />
                            <div className="flex pl-5 w-full">
                                <p className={`items-center break-words m-0 w-128 ${isDarkMode ? "text-white" : "text-grey-darkest"} ${item.checked ? "line-through" : ""}`}>{item.todo}</p>
                            </div>
                            <button
                                className={`flex-no-shrink p-2 ml-2 rounded ${isDarkMode ? "text-red-300 border border-red-200 hover:bg-red-900" : "text-red border-red hover:bg-red-100"}`}
                                onClick={() => handleDelete(item.id)}
                            >
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default NewTodo
