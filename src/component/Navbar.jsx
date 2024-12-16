import React from 'react';
import navBg from '../../src/assets/more/15.jpg';
import logo from '../assets/more/logo1.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    
          <div style={{backgroundImage : `url(${navBg})`, }} className=' h-16  bg-cover bg-center flex items-center justify-center'  >
              <div className="flex justify-center items-center gap-4">
                <img className='w-14' src={logo} alt="" />
                  <h1 className='text-center text-white text-4xl font-bold'>Espresso Emporium</h1>
                  <ul className='ml-10 border border-gray-500 flex gap-4'>
                    <li className='text-3xl text-white'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='text-3xl text-white'><NavLink to={'/signup'}>Sign Up</NavLink></li>
                    <li className='text-3xl text-white'><NavLink to={'/signin'}>Sign In</NavLink></li>
                    <li className='text-3xl text-white'><NavLink to={'/users'}>Users</NavLink></li>
                  </ul>
              </div>
          </div>
       
    );
};

export default Navbar;