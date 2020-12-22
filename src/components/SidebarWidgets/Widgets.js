import React from 'react';
import { FiberManualRecord, Info } from '@material-ui/icons';
import './Widgets.css';

const Widgets = () => {
  const newsarticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecord />
      </div>

      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsarticle('LinkedIn Clone #whitish', 'Top News - 131 readers ')}
      {newsarticle('Tesla hits new highs', 'Cars & Auto - 9031 readers ')}
      {newsarticle('Coronavirus: Updates', 'Health - 3131 readers ')}
      {newsarticle('Bitcoin breaks $22m', 'Crypto - 7631 readers ')}
      {newsarticle('Is React too good?', 'Programming - 13431 readers ')}
    </div>
  );
};

export default Widgets;
