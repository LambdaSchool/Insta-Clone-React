import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import styles from './postcontainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {Container, UserHeader} from '../StyledComponents/StyledComponents';



class PostContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      likes: this.props.dummyObj.likes
    }
  }
  addLike = () =>{
    this.setState({
      likes :this.state.likes + 1
    })
  }
  render(){  
  

    return (
        
       // <div className = "post-container">
         <Container>  
            <UserHeader>
              <img src={this.props.dummyObj.thumbnailUrl} className="thumbnail" />
              <div className="username">{this.props.dummyObj.username}</div>
            </UserHeader>
            <div>
              <img className="main-image" src={this.props.dummyObj.imageUrl} />
            </div>
            <div className = "like-section">
              <div className = "like-icons" >
                <img onClick = {this.addLike} className = "heart-likes" src = "https://imageog.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />  
                <img className = "comment-bubble" src = "data:image/png;base64,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" />
              </div>    
              <div className="likes">{this.state.likes} likes</div>
                         
            </div>
           
            <CommentSection key={this.props.dummyObj.key} comments ={this.props.dummyObj.comments}/>
            </Container> 
        //</div>
    );
  }  
}
PostContainer.propTypes = {
    dummyObj : 
      PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl:PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments:PropTypes.arrayOf(
          PropTypes.shape({
            username:PropTypes.string,
            text: PropTypes.string,
          })
        )
      }).isRequired
    
  }

export default PostContainer;