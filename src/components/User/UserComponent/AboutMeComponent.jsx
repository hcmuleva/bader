import { Button } from 'antd'
import React from 'react'

export function AboutMeComponent(props) {
    
    const userdata=JSON.parse(localStorage.getItem("user"))
    const mydata=[33,44]
    let mydataval=[10,20]
    const myconsolidate=[...mydata,...mydataval]
    console.log("myconsolidate",myconsolidate)
    return (
        <>
            <h1>AboutMeComponent</h1>
            <Button type="primary" onClick={()=>{
                        props.setIsDisplay(true)
                    }}>Cancel</Button>
        </>
    )
}
