import React from 'react';
// import './style.css';
import CommentSection from '../CommentSection';
import Counter from './Counter';
import styled from 'styled-components';
import {UserNameContent, PostImg, Post_container, ThumbImg, CommentAria} from '../Styles/Reusables';
import PropTypes from 'prop-types'

class PostContainer extends React.Component {
    constructor(props) {
        console.log('post constructor props: ', props)
        super(props);
        this.state = { 
            
        }
    }
   
    render() { 
        console.log('post rendered props: ', this.props.passedState)
        return ( 
            <div>
            {this.props.passedState.map((item, i) => {
                return ( 
                    <Post_container key={i}>
                        <UserNameContent>
                            <ThumbImg src={item.thumbnailUrl} alt='thumbnail' />
                            <h4>{item.username}</h4>
                        </UserNameContent>
                        <PostImg src={item.imageUrl}  alt='Post' />
                            <Counter key={i} counterState={item} />
                        <CommentAria>
                            <CommentSection 
                                passedItem={item.comments} 
                                passedPropsFromPost={item}  
                            />
                        </CommentAria>
                    </Post_container>
                )
            })}
            </div>
        )
    }
}
 
export default PostContainer;







// const PostContainer = (props) => {
//     console.log('post cont props: ', props)

//     return ( 
//         <div>

//             {props.passedState.map((item, i) => {
//                 return ( 
//                     <div key={i} className='post_container'>
//                         <div className='userNameContent' >
//                             <img src={item.thumbnailUrl} className='thumbImg' alt='thumbnail' />
//                             <h4>{item.username}</h4>
//                         </div>
//                         <img src={item.imageUrl} className='postImg' alt='Post' />
//                         <div className='likesPostImg'>
//                             <div>
//                                 <span className='red'><i className="fa fa-heart-o" onClick={handleClick}></i></span>
//                                 <i className="fa fa-comment-o" aria-hidden="true"></i>
//                             </div>
//                             <div>
//                                 <span className='count'>{item.likes}</span> likes
//                             </div>
//                         </div>
//                         <div className='commentSection'>
//                             <CommentSection 
//                                 onclickProp={props.clickProp} passedItem={item.comments} 
//                                 passedPropsFromPost={item} onchangeProps={props.changeProps} />
//                         </div>
//                         <div className='dateStamp'>
//                             {item.timestamp}
//                         </div>
                       

//                     </div>
//                 )
//             })}
            
//         </div>
//     )
// }
 

// CommentSection.propTypes = {
//     passedState: PropTypes.shape({
//         username: PropTypes.string,
//         thumbnailUrl: PropTypes.string,
//         likes: PropTypes.number,
//         timestamp: PropTypes.string,
//         text: PropTypes.string,

//     })
// }

// export default PostContainer;

