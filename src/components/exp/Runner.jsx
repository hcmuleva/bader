import React from 'react'
import { TextExecution } from './runengine/TestExecution'
import TestResults from './runengine/TestResults'

export function Runner(props) {
    

    return (
        <>
        
         <div
      style={{
       
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh'
      }}
    >
        <TextExecution/>
        
        </div>
            
        </>
    )
}
