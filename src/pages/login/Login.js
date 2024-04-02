import React from 'react';
import banner from '../../assets/banner.png';
import logo from '../../assets/logo.png';
import qr from '../../assets/qr.png';
import { useState } from 'react';
import { useLoginMutation } from '../../redux/services/AuthApi';

import { useNavigate } from "react-router-dom";
import {Loading3QuartersOutlined} from '@ant-design/icons';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/services/Constants';
import { message } from 'antd';
import { domain } from '../../config';

const Login = () => {
  const [screenId, setScreenId] = useState('');
  const [screenPassword, setScreenPassword] = useState('');
  const [login,{isLoading:isLogging}] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result  = await login({
            username:screenId,
            password:screenPassword,
        })
      console.log(result);
    //   if(result?.data?.success){
    //         message.success(result?.data?.message);
    //         const token = result.data.token;
    //         Cookies.set('token', token, { domain: domain, expires: 1 });
    //         dispatch(loginUser());
    //         navigate('/');
    //   }else{
    //         message.error(result?.data?.message);
    //   }
      }catch(error){
        message.error("Some error occured");
      }
    };

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
        <div className='bg-[rgba(0,0,0,0.8)] w-[28rem] flex flex-col items-center justify-center py-3 rounded-[4px]'>
            <div className='flex  items-center justify-center'>
                <img src={logo} alt="digisigns"/>
            </div>
            <div className='p-6 w-full'>
                <h1 className='text-[#D9DADE] text-[20px] font-[700]'>SIGN IN</h1>
                <div className='flex flex-col gap-2 my-2 w-full'>
                    <input 
                      type="text" 
                      placeholder='Screen ID' 
                      className='focus:outline-none border-none text-[#B3B3B3] bg-[#333333] opacity-[100%] h-[3rem] p-2 rounded-[4px] placeholder:font-[500] placeholder:text-[15px]'
                      value={screenId}
                      onChange={(e) => setScreenId(e.target.value)}
                    />
                    <input 
                      type="password" 
                      placeholder='Screen Password' 
                      className='bg-[#333333] focus:outline-none border-none text-[#B3B3B3] opacity-[100%] h-[3rem] p-2 rounded-[4px] placeholder:font-[500] placeholder:text-[15px]'
                      value={screenPassword}
                      onChange={(e) => setScreenPassword(e.target.value)}
                    />
                </div>
                <div>
                    <div onClick={handleLogin} className='cursor-pointer flex items-center justify-center bg-[#E50914] text-white h-[2.8rem] rounded-[4px]'>Sign In</div>
                    <h1 className='text-[10px] text-[#B3B3B3] my-3 font-[400]'>Need help? Connect with us at support@digisigns.in</h1>
                </div>
            </div>
            <div className='flex items-center justify-between p-6 gap-12'>
                <h1 className='text-[15px] text-[#B3B3B3] my-3 font-[400]'>New to Digisigns? Go to https://www.digisigns.in to sign up & set up your digital signages right now.</h1>
                <img src={qr} alt="digisigns"/>
            </div>
        </div>
    </div>
  );
};

export default Login;
