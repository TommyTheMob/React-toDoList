import React, { useState } from 'react'

const TasksList = () => {
    const [tasks, setTasks] = useState([
        { text: 'Buy milk', done: false, id: 1 },
        { text: 'Pickup Tom from Airport', done: false, id: 2 },
        { text: 'Visit party', done: false, id: 3 },
        { text: 'Visit doctor', done: true, id: 4 },
        { text: 'Buy meat', done: true, id: 5 },
    ])

    return (
        <>
            <div className="todo-list">
                <ul className="list">
                    {tasks.map(task => (
                        <li
                            className="list-item"
                            key={task.id}
                        >
                            <input
                                className="list-item__checkbox"
                                type="checkbox"
                                defaultChecked={task.done}
                            />
                            {task.text}
                            <button className="list-item__delete-btn"></button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TasksList