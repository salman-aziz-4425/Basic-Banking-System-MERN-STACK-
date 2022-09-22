import React from 'react'
import Navbar from './Navbar'
import '../index.css'

export default function Homescreen() {
  return (
    <>
        <Navbar/>
    <div className='flex flex-row justify-between items-center align-middle pt-28 p-6'>
       <h1 className='text-white font-bold text-5xl text-gradient text-shadow-sm'>
             SA7 Banking System
        </h1>
        <iframe className='rounded-sm' allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/oLdHByqTCbogduiGpA/video" width="480"></iframe>
       </div>
       </>
  )
}
