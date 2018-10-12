import React, { Component } from 'react'; 
import './CommentSection.css'
import SingleComment from './SingleComment'


class CommentSection extends Component{
    constructor(props){
        super(props);
        this.state={
            comments: this.props.comments,
            tempComment: ''
        }
    }

    inputHandler = (event) =>{
        this.setState({
            tempComment:event.target.value
        })
    }

    addNewComment =(event) =>{
        event.preventDefault();
        const newObj = {
            username: [localStorage.getItem('user')],
            text: this.state.tempComment
        };
        if (this.state.tempComment !==''){
            this.setState({
                comments: [...this.state.comments, newObj],
                tempComment: ''
            })
        }
    }

    render(){
        return(
            <div>
                <div>
                    {this.state.comments.map(item =>{
                        return(
                            <SingleComment key={item.text} comment={item.text} user={item.username} />
                        )
                    })}
                </div>
                <p className='timestamp'>{this.props.timestamp}</p>
                <div className='addComment'>
                    <form onSubmit={this.addNewComment}>
                        <input type='text' value={this.tempComment} onChange={this.inputHandler} placeholder='Add a comment...'/>
                    </form>
                <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
        )
    }
    }



// const CommentSection = (props) =>{

//     // addNewComment = (event, index) =>{
//     //     let value = event.target.value
//     //     props.setState({

//     //     })
//     // }
//     return(
//         <div>
//             <div>
//                 {props.comments.map(item =>{
//                     return(
//                         <SingleComment key={item.text} comment={item.text} user={item.username} />
//                     )
//                 })}
//             </div>
//             <p className='timestamp'>{props.timestamp}</p>
//             <div className='addComment'>
//                 <form>
//                     <input type='text' value='Add comment...'/>
//                 </form>
//             <i className="fas fa-ellipsis-h"></i>
//             </div>
//         </div>
//     )
// }

export default CommentSection