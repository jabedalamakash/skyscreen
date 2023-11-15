"use client"
import React from 'react'
import VideoPlayer from './VideoPlayer'

export default function VideoApp({children}) {
  return (
    <div>
    <VideoPlayer>
    {children}
    </VideoPlayer>
    </div>
  )
}
