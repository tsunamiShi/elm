let baseUrl;
let routerMode;
if (process.env.NODE_ENV == 'development') {
  baseUrl = '';
  routerMode = 'history'
} else {
  baseUrl = 'https://mainsite-restapi.ele.me';
  routerMode = 'hash'
}

export { baseUrl, routerMode }