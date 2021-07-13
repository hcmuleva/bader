import React from 'react'
import ReactPlayer from 'react-player'

export default function Player({ url, show }) {
  return (<>
    {show && <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
    />}</>
  )
}
