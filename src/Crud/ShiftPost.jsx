import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostContent from './PostContent';
import PropTypes from 'prop-types';

function Shift({ post, title }) {
  const [content, setContent] = useState(post.content);

  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  function handlerInput({ target }) {
    setContent(target.value);
  }

  function handlerSend() {
    if (content === '') return
    fetchPost(content);
    setContent('');
  }

  function fetchPost() {
    fetch(`${process.env.REACT_APP_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: post.id === 0 ? 0 : post.id,
        content,
      }),
    }).then(() => onCancel());
  }

  return (
    <>
      <PostContent title={title}>
        <textarea className='input-field' name="text" cols="6" rows="4" id="" value={content} onChange={handlerInput}></textarea>
        <div className="footer-post">
          <button className='btn-send' onClick={handlerSend}>Опубликовать</button>
        </div>  
      </PostContent>
    </>
  )
}

Shift.defaultProps = {
  title: '',
  post: {
    id: 0,
    content: ''
  }
};

PostContent.propTypes = {
  title: PropTypes.string,
  post: PropTypes.object
}

export default Shift
