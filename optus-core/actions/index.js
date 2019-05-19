export const login = (username, password) => {
    return {
        type: 'LOGIN',
        email: username,
        password: password
    }
}

export const getUser = () => {
    return {
        type: 'GET_USER'
    }
}
