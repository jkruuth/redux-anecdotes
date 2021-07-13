const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'VISIBLE':
            return action.data
        default:
            return state
    }
}

export const messageNotification = (message) => {
    return {
        type: 'VISIBLE',
        data: message
    }
}

export default notificationReducer