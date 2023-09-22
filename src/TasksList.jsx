import React, {useEffect, useState} from 'react'
import Task from './Task'
import CreateTaskInput from './CreateTaskInput'
import {createTask, fetchTasksList, updateTask, deleteTask} from "./tasksGateway";

const TasksList = () => {
    const [tasks, setTasks] = useState([])

    // Get an initial state of tasks when component mounts
    useEffect(() => {
        fetchTasks()
    }, []);

    const fetchTasks = () => {
        fetchTasksList()
            .then(tasksList => setTasks(tasksList))
    }


    const onCreate = (text) => {
        const newTask = {
            text,
            done: false,
        }

        createTask(newTask)
            .then(() => fetchTasks())

    }

    const handleTaskStatusChange = (id) => {
        const { done, text } = tasks.find(task => task.id === id)
        const updatedTask = {
            text,
            done: !done
        }

        updateTask(id, updatedTask)
            .then(() => fetchTasks())
    }

    const handleTaskDelete = (id) => {
        deleteTask(id).then(() => fetchTasks())

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


// { text: 'Buy milk', done: false, id: 1 },
// { text: 'Pickup Tom from Airport', done: false, id: 2 },
// { text: 'Visit party', done: false, id: 3 },
// { text: 'Visit doctor', done: true, id: 4 },
// { text: 'Buy meat', done: true, id: 5 }