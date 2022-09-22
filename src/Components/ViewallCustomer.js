import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

export default function ViewallCustomer() {
  const navigate=useNavigate()
  const [Customers, setCustomers] = useState([])
  useEffect(()=>{
    datahandler()
  },[])
  const datahandler=()=>{
    axios.get("http://localhost:3000/getCustomers").then((result)=>{
      setCustomers(result.data)
    })
  }
  return (
    <>
    <Navbar/>
    <div className='flex flex-row items-center justify-between p-10 pt-20'>
    <h1 className='text-white font-bold text-5xl text-gradient text-shadow-sm'>
      Our Customers
      </h1>
      <div class="flex justify-center items-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm h-96 w-90 p-4 overflow-x-hidden">
        <table class="overflow-x-hidden">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-bold text-gray-900  text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-bold pl-10 text-gray-900  text-left">
                Email
              </th>
              <th scope="col" class="text-sm font-bold text-gray-900  text-left">
                View
              </th>
            </tr>
          </thead>
          <tbody className='scroll-smooth overflow-x-hidden'>
            {
              Customers.map((object)=>{
                return(
                <tr className="border-y border-gray-300">
                <td scope="col" class="text-sm font-mediumext-gray-900  text-left">
                  {object.Name}
                </td>
                <td scope="col" class="text-sm pl-4 font-medium text-gray-900  text-left">
                {object.Email}
                </td>
                <td className='rounded-sm text-x'>
                   <button className='bg-[#053347] text-white p-2 mx-4 my-4 rounded-full' onClick={()=>{
                    return(
                    navigate('/ViewallCustomer/ViewSingle',{
                      state:{
                        Name:object.Name,
                        Email:object.Email,
                        CurrentBalance:object.CurrentBalance
                      }
                    })
                )}}>View</button>

                </td>
              </tr>
              )})
            }
          </tbody>
        </table>
  </div>
</div>
    </div>
    </>
    
  )
}
