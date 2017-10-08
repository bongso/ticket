import * as React from 'react'
import * as classnames from 'classnames'
import {connect} from 'react-redux'
import {RootState} from '../redux/index'
import stylesheet from './UserBanner.pcss'
import {bindActionCreators} from 'redux'
import {logout} from '../redux/system/index'

interface S {
  user: any
}
interface D {
  logout: typeof logout
}
interface O {
  className?: string
}
type Props = S & D & O
interface State {
  clicked: boolean
}
export const UserBanner = connect<S, D, O>(
  (state: RootState) => {
    return {
      user: state.persist.userInfo
    }
  },
  dispatch => bindActionCreators({
    logout
  }, dispatch)
)(
  class UserBanner extends React.Component<Props, State> {
    state = {
      clicked: false
    }
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
    render() {
      const {className, user} = this.props
      const {clicked} = this.state
      return (
        <div className={classnames(className, 'user-banner', 'text-right')} onClick={this.handleClick}>
          <style>{stylesheet}</style>
          {clicked && (
            <span className="logout" onClick={this.props.logout}>로그아웃</span>
          )}
          <img src={user.photo} role="presentation" width={32} height={32} />
          <span>{user.name}{user.email && `(${user.email})`}</span>
        </div>
      )
    }
    handleClick() {
      if (this.state.clicked) {
        return
      }
      this.setState(
        {clicked: true},
        () => setTimeout(_ => this.setState({clicked: false}), 2000)
      )
    }
  }
)
