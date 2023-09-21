import React, { useState } from 'react'
import Task from './Task'
import CreateTaskInput from './CreateTaskInput'

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
                <CreateTaskInput />
                <ul className="list">
                    {tasks.map(task => (
                        <Task key={task.id} {...task} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TasksList