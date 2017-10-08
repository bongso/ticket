import * as React from 'react'
import {getGithubIssues, Issue} from '../redux/github/index'
import {connect} from 'react-redux'
import {RootState} from '../redux/index'
import {bindActionCreators} from 'redux'
import {PanelHeader} from './PanelHeader'

export const Panel = connect(
  (state: RootState) => {
    return {
      issues: state.github.issues
    }
  },
  dispatch => bindActionCreators({
    getGithubIssues
  }, dispatch)
)(
  class Panel extends React.Component<Props, State> {
    render() {
      const {issues = []} = this.props
      const repos = issues
        .map(issue => issue.repository.name)
      const uniqueRepos = Array.from( new Set(repos) )

      return (
        <div>
          Panel
          <PanelHeader/>
          <div>
            {
              uniqueRepos
                .map(repo => {
                  return  issues
                    .filter(issue => {
                      return issue.repository.name == repo
                    })
                    .map(issue => {
                      return (
                        <div className="row">
                          <div className="col-2"> [{issue.state}|{issue.comments}] </div>
                          <div className="col-6"> <a href={issue.html_url} target={'_blank'}>{issue.title}</a> #{issue.number}</div>
                          <div className="col-3"> <a href={issue.repository.html_url} target={'_blank'}> {issue.repository.name}</a> </div>
                        </div>
                      )
                    })
                })
            }
          </div>
        </div>
      )
    }
  }
)

interface StateProps {
  issues: Issue[]
}
interface DispatchProps {
  getGithubIssues: typeof getGithubIssues
}
interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps
interface State {
}