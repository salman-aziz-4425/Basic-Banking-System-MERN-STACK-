import React, { useState } from 'react'
import Navbar from './Navbar'
import '../index.css'
import { useLocation } from 'react-router-dom'
import Modal1 from './ui/Modal'
export default function ViewSingle() {
    const [open,setOpen]=useState(false)
    const location=useLocation()
  return (
    <>
    <Navbar/>
    <div className='flex flex-row justify-between items-center px-6 align-middle pt-20' style={{backgroundColor:'white-glassmorphism'}}>
    <h1 className='text-white font-bold text-5xl text-gradient text-shadow-sm'>
    Customer Profile
      </h1>
    <div className='flex flex-col items-center bg-white h-96 w-60 rounded-md p-6'>
        <h1 className='font-bold py-4'>Name</h1>
        <p>{location.state.Name}</p>
        <h1 className='font-bold  py-4'>Email</h1>
        <p>{location.state.Email}</p>
        <h1 className='font-bold  py-4'>CurrentBalance</h1>
        <p className='py-4'>{location.state.CurrentBalance}</p>
        <button className='bg-[#2189b6] rounded-full text-white p-2' onClick={()=>setOpen(true)}>
            Transfer Money
        </button>
        <Modal1 flag={open} setOpenModal={setOpen} Email={location.state.Email}/>
    </div>
    </div>
    </>
  )
}
