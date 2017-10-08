import {Reducer} from 'redux'

const defaultState = {} as PersistState
export const reducer: Reducer<PersistState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ActionTypes.SAVE_USER_INFO:
      return {
        ...state,
        userInfo: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
  SAVE_USER_INFO = 'save user information',
  REMOVE_USER_INFO = 'remove user information',
}

export function saveUserInfo(userInfo) {
  return {
    type:    ActionTypes.SAVE_USER_INFO,
    payload: userInfo
  }
}
export function removeUserInfo() {
  return {
    type:    ActionTypes.REMOVE_USER_INFO
  }
}

export interface PersistState {
  userInfo: any
}
