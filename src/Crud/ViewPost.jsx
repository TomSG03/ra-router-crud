import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';
import PostContent from './PostContent';

function ViewPost({ post, onEdit, title }) {
  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  function onDelete() {
    fetch(`${process.env.REACT_APP_URL}/posts/${post.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => onCancel());
  }

  return (
    <PostContent title={title}>
      <div className='post-content'>
        <p>{moment(new Date(post.created)).fromNow()}</p>
        <br />
        <p>{post.content}</p>
      </div>
      <div className="footer-post">
        <button className='btn-edit' onClick={() => onEdit(false)}>Изменить</button>
        <button className='btn-del' onClick={onDelete}>Удалить</button>
      </div>
    </PostContent>
  )
}

ViewPost.propTypes = {
  post: PropTypes.object,
  onEdit: PropTypes.func,
  title: PropTypes.string
}

export default ViewPost
