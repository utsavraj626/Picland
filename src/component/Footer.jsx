import React from 'react'
import glogo from '../asset/logo/logo_green.png'
import { Link } from 'react-router-dom'
import { FaSquareXTwitter } from "react-icons/fa6";

import {FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


export default function Footer() {


  return (
    <div className='w-[100%] bg-[#1E1E1E] lg:h-[395px] md:h-[395px] '>
        <div className='m-auto text-white w-[90%] pt-[40px] lg:flex md:flex  justify-around font-medium'>
           <div className='flex-col space-y-4 text-[#B5B4AF] mt-8'><span className='text-white'>CONTENT</span>
             <ul className='my-5'>Nature</ul>
             <ul>Fashion</ul>
             <ul>Concept</ul>
             <ul>Feshtival</ul>
             
           </div>

           <div className='flex-col space-y-4 text-[#B5B4AF] mt-8'><span className='text-white'>INFORMATION</span>
           <ul className='my-5'>Pricing</ul>
             <ul>About us</ul>
             <ul>Join us</ul>
             <ul>Just learn</ul>
             
           </div>
           <div className='flex-col space-y-4 text-[#B5B4AF] mt-8'><span className='text-white'>LEGAL</span>
           <ul className='my-5'>Nature</ul>
             <ul>Fashion</ul>
             <ul>Concept</ul>
             <ul>Feshtival</ul>
             
           </div>

           {/* social section */}
           <div className='mt-8'>
  <div className='flex-col space-y-4 text-[#B5B4AF]'>
    <span className='text-white'>SOCIAL</span>
  </div>

  <div className='flex flex-col space-y-4 mb-6 mt-4 ml-4'>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
      <FaSquareXTwitter size={24} />
    </a>

    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
      <FaInstagram size={24} />
    </a>

    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
      <FaFacebook size={24} />
    </a>

    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
      <FaLinkedin size={24} />
    </a>
  </div>
</div>


        </div><hr className='w-[90%] border-gray-700 m-auto mt-10'/>
        <div className='lg:flex md:flex mt-7 justify-between w-[88%] m-auto'>
          <div className='flex'>
             <div className='mr-4'><img src={glogo} className='lg:w-[180px] md:w-[180px] w-[82px]'/></div>
             <div className='text-[#727272] lg:text-[16px] md:text-[16px] text-[10px]'><p>Copyright © 2010-2024 Roughedge Company S.L. All rights reserved.</p></div>
          </div>
          <div className='text-white mt-5 lg:mt-0 md:mt-0'><button type="button" className='border w-[119px] h-[39px] rounded-[4px]'>English</button></div>
        </div>
        <div className='w-[100%]  h-[32px] mt-5 bg-[#181717]'>
          <div className='flex text-[#525050] lg:text-[14px] md:text-[14px] text-[10px] pt-2 justify-between w-[90%] m-auto'>
            <p>Roughedge Company Project</p>
             <div className='flex gap-10'>
              <Link to="https://just-learn-frontend.vercel.app/"><p>Justlearn</p></Link>
              <p>Picland</p>
             </div>
          </div>
        </div>
    </div>
  )
}
