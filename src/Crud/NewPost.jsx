import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPost({ url }) {
  const [content , setContent ] = useState('');

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
    fetch(`${url}/posts`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         id: 0,
         content ,
      }),
   }).then(() => onCancel());
  }

  return (
    <>
      <div className='new-post'>
        <button className='btn-cancel' onClick={onCancel}>×</button>
        <textarea className='input-field' name="text" cols="6" rows="4" id="" value={content} onChange={handlerInput}></textarea>
        <button className='btn-send' onClick={handlerSend}>
          Опубликовать
        </button>
      </div>
    </>
  )
}

export default NewPost
