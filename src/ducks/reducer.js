const initialState = {
    user_id: null,
    username: null,
    password: null,
    profilePic: null
}

const SET_USER = 'SET_USER'

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export default (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_USER:
            const {id, username, password, profilePic} = payload
            return {...state, user_id: id, username, password, profilePic}
        default: return state
    }
}