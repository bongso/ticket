import * as React from 'react'
import {SFC} from 'react'
import {connect} from 'react-redux'
import {ROUTES} from '../constants/routes'
import Link from 'next/link'
import {bindActionCreators} from 'redux'
import {DEV} from '../constants/env'
import {loggedIn} from '../redux/system/index'

interface S {
}
interface D {
  loggedIn: typeof loggedIn
}
interface O {
  accessToken: string
}

type Props = S & D & O

interface State {
  deny: boolean
}

export const Authenticator = connect<S, D, O>(
  null,
  dispatch => bindActionCreators({
    loggedIn
  }, dispatch)
)(
  class Authenticator extends React.Component<Props, State> {
    state = {
      deny: false
    }

    render() {
      return this.state.deny && <AccessDeny/>
    }

    componentDidMount() {
      //fixme: dev hack
      console.warn('fixme: redirection dev hack')
      if (!location.host.includes('localhost')) {
        if (confirm('localhost로 리다이렉션 하시겠습니까?')) {
          return location.href = location.href.replace(location.origin, 'http://location:3000')
        }
      }
      //
      const {accessToken} = this.props

      if (!accessToken) {
        return this.setState({deny: true})
      }
      this.props.loggedIn({
        token: accessToken,
      })
    }
  }
)

const AccessDeny: SFC<{}> = (props) =>
  <div className="alert alert-danger text-center" role="alert">
    <Link href={ROUTES.HOME}>
      <a>
        <h4 className="alert-heading">
          <i className="fa fa-ban fa-5x" />
          <p><cite>접근 권한 없음</cite></p>
        </h4>
        <h6>
          <p>홈으로 이동</p>
        </h6>
      </a>
    </Link>
  </div>
