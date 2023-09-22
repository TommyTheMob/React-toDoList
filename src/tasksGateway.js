const baseUrl = 'https://crudcrud.com/api/3c707d40ede64ef2b8b189d0abcb389a/tasks'

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;utf-8'
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
        .then(tasksList => tasksList.map(({_id, ...task}) => ({
                id: _id,
                ...task
            }))
        )
}

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;utf-8'
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task')
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