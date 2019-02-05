import { SET_ACTION_LIST } from './actionTypes'
import { HTTP } from '../API'

export const getAllNotifications = () => async dispatch => {
    const results = await HTTP.get('Notifications')
    dispatch({
        type: SET_ACTION_LIST,
        payload: results.data
    })
}