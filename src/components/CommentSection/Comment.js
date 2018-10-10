import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Comment = (props) => {
  return (
    <React.Fragment>
      <P><Span>{props.comment.username}</Span> {props.comment.text}</P>
    </React.Fragment>
  )
}

const P = styled.p``
const Span = styled.span`
  font-weight: bold;
`

Comment.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
}

export default Comment
