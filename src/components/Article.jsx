import React from 'react';
import PropTypes from 'prop-types';

const Article = ({cover, title, year, contentRating, duration}) => (
  <div className='article'>
    <h3 className='article__title'>Article</h3>
    {title}
  </div>
);

Article.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default Article;
