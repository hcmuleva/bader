import { Button } from 'antd';
import React from 'react'
import {useHistory } from 'react-router-dom';
export function Logout(props) {
  
  let history = useHistory();

  return (
    <>
     <Button onClick={()=>{
          if(localStorage.getItem('token')){
            localStorage.removeItem("token")
          }
          if(localStorage.getItem("user")){
            localStorage.removeItem("user")
          }
          history.push("/login");
  
        }}>Logout</Button>
    </>
  )
}
