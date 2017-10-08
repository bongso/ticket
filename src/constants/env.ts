import * as qs from 'querystring'

export const DEV = process.env.NODE_ENV !== 'production'

export const GA_TRACKING_ID = ''
export const NA_TRACKING_ID = ''
export const FB_TRACKING_ID = ''
export const SENTRY_TRACKING_ID = ''

export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''

export const API_GITHUB = 'https://api.github.com'

const GITHUB_CLIENT_ID = 'fa4c5809f5f54b69a415'
const LOGIN_GITHUB_REQUEST_URI = 'https://github.com/login/oauth/authorize'

export const LOGIN_GITHUB_REQUEST_URL = [
  LOGIN_GITHUB_REQUEST_URI,
  qs.stringify({
    client_id: GITHUB_CLIENT_ID,
    scope: ['read:org','repo'].join(',')
  })
].join('?')