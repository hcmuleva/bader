import axios from 'axios';
import SERVER_CONFIG from './SERVER_CONFIG';

// Add a request interceptor
axios.interceptors.request.use( config => {
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.accessToken){
    const token = 'Bearer ' + user.accessToken;
    config.headers.Authorization =  token;
  }

  return config;
});
const api_server=SERVER_CONFIG. my_api_server().API_SERVER_URL
class BackendService {
  async runTestCase(data){
    axios.defaults.crossDomain = true;
      data['headers']={"Access-Control-Allow-Origin": '*'}
    return await axios.post(api_server+"/test/runtc",data)
  }

  async getresult(){
    axios.defaults.crossDomain = true;
    return await axios.get(api_server+"/test/result")
  }
  
}

export default new BackendService();