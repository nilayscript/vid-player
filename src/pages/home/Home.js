import React, { useEffect } from 'react';
import banner from '../../assets/banner.png';
import logo from '../../assets/logo.png';

import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { loginUser } from '../../redux/services/Constants';
import { useCheckStatusQuery } from '../../redux/services/HomeApi';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {checkStatus} = useCheckStatusQuery();
  console.log(checkStatus);
  
  const checkValidation = () => {
  const token = Cookies.get('token');
  console.log(token);
    if (token) {
        dispatch(loginUser());
        navigate('/home');
    }else{
        navigate('/login');
    }
  }

    useEffect(() => {
    const timer = setTimeout(() => {
        checkValidation();
    }, 2000);

    return () => clearTimeout(timer);
    }, []);

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
        <div className='flex items-center justify-center py-3 rounded-[4px] text-center'>
            <div className='flex  items-center justify-center'>
                <img src={logo} alt="digisigns"/>
            </div>
        </div>
    </div>
  );
};

export default Home;
