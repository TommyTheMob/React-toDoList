import * as tasksGateway from "./tasksGateway";
import {tasksListSelector} from "./tasks.selectors";

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED'

export const tasksListReceived = (tasksList) => {
    return {
        type: TASKS_LIST_RECEIVED,
        payload: {
            tasksList
        }
    }
}


export const getTasksList = () => {
    return  function (dispatch) {
        tasksGateway.fetchTasksList()
            .then(tasksList => dispatch(tasksListReceived(tasksList)))
    }
}

export const createTask = taskText => {
    return function (dispatch) {
        const task = {
            id: Math.round(Math.random() * 1000000),
            text: taskText,
            done: false,
            createdAt: new Date().toISOString()
        }

        tasksGateway
            .createTask(task, task.id)
            .then(() => dispatch(getTasksList()))
    }
}

export const updateTask = (taskId) => {
    return  function (dispatch, getState) {
        const state = getState()
        const tasksList = tasksListSelector(state)
        const taskToUpdate = tasksList.find(task => task.id === taskId)

        const updatedTask = {
            ...taskToUpdate,
            done: !taskToUpdate.done
        }

        tasksGateway
            .updateTask(taskId, updatedTask)
            .then(() => dispatch(getTasksList()))
    }
}

export const deleteTask = (taskId) => {
    return  function (dispatch) {
        tasksGateway
            .deleteTask(taskId)
            .then(() => dispatch(getTasksList()))
    }
}