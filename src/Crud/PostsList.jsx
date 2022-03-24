import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostsList({ data }) {
   return data.map((item) => <Post item={item} key={item.id} />)
}

PostsList.propTypes = {
  data: PropTypes.array
}

export default PostsList
