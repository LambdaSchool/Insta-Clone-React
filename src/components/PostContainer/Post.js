import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Comments from '../CommentSection/Comments'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: props.post.likes
    }
  }

  increaseLike = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <React.Fragment>
        <Div>
          <Img src={this.props.post.thumbnailUrl} alt="User Thumbnail" />
          <Span>{this.props.post.username}</Span>
        </Div>
  
        <Div2>
          <Img2 src={this.props.post.imageUrl} alt="User Thumbnail" />
        </Div2>
  
        <Div3> 
          <Span2 onClick={this.increaseLike}>
            <i className="far fa-heart"></i>
          </Span2>
          <Span3>
            <i className="far fa-comment"></i>
          </Span3>
        </Div3>
  
        <Div4>
          <P>{this.state.likes} likes</P>
        </Div4>
  
        <Comments className="Comments" comments={this.props.post.comments} />
      </React.Fragment>
    )
  }
}

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 3% 0;
`
const Div2 = styled.div``
const Div3 = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 3rem;
  margin: 1% 3%;
`
const Div4 = styled.div`
  text-align: left;
  margin: 0 3%;
`
const Span = styled.span`
  font-weight: bold;
`
const Span2 = styled.span`
  margin-right: 2%;
`
const Span3 = styled.span``
const Img = styled.img`
  margin: 0 3%;
  border-radius: 50%;
  width: 30px;
`
const Img2 = styled.img``
const P = styled.p`
  font-weight: bold;
`

Post.propTypes = {
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
}

export default Post
