import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='w-10/12 text-center mx-auto justify-center'>
          <img className='mx-auto' src={logo} alt="" />
          <p className=''>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;