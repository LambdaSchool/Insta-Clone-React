import React from 'react';
import Comment from '../CommentSection/Comment';
import styles from './commentsection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component{
    constructor(){
        super()
        this.state = {
            comments : [],
            newComment : '',
        }
    }
    componentDidMount(){
        this.setState({
            comments: this.props.comments
        })
    }
    addNewComment = (event) => {
        event.preventDefault();
        const newCommentObj = {
            username: 'Bobby' + ' ' ,
            text: this.state.newComment
        }
        this.setState({
            comments: [...this.state.comments, newCommentObj],
            newComment : ''
        })
    }
    inputTextHandler = (event) =>{
        this.setState({
            newComment : event.target.value
        })
    }
    render(){    
        return(
            <div className = "comment-section">
                {this.state.comments.map(comment =>{
                    return(
                        <div >
                            <Comment username = {comment.username} text = {comment.text} key = {Math.random()}/>
                        </div> 
                    )
                })}
                <form 
                    className = "add-comment-section"
                    onSubmit = {(event)=>{
                        this.addNewComment(event)}
                        }>
                    <input 
                        onChange = {this.inputTextHandler}
                        value = {this.state.newComment}
                        className = "comment-input"
                        type ="text"
                        placeholder ="Add a comment..."
                        
                    />  
                    <img className = "three-dot" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAY1BMVEX///8AAADi4uItLS319fXOzs6ysrLAwMCnp6cSEhKtra2jo6PGxsZpaWlZWVnLy8uFhYXX19d+fn6QkJB3d3cMDAw1NTWZmZlOTk5kZGTn5+dUVFQ9PT0bGxuIiIibm5tERETdAlNiAAACHElEQVR4nO3b61baQBQGUAeiiDfwgveq7/+UlrZrVWFMDgeCadfe/78VviQTJsnk4AAAAAAAAAAAAAAAAAAAAAAAAOBf04xmk8ls1OwzusU2B2E2H5c/xvOzdPRqk+jZx23ONvu9Q9DcTcsni7vo8W9eV6PXsWhzt/gcnIa3ORCnpeK13+hrLXi6XY+9erytNfg5bkb9RUfjevD2cTed+ndWL7A06YhOstGW4GaX1W9z9HWDUo5boyfZ6HFb8Gi3/frRctyXTlqirTu8rX7r7u4+xwfgsr1BKYe7jx52BS/76bo7zbSrQvlyUtCZ/CLadOamQ5+I3HR3P9919Lw7eNNf413oHGdL9bGWjnYO0aVhD9OnSIW3avQiEr2vBN8iwac+W29rFGlQP/TpaOgsLaV7pv19XmIVrirReTZ6FQu+9N8+bdH983+pRH9ko8Hcov/2WcGBVhtq6WhwjA55lHbM8v9av08KR1cfabTeVn003Fus62iF9StU8KpYynwlGLy0lXK9n32Q8BCtcLEWDUxZf1udgoTmLUsP+9kHCeEK69OvcPR5JXgfDa4fqqEITXZr3TdoP14JPkeDw53wOttSXNtS/JOmmLeluEvIcU+a4glIyhbP24KD7b983ubpbo53CTneXKV4T5rjrXyONSA5VhzlWN+WYzVlkrW7OVaKZ/kuIctXMAAAAAAAAAAAAAAAAAAAAAAAABt4B5IiIQewk85pAAAAAElFTkSuQmCC" />  
                </form>
            </div>
            
        )
    }         
}
CommentSection.propTypes = {
    comment:PropTypes.arrayOf(
        PropTypes.shape({
           username: PropTypes.string,
           text: PropTypes.string, 
    
        }) 
    )
}
export default CommentSection;