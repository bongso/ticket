import * as React from 'react'
import {connect} from 'react-redux'
import {RootState} from '../redux/index'
import {SystemState} from '../redux/system/index'
import {PersistState} from '../redux/persist/index'
import {bindActionCreators} from 'redux'
import {changeUrl} from '../redux/router/index'
import {ROUTES} from '../constants/routes'

export const IfGuestThenGoLogin = connect<S, D, O>(
  (state: RootState) => {
    return {
      ...state.persist,
      ...state.system,
    }
  },
  dispatch => bindActionCreators({
    changeUrl
  }, dispatch)
)(
  class IfGuestThenGoLogin extends React.Component<Props, State> {
    state = {
      loginMessage: '로그인 중...'
    }

    static defaultProps = {
      onLoggedIn() {
      }
    }

    render() {
      return <div>{this.state.loginMessage}</div>
    }

    componentDidMount() {
      if (this.props.boot) {
        this.props.userInfo ? this.loggedIn() : this.loginFail()
      }
    }

    componentWillReceiveProps(props) {
      if (!this.props.boot && props.boot) {
        this.props.userInfo ? this.loggedIn() : this.loginFail()
      }
    }

    private protectedPage() {
      alert('로그인이 필요합니다.')
      this.props.changeUrl(ROUTES.LOGIN)
    }

    private loggedIn() {
      this.setState({loginMessage: ''}, this.props.onLoggedIn)
    }

    private loginFail() {
      this.setState({loginMessage: '로그인이 필요합니다.'}, this.protectedPage)
    }
  }
)

interface S extends PersistState, SystemState {
}
interface D {
  changeUrl: typeof changeUrl
}
interface O {
  onLoggedIn?()
}

type Props = S & D & O
interface State {
  loginMessage: string
}

