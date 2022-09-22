
import { useState,useEffect} from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height:"45%",
    borderRadius:"20px"
  },
  
};


export default function Modal1(props) {
  const navigate=useNavigate()
  const [Amount,setAmount]=useState(0)
  const [Recipent,setRecipent]=useState("")
   const dataHandler=(event)=>{
    event.preventDefault()
    if(Recipent!=props.Email){
      axios.patch(`http://localhost:3000/amountTransfer?UserEmail=${props.Email}&Recipent=${Recipent}&Amount=${Amount}`).then((result)=>{
        alert("Transfered")
        navigate("/ViewallCustomer")
      }).catch((error)=>{
        alert("Not Transferred")
      })
    }
    else{
      alert("Same Email of User and Recipent")
    }
   }
    function Eventhandler(){
        return props.setOpenModal(false)
    }
    const recipentHandler=(event)=>{
      setRecipent(event.target.value)
    }
    const amountHandler=(event)=>{
      setAmount(event.target.value)
    }
 return (
    <div>
      <Modal
        isOpen={props.flag}
        onHide={Eventhandler}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className='flex flex-col justify-center py-2 space-y-2'>
          <h1 className='font-extrabold'>To (write Email)</h1>
          <input className='border border-black rounded-sm' type="email" onChange={recipentHandler}></input>
          <h1 className='font-extrabold'>Enter Amount</h1>
          <input className='border border-black rounded-sm' type="Number" onChange={amountHandler}></input>
          <button className='bg-[#2189b6] rounded-full p-2 w-20 text-white' onClick={dataHandler}>Confirm</button>
          <button className='bg-[#2189b6] rounded-full p-2 w-20 text-white' onClick={Eventhandler}>Close</button>
        </form>
      </Modal>
    </div>
  );
}