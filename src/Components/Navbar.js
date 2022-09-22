import { NavLink } from 'react-router-dom';
import '../App.css';
function Navbar(){
return(
    <>
   <div className='p-4 flex justify-between items-center'>
    <div>
    <img
    src='https://www.clipartkey.com/mpngs/m/156-1567573_core-banking-system-icon.png'
    className='h-10 w-10 rouded-sm'
    />
    </div>
    <ul className='space-x-6'>
    <NavLink className='text-white font-extrabold hover:text-gray-600' to={"/"}> 
            Home
        </NavLink>
        <NavLink className='text-white font-extrabold hover:text-gray-600' to={"/ViewallCustomer"}> 
            Our Customers
        </NavLink>
    </ul>
   </div>
    </>
)
}

export default Navbar