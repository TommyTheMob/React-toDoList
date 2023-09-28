import {createSelector} from "reselect";


export const tasksListSelector = (state) => {
    return state.tasks.tasksList
}

export const sortedTaskListSelector = createSelector(
    [tasksListSelector],
    (tasksList) => {
        return [...tasksList].sort((task1, task2) =>  (task1.done - task2.done))
    }
)