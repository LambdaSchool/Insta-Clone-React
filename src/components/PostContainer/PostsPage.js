import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Post from './Post.js'

const PostsPage = (props) => {
  return (
    <Div>
      {props.data.map( item => {
        return (
          <Post
          className="Post"
          key={item.timestamp}
          post={item}
          />
        )
      })}
    </Div>
  )
}

const Div = styled.div`
  width: 640px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

PostsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ 
      post: PropTypes.object,
      imageUrl: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.arrayOf(
        PropTypes.shape(
          {
            text: PropTypes.string,
            username: PropTypes.string
          }
        )
      )
    })
  )
}

export default PostsPage