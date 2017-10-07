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

      return (
        <div>
          Panel
          <PanelHeader/>
          <div>
            {
              issues
                .map(issue => {
                  return (
                    <div>
                      // panel-body
                      {issue.state}
                      {issue.title}
                      {issue.number}
                    </div>
                  )
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