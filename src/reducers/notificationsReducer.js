import { SET_ACTION_LIST } from '../actions'

export default (state = { notificationsList: [] }, action) => {
  switch (action.type) {
    case SET_ACTION_LIST:
      return {
        notificationsList: action.payload
      }
    default:
      return state
  }
}