import * as React from 'react'
import * as classnames from 'classnames'
import stylesheet from './Header.pcss'
import Link from 'next/link'
import {ROUTES} from '../constants/routes'
import {connect} from 'react-redux'
import {RootState} from '../redux/index'
// import {Nav} from './Nav'
// import {UserBanner} from './UserBanner'
import {SITE_IMAGE} from '../constants/env'

interface S {
  me: object
}
interface D {

}
interface O {}
type Props =  S & D & O
export const Header = connect<S, D, O>(
  (state: RootState) => {
    return {
      me: state.persist.userInfo
    }
  }
)(
  class Header extends React.Component<Props, {}> {
    render() {
      const {me} = this.props
      return (
        <header className={classnames('row', 'align-items-center')}>
          <style>{stylesheet}</style>
          <div className="col-6">
            <Link href={ROUTES.HOME}>
              <a>
                <img src={SITE_IMAGE} width={32} height={32}/>
              </a>
            </Link>
          </div>
          {/*{me && <UserBanner className="col-6"/>}*/}
          {/*{me && <Nav className="col-12" user={me}/>}*/}
        </header>
      )
    }
  }
)

