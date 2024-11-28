import React from 'react';
import navBg from '../../src/assets/more/15.jpg';
import logo from '../assets/more/logo1.png'

const Navbar = () => {
    return (
    
          <div style={{backgroundImage : `url(${navBg})`, }} className='w-screen h-16  bg-cover bg-center flex items-center justify-center'  >
              <div className="flex justify-center items-center gap-4">
                <img className='w-14' src={logo} alt="" />
                  <h1 className='text-center text-white text-4xl font-bold'>Espresso Emporium</h1>
              </div>
          </div>
       
    );
};

export default Navbar;