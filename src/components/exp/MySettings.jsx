import React from 'react'
import { Environmentsettings } from './settings/EnvironmentSettings'

export function Mysettings(props) {
    

    return (
        <>
           <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      
      <Environmentsettings/>
    </div>
        </>
    )
}
