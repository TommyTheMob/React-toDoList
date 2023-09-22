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

    const onCreate = (inputValue) => {
        setTasks([
            ...tasks,
            { text: inputValue, done: false,  id: Math.random()}
        ])
    }

    const handleTaskStatusChange = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const handleTaskDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }


    const sortedTasks = [...tasks]
        .sort((task1, task2) =>  (task1.done - task2.done))
    return (
        <>
            <div className="todo-list">
                <CreateTaskInput onCreate={onCreate} />
                <ul className="list">
                    {sortedTasks.map(task => (
                        <Task key={task.id} {...task} onChange={handleTaskStatusChange} onDelete={handleTaskDelete} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TasksList