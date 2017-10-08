import * as React from 'react'
import {BodyHeader} from './BodyHeader'
import {Panel} from './Panel'

export class Body extends React.Component {
  render() {
    return (
      <div>
        body
        <BodyHeader/>
        <Panel/>
      </div>
    )
  }
}