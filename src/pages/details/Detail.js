import React from 'react';
import banner from '../../assets/banner.png';
import logo from '../../assets/logo.png';
import qr from '../../assets/qr.png';

import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div style={{ 
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <div className='bg-[rgba(0,0,0,0.8)] w-[56rem] flex flex-col items-center justify-center py-3 rounded-[4px] text-center'>
            <div className='flex  items-center justify-center'>
                <img src={logo} alt="digisigns"/>
            </div>
            <div className='px-6'>
                <h1 className='text-[20px] font-[700] text-[#D9DADE]'>You are currently signed in with the Screen ID <span className='text-[#E60023]'>Vetic7</span> on the parent account <span className='text-[#E60023]'>social@vetic.in</span> </h1>
                <div className='flex items-center justify-center my-6 gap-12 w-full'>
                    <div className='w-[16rem] p-3 cursor-pointer flex items-center justify-center bg-[#E50914] text-white h-[2.8rem] rounded-[4px]'>Back to Playing</div>
                    <div className='w-[16rem] p-3 cursor-pointer flex items-center justify-center bg-[#E50914] text-white h-[2.8rem] rounded-[4px]'>Logout</div>
                </div>
            </div>
            <div className='p-6 w-full flex flex-col gap-6'>
                    <h1 className='font-[500] text-[15px] text-[#737373]'>Media will resume playing in <span className='text-[#E60023]'>00:30</span> </h1>
                    <h1 className='text-[10px] text-[#B3B3B3] my-3 font-[400]'>Need help? Connect with us at support@digisigns.in</h1>
            </div>
        </div>
    </div>
  );
};

export default Detail;
