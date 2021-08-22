import axios from "axios";
import SERVER_CONFIG from './SERVER_CONFIG'
/**
 * @Copyright by https://loizenai.com
 *        youtube loizenai
 */
 const api_server=SERVER_CONFIG. my_api_server().API_SERVER_URL
 const accesstoken=JSON.parse(localStorage.getItem("Accesstoken"))
 const headers = {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": '*'
}
const headers_with_token = {
  'Content-Type': 'application/json',
  'accesstoken': `Bearer ${accesstoken}` ,
  "Access-Control-Allow-Origin": '*'
}
axios.defaults.headers.common = headers_with_token
axios.defaults.crossDomain = true;
class AuthenticationService {
  signin = (userdata) => {
      return axios.post(api_server+"/api/user/login",userdata,headers)
        .then(response => {
          if (response.data.accesstoken) {
            localStorage.setItem("accesstoken",response.data.accesstoken)
            localStorage.setItem("user", JSON.stringify(response.data.user));
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async(registrationdata) => {
    return axios.post(api_server+"/api/user/register", registrationdata, headers)
    .then(response => {
      if (response.data.accesstoken) {
        localStorage.setItem("accesstoken",response.data.accesstoken)
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      return response.data;
    })
    .catch(error => {
      if(error.response.status ==409)
      return {"error":"User ID already exists, please try some other user id"}
    });
  }

  getCurrentUser() {
    return axios.get(api_server+"/api/user/me", headers_with_token)
    .then(response => {
      if (response.data.accesstoken) {
        localStorage.setItem("accesstoken",response.data.accesstoken)
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      return response.data;
    }).catch(error => {
      if(error.response.status ==404){
        console.log("USE ID DOES NOT EXIST,")
        return {"error":"UserId does not exist"}
      }else {
        return {"error": "Some error in get profile"}
      }
      
    });
    
  }

  updateUser(userdata) {
    console.log("header for update ",headers_with_token)
    return axios.put(api_server+"/api/user/update", userdata, headers_with_token)
    .then(response => {
      console.log("Recieved Response for update",response )
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    })
    .catch(error => {
      if(error.response.status ==404)
      return {"error":"UserId does not exist"}
    });

  }
}

export default new AuthenticationService();