/**
* @providesModule Api
*/

class API {

  constructor(host){
    this.host = host
  }

  endpoints = {}

  commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  url(endpoint){
    return `${this.host}${this.endpoints[endpoint].path}`
  }

}

export default new API('');
