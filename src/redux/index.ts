import {combineReducers} from 'redux'
import {reducer as persist, PersistState} from './persist/index'
import {reducer as github, GithubState} from './github/index'
import {reducer as system, SystemState} from './system/index'
import {reducer as router} from './router/index'

export const reducer = combineReducers<RootState>({
  persist,
  github,
  system,
  router,
})

export interface RootState {
  persist: PersistState
  github: GithubState
  system: SystemState
}
