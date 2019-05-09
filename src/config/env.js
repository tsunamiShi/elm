let baseUrl, 
    routerMode

if (process.env.NODE_ENV !== 'production') {
  baseUrl = ''
  routerMode = 'history'
} else {
  baseUrl = 'https://mainsite-restapi.ele.me'
  routerMode = 'hash'
}

export { baseUrl, routerMode }
    