import * as React from 'react'
import {Provider} from 'react-redux'
import {Layout} from '../src/components/Layout'
import {StaticPage} from './_page'
import {Login} from '../src/components/Login'

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Login/>
        </Layout>
      </Provider>
    )
  }
}