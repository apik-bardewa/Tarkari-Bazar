import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
function Nav() {
  const [menu, setmenu] = useState(false)
  return (
    <div>
      <div className='flex justify-between text-lg gap-1 px-5 mt-3'>
        <div className='flex'>
          <Link className='hover:border-2 hover:font-bold hover:rounded-lg px-2 border-2 rounded-lg' to='/'>Home</Link>
        </div>

        <div>
          <input type='text'placeholder='search product' className='border-2 rounded-lg pl-2 h-10 sm:w-32 md:w-65  lg:w-130  hover:border-3'></input>
        </div>

        <div className='flex gap-2 mr-2 p-1 hidden sm:block'>
          <Link className='hover:border-2 hover:font-bold hover:rounded-lg border-2 px-1 mr-2 rounded-lg' to='/about'>About</Link>
          <Link className='hover:border-2 hover:font-bold hover:rounded-lg border-2 px-1 mr-2 rounded-lg' to='/detail'>Details</Link>
          <Link className='hover:border-2 hover:font-bold hover:rounded-lg border-2 px-1 mr-2 rounded-lg' to='/login'>Login</Link>
          <Link  className='hover:border-2 hover:font-bold hover:rounded-lg border-2 px-1 mr-2 rounded-lg' to='/singup'>SingUp</Link>
          <button className='hover:border-2 hover:font-bold hover:rounded-lg px-1 border-2 rounded-lg'>Dark/Light</button>
        </div>

        <div className='block sm:hidden flex gap-3'>
          <button className='hover:border-2 hover:font-bold hover:rounded-lg px-1 '>Dark/Light</button>
          <CiMenuBurger className='mt-2 block md:hidden'onClick={()=>{setmenu(!menu)}} />
        </div>

      </div>

      <div className={`sm:hidden absolute top-18 h-[90%] right-0 w-40 bg-green-500 text-white rounded transition-all duration-500 transform
        ${menu ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"}`}>
        <li className='pl-4 mt-5 list-none'><Link to='/about' className='hover:text-lg hover:font-bold'>About</Link></li>
        <li className='pl-4 mt-5 list-none'><Link to='/detail' className='hover:text-lg hover:font-bold'>Detail</Link></li>
        <li className='pl-4 mt-5 list-none'><Link to='/contact' className='hover:text-lg hover:font-bold'>Contact</Link></li>
        <li className='pl-4 mt-5 list-none'><Link to='/login' className='hover:text-lg hover:font-bold'>Login</Link></li>
        <li className='pl-4 mt-5 mb-5 list-none'><Link to='/register' className='hover:text-lg hover:font-bold'>SignUp</Link></li>
      </div>
   
    </div>
  )
}

export default Nav
  