import * as React from 'react'
import {Provider} from 'react-redux'
import {StaticPage} from '../_page'
import {Layout} from '../../src/components/Layout'
import {isomorphicQuery} from '../../packages/nextjs-isomorphic-query'
import {Authenticator} from '../../src/components/Authenticator'

export default class Index extends StaticPage<{}> {
  render() {
    const {access_token} = isomorphicQuery(this.props.url.query)

    return (
      <Provider store={this.store}>
        <Layout>
          <Authenticator accessToken={access_token} />
        </Layout>
      </Provider>
    )
  }
}