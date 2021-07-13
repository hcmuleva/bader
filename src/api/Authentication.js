import { storage } from "./utils";

const API_URL = "http://localhost:5000/api";

export async function handleApiResponse(response) {
  console.log("API RESPONSE",response)
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  return await fetch(`${API_URL}/user/me`, {
    headers: {
      auth_token: storage.getToken()
    }
  }).then(handleApiResponse);
}

export async function loginWithEmailAndPassword(data){
  return window
    .fetch(`${API_URL}/user/login`, {
      method: "POST",
      data: JSON.stringify(data)
    })
    .then(handleApiResponse);
}

export async function registerWithEmailAndPassword(
  data
) {
  return window
    .fetch(`${API_URL}/user/register`, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(handleApiResponse);
}
