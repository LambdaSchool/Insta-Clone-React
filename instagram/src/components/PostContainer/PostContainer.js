import React from 'react';
import CommentSection from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection';
import './PostContainer.css'
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';


class PostContainer extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            commentSection: props.propsInPC.comments,
        }
    }
    
    render() {
        return (
            <div className="instagram-posts">
                
                <div className="post-container"> 
                
                    <div className="user">   
                        <img className="logo" src={this.props.propsInPC.thumbnailUrl} alt="logo"></img>
                        <div className="username">
                            {this.props.propsInPC.username}
                        </div> 
                    </div>

                    <img className="img" src={this.props.propsInPC.imageUrl} alt="content"></img>

                    <div className="lower-half">
                        <div className="symbols">
                            <div>
                            <FeatherIcon className="message" icon="message-circle" />
                            </div>
                            <div>
                                <FeatherIcon icon="heart" />
                            </div>
                            
                        </div>
                        
                            <h4 className="likes">{this.props.propsInPC.likes} likes</h4>
                        
                        <div className="comments">
                            <div className="comment">
                                {<CommentSection commentSection={this.props.propsInPC.comments}/> }
                            </div>  
                        </div>
                        
                        <h5 className="post-time">2 HOURS AGO</h5>
                        <div className="new-comment">
                        <input className="comment-box" type="text" size="40" placeholder="Add a comment..."></input>
                            <div className="more-button">
                                <FeatherIcon icon="more-horizontal" />
                            </div>
                            
                        </div>       
                    </div>
                    
                </div>
            
            </div>

            
        
        )
    }  
}


PostContainer.propTypes = {
    propsInPC: PropTypes.shape({
        username: PropTypes.string,
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        }))

    })
}
export default PostContainer;