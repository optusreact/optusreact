export const login = (username, password) => {
    return {
        type: 'LOGIN',
        email: username,
        password: password
    }
}
