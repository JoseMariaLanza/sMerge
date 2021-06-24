import React from 'react';

const Articles = ({ children, title }) => (
  <div className='articles'>
    <h3 className='articles__titles'>{title}</h3>
    {children}
  </div>
);

export default Articles;
