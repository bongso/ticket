import * as React from 'react'
import * as classnames from 'classnames'
import {LOGIN_GITHUB_REQUEST_URL} from '../constants/env'

export const Login = props =>
  <div className={classnames('home', 'text-center')}>
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">봉소랩스 Tickets</h4>
      <p>로그인하세요.</p>
      <p className="mb-0">
        <a className={classnames('col-6', 'align-items-center')} href={LOGIN_GITHUB_REQUEST_URL}>
          <img width={64} height={64} src="/static/img/github-icon.svg" alt="login with github"/>
        </a>
      </p>
      <hr/>
    </div>
  </div>