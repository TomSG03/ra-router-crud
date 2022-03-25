import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from './useJsonFetch'
import PostsList from './PostsList';

function Posts() {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/posts`);

  return (
    <div className="posts">
      {isLoading && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {data && !isLoading && (
        <div className="posts-list">
          {data.length < 1 ? <div>нет постов</div> : <PostsList data={data} />}
        </div>
      )}
    </div>
  )
}

Posts.propTypes = {
  url: PropTypes.string
}

export default Posts
