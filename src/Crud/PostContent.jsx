import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function PostContent({ title, ...props }) {

  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  return (
    <>
      <div className='post'>
        <div className="head-post">
          <span>{title}</span>
          <button className='btn-cancel' onClick={onCancel}>×</button>
        </div>
        {props.children}
      </div>
    </>
  )
}

PostContent.defaultProps = {
  title: '',
  post: {
    id: 0,
    content: ''
  }
};

PostContent.propTypes = {
  title: PropTypes.string,
  props: PropTypes.array
}


export default PostContent
