import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import 'moment/locale/ru';
import { useNavigate } from 'react-router-dom';

function Post({ item }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/posts/${item.id}`);
  };

  return (
    <div className='post' onClick={onClick}>
      <div className='post-content'>
        <p>{moment(new Date(item.created)).fromNow()}</p>
        <br/>
        <p>{item.content}</p>
      </div>
    </div>
  )
}

Post.propTypes = {
  item: PropTypes.object
}

export default Post
