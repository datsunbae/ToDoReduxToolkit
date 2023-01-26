export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleStatus = (id) => {
    return {
        type: 'todoList/toggleStatus',
        payload: id
    }
}

export const searchTodo = (text) => {
    return {
        type: 'filter/searchTodo',
        payload: text
    }
}

export const statusTodo = (status) => {
    return {
        type: 'filter/statusTodo',
        payload: status
    }
}

export const prioritiesTodo = (priorities) => {
    return {
        type: 'filter/prioritiesTodo',
        payload: priorities
    }
}


