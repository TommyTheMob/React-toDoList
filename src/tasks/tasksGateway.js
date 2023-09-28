const baseUrl = 'http://localhost:3001/tasks' /* local JSON server using db from server dir. */
// const baseUrl = 'https://dzqwdg-8080.csb.app/tasks' /* codesandbox.io json-server coolest thing ever trust me */

export const createTask = (taskData) => {
    return fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task')
        }
    })
}

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Failed to fetch data')
            }
        })
}

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task')
        }
    })
}

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task')
        }
    })
}