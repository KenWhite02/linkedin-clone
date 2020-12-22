import React from 'react';
import { Avatar } from '@material-ui/core';
import './HeaderOption.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && (
        <Avatar className='headerOption_icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;
