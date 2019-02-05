import { SET_ACTION_LIST, SET_USERS_LIST } from './actionTypes'
import { HTTP } from '../API'
import _ from 'lodash'

export const getAllNotifications = () => async dispatch => {
    const results = await HTTP.get('Notifications')
    dispatch({
        type: SET_ACTION_LIST,
        payload: results.data
    })
}

export const getNotificationsByUser = userId => async dispatch => {
    const results = await HTTP.get(`Notifications/userId/${userId}`)
    dispatch({
        type: SET_ACTION_LIST,
        payload: results.data
    })
}

export const getAllUsers = () => async dispatch => {
    const results = await HTTP.get('Notifications')
    const users = _.uniq(results.data.map(x => x.userId))
    dispatch({
        type: SET_USERS_LIST,
        payload: users
    })
}