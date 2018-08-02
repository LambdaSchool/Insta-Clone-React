import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 
import Comments from './Comments'; 
import * as moment from 'moment'; 

class CommentSection extends React.Component {
    constructor(props){
        super(props); 
        this.state = {comments: [], cmdCalled: false, placeholder: this.props.placeholder}; 
    }

    componentDidMount () {
        this.setState({comments:this.props.comments, cmdCalled: true, temp: "", valueSet: false});
      }

    handleOnChange = event => {
        this.setState({
            temp: event.target.value
        })
    }
    
    addNewComment = event => {
        const text = this.state.temp;
        const comments = this.state.comments; 
        if(event.keyCode === 13 ){ 
            comments.push({username: this.props.userIn, text:text})
            event.target.value = ""
            this.setState({comments: comments, temp:""});
        }

        if(event.target.innerHTML === "Submit" && text.length > 0){
            comments.push({username: this.props.userIn, text:text})
            this.setState({comments: comments, temp:""});
        }
    }

    handleOnSubmit = event => {
        event.preventDefault(); 
    }    

    render(){
        
        let comments;
        this.state.cmdCalled ? comments = this.state.comments : comments = [];

        const time = moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()
        
        let value;
        this.state.temp ? value = this.state.temp : value = ""; 
        return(

            <div >
                {comments.map((comment, i) => <Comments key={i}userName = {comment.username} text = {comment.text} onDoubleClick = {this.deleteComment}/>)}
                
                <h4 className = "timeStamp">{time}</h4>
                <hr className ="postHrLine"/>
                <div className = "addComment">
                  <form className ="newComment" onSubmit ={this.handleOnSubmit}>      
                    <input className ="addCommentInput"  value = {value} onChange = {this.handleOnChange} onKeyUp = {this.addNewComment} placeholder = "Add a comment..."/>
                    <br/>
                    <i onClick= {this.addNewComment} className="fas fa-ellipsis-h">Submit</i>
                 </form>
                </div>
            </div>
            
        );
    }
}



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection; 