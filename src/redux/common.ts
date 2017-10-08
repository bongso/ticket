import {RootState} from './index'

export function createActions(actionType: string): [string, string, string] {
  return [`request ${actionType}`, `success ${actionType}`, `fail ${actionType}`]
}

export function createUpdateLoadingState(types: string[]) {
  return function updateLoadingState(state, action) {
    if (!types.find(type => type === action.type.split(' ')[1])) {
      return state
    }
    const startsWith = String.prototype.startsWith.bind(action.type)

    if (startsWith('request')) {
      return {...state, loading: true}
    }
    return {...state, loading: false}
  }
}

export const headers = getState => {
  const state: RootState = getState()
  const {jwt: Authorization = ''} = state.persist.userInfo || {}

  return {Authorization}
}

export const oAuthHeader = getState => {
  const state: RootState = getState()
  const {token} = state.persist.userInfo || {} as any
  const Authorization = `Bearer ${token}`

  console.log({Authorization})
  return {
    Authorization
  }
}

export const REQUEST: REQUEST = 0
export const SUCCESS: SUCCESS = 1
export const FAIL: FAIL       = 2

export type REQUEST = 0
export type SUCCESS = 1
export type FAIL = 2
