import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import 'moment/locale/ru';
import { useNavigate, useParams } from 'react-router-dom';
import useJsonFetch from './useJsonFetch'


function ViewPost({ url }) {
  const { id } = useParams();
  const [data, isLoading, error] = useJsonFetch(`${url}/posts`);

  const navigate = useNavigate();
  const onCancel = () => navigate('/posts');

  const findPost = () => data.find((e) => Number(e.id) === Number(id));

  return (
    <div className="posts">
      {isLoading && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {data && !isLoading && (
        <div className='post'>
          <button className='btn-cancel' onClick={onCancel}>×</button>
          <div className='post-content'>
            <p>{moment(new Date(findPost().created)).fromNow()}</p>
            <br/>
            <p>{findPost().content}</p>
          </div>
          <button className='btn-edit'>Изменить</button>
          <button className='btn-del'>Удалить</button>
        </div>
      )}
    </div>
  )
}

ViewPost.propTypes = {}

export default ViewPost
