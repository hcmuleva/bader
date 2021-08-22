import React from 'react'
import TestResults from './runengine/TestResults'

export function Dashboard(props) {
    

    return (
        <>
             <div
      style={{
     
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <TestResults/>
    </div>
        </>
    )
}
