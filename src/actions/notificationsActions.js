import { SET_ACTION_LIST } from './actionTypes'

export const getAllNotifications = () => dispatch => {
    // TODO: call api to get list of notifications
    const results = [
        {
            Id: 'id1',
            userId: 'userid1',
            title: 'title of notification 1',
            text: 'text of notification 1'
        },
        {
            Id: 'id2',
            userId: 'userid2',
            title: 'title of notification 2',
            text: 'text of notification 2'
        }
    ]
    dispatch({
        type: SET_ACTION_LIST,
        payload: results
    })
}