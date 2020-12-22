import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img
          src='https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''
        />
        <Avatar src={user.photoUrl} className='sidebar_avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>623</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on post</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
      </div>

      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('React Js')}
        {recentItem('Programming')}
        {recentItem('Engineering')}
        {recentItem('Back-End')}
        {recentItem('Block-chains')}
      </div>
    </div>
  );
};

export default Sidebar;
