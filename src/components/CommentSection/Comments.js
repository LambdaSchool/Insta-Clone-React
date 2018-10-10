import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments,
      newComment: ""
    }
  }
  
  addNewComment = (e, i) => {
    let user = localStorage.getItem('user')
    e.preventDefault()
    let comments = [...this.state.comments]
    const commentObject = {
      text: this.state.newComment,
      key: i,
      username: user
    }
    comments.push(commentObject)
    
    this.setState({ comments, newComment: "" })
  }

  handleChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  render() {
    const nextIndex = this.state.comments.length +1

    return (
      <Div className="Comments">
        {this.state.comments.map(comment => {
          return (
            <Comment 
              key={comment.text}
              comment={comment} 
            />
          )
        })}
  
        <P>{moment().startOf('hour').fromNow()}</P>
        
        <Hr />
  
        <Form onSubmit={e => this.addNewComment(e, nextIndex)}>
          <Input
            type="text"
            placeholder="Add a comment..."
            value={this.state.newComment}
            onChange={this.handleChange}
          />
          <Button type="submit"><I className="fas fa-ellipsis-h"></I></Button>
        </Form>
      </Div>
    )
  }
}

const Div = styled.div`
  text-align: left;
  margin: 2% 3%;
`
const P = styled.p`
  font-size: 1.4rem;
  color: lightgray;
`
const Hr = styled.hr`
  width: 95%;
  opacity: 0.2;
  margin: 2% auto;
`
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
`
const Input = styled.input`
  border: none;
  padding: 2% 1% 2% 3%;
  font-size: 1.4rem;
  opacity: 0.5;
  width: 100%;
  font-weight: bold;

  :focus {
    outline-width: 0;
  }
`
const Button = styled.button``
const I = styled.i`
  opacity: 0.5;
`

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default Comments
