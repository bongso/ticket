import * as React from 'react'
import {getGithubIssues, Issue} from '../redux/github/index'
import {connect} from 'react-redux'
import {RootState} from '../redux/index'
import {bindActionCreators} from 'redux'
import {IfGuestThenGoLogin} from './IfGuestThenGoLogin'

export const Home = connect(
  (state: RootState) => {
    return {
      issues: state.github.issues
    }
  },
  dispatch => bindActionCreators({
    getGithubIssues
  }, dispatch)
)(
  class Home extends React.Component<Props, State> {
    constructor(props) {
      super(props)
      this.onLoggedIn = this.onLoggedIn.bind(this)
    }
    render() {
      const {issues = []} = this.props

      return (
        <div className={`row home`}>
          <IfGuestThenGoLogin onLoggedIn={this.onLoggedIn}/>
          home
          <div>
            {
              issues
                .map(issue => {
                  return (
                    <div>
                      {issue.title}
                    </div>
                  )
                })
            }
          </div>
        </div>
      )
    }

    componentDidMount() {

    }

    onLoggedIn() {
      this.props.getGithubIssues()
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
