import {Reducer} from 'redux'
import {GET} from 'redux-fetch'
import {API_GITHUB} from '../../constants/env'
import {createActions, createUpdateLoadingState, oAuthHeader, SUCCESS} from '../common'

export enum ActionTypes {
  ISSUES        = 'issues',
  NOTIFICATIONS = 'notifications',
}

const defaultState = {} as GithubState
const defaultMeta = {}
const updateLoadingState = createUpdateLoadingState([
  ActionTypes.ISSUES,
  ActionTypes.NOTIFICATIONS,
])

export const reducer: Reducer<GithubState> = (state = defaultState, action) => {
  state = updateLoadingState(state, action)

  const {type, payload} = action

  switch (type) {
    case ACTIONS_ISSUES[SUCCESS]:
      return {
        ...state,
        issues: payload
      }
    default:
      return state
  }
}

const ACTIONS_ISSUES = createActions(ActionTypes.ISSUES)
export const getGithubIssues = () => GET(
  `${API_GITHUB}/orgs/bongso/issues`,
  ACTIONS_ISSUES,
  {
    headers: oAuthHeader,
  })

export interface GithubState {
  wiki: string
  issues: Issue[]
}

export interface Issue {
  url: URL
  repository_url: URL
  labels_url: URL
  comments_url: URL
  events_url: URL
  html_url: URL
  id: number
  number: number
  title: string
  user: User,
  labels: any[],
  state: State
  locked: boolean
  assignee: User,
  assignees: User[],
  milestone: Milestone|null,
  comments: number
  created_at: Timestamp
  updated_at: Timestamp
  closed_at: Timestamp | null
  author_association: string
  repository: Repository,
  body: Markdown
}

interface Repository {
  id: number
  name: string
  full_name: string
  owner: User,
  private: boolean,
  html_url: URL
  description: string
  fork: boolean,
  url: URL
  forks_url: URL
  keys_url: URL
  collaborators_url: URL
  teams_url: URL
  hooks_url: URL
  issue_events_url: URL
  events_url: URL
  assignees_url: URL
  branches_url: URL
  tags_url: URL
  blobs_url: URL
  git_tags_url: URL
  git_refs_url: URL
  trees_url: URL
  statuses_url: URL
  languages_url: URL
  stargazers_url: URL
  contributors_url: URL
  subscribers_url: URL
  subscription_url: URL
  commits_url: URL
  git_commits_url: URL
  comments_url: URL
  issue_comment_url: URL
  contents_url: URL
  compare_url: URL
  merges_url: URL
  archive_url: URL
  downloads_url: URL
  issues_url: URL
  pulls_url: URL
  milestones_url: URL
  notifications_url: URL
  labels_url: URL
  releases_url: URL
  deployments_url: URL
  created_at: Timestamp
  updated_at: Timestamp
  pushed_at: Timestamp
  git_url: string
  ssh_url: string
  clone_url: URL
  svn_url: URL
  homepage: string | null,
  size: number
  stargazers_count: number
  watchers_count: number
  language: Language
  has_issues: boolean,
  has_projects: boolean,
  has_downloads: boolean,
  has_wiki: boolean,
  has_pages: boolean,
  forks_count: number
  mirror_url: null,
  open_issues_count: number
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
}
interface User {
  login: string
  id: number
  avatar_url: URL
  gravatar_id: string
  url: URL
  html_url: URL
  followers_url: URL
  following_url: URL
  gists_url: URL
  starred_url: URL
  subscriptions_url: URL
  organizations_url: URL
  repos_url: URL
  events_url: URL
  received_events_url: URL
  type: UserType
  site_admin: boolean
}
interface Milestone {
  url: URL
  html_url: URL
  labels_url: URL
  id: number
  number: number
  title: string
  description: string
  creator: User
}

type Timestamp = string
type URL = string
type State = 'open' | string
type Markdown = string
type UserType = 'User' | string
type Language = string