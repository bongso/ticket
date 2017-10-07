import * as React from 'react'
import {MainHeader} from './MainHeader'
import {Body} from './Body'

export class Main extends React.Component{
  render() {
    return (
      <div>
        main
        <MainHeader/>
        <Body/>
      </div>
    )
  }
}
