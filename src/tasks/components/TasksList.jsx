import React, {useEffect} from 'react'
import Task from './Task'
import CreateTaskInput from './CreateTaskInput'
import * as tasksActions from '../tasks.actions'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {sortedTaskListSelector} from "../tasks.selectors";

const TasksList = ({ getTasksList, updateTask, deleteTask, createTask, tasks }) => {
    // Get an initial state of tasks when component mounts
    useEffect(() => {
        getTasksList()
    }, []);

    return (
        <>
            <div className="todo-list">
                <CreateTaskInput onCreate={createTask} />
                <ul className="list">
                    {tasks.map(task => (
                        <Task key={task.id} {...task} onChange={updateTask} onDelete={deleteTask} />
                    ))}
                </ul>
            </div>
        </>
    )
}

TasksList.propTypes = {
    getTasksList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape())
}

const mapState = (state) => {
    return {
        tasks: sortedTaskListSelector(state)
    }
}

const mapDispatch = {
    getTasksList: tasksActions.getTasksList,
    updateTask: tasksActions.updateTask,
    deleteTask: tasksActions.deleteTask,
    createTask: tasksActions.createTask,
}

const connectedTasksList = connect(mapState, mapDispatch)(TasksList)

export default connectedTasksList