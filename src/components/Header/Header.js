import React from 'react';
import './Header.css';
import logo from '../../assets/linkedin.svg';
import HeaderOption from './HeaderOption';
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <img src={logo} alt='linkedin-logo' />
        <div className='header_search'>
          <Search />
          <input type='text' />
        </div>
      </div>

      <div className='header_right'>
        <HeaderOption Icon={Home} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
