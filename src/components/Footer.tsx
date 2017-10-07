import * as React from 'react'
import stylesheet from './Footer.pcss'
import {version} from '../../package.json'
import {DEV} from '../constants/env'

export const Footer = props =>
  <footer className="row">
    <style>{stylesheet}</style>
    <div className="col-12">
      <span>
        <i className="fa fa-code-fork fa-lg"/> v{version} {DEV && 'development'} |&nbsp;
      </span>
      © 2017 봉소랩스 Inc. All rights reserved.
      &nbsp;
      <a target="_blank" href="https://github.com/bongso">
        <img width={32} height={32} src="/static/img/github-icon.svg" alt="bongso github"/>
      </a>
      &nbsp;
      <a target="_blank" href="https://deptno.slack.com/messages/C587B5X9T">
        <img width={32} height={32} src="/static/img/slack.svg" alt="bongso github"/>
      </a>
    </div>
  </footer>
