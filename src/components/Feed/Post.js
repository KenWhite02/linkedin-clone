import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import {
  ChatOutlined,
  SendOutlined,
  Share,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import InputOption from './InputOption';
import './Post.css';

const Post = forwardRef(({ name, description, message, photUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
        <Avatar src={photUrl}>{name[0]}</Avatar>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post_body'>
        <p>{message}</p>
      </div>

      <div className='post_buttons'>
        <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
        <InputOption Icon={ChatOutlined} title='Comment' color='gray' />
        <InputOption Icon={Share} title='Share' color='gray' />
        <InputOption Icon={SendOutlined} title='Send' color='gray' />
      </div>
    </div>
  );
});

export default Post;
