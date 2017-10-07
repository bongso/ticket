import * as React from 'react'

export class MainHeader extends React.Component {
  render() {
    return (
      <div>
        main-header
        <form className="form-inline">
          <input className="form-control" type="text" placeholder="Search issues in this project" aria-label="Search"/>
        </form>
      </div>
    )
  }
}