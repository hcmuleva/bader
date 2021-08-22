import React from 'react'
import { useHistory } from "react-router-dom";

export function Logout(props) {
    const clearHistory =()=>{

        localStorage.clear();
        props.setIsLoggedin(false)
    }
   React.useEffect(()=>{
       clearHistory()
   },[])
    return (
        <>
            
        </>
    )
}
