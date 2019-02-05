import { SET_ACTION_LIST, SET_USERS_LIST } from '../actions'

export default (state = { notificationsList: [], usersList: [] }, action) => {
  switch (action.type) {
    case SET_ACTION_LIST:
      return {
        ...state,
        notificationsList: action.payload
      }
    case SET_USERS_LIST:
      return {
        ...state,
        usersList: action.payload
      }
    default:
      return state
  }
}