import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Heart from '../../assets/heart.svg';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: ''
        };
    }

    addNewComment(event) {
        event.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {text: this.state.newComment, username: 'SomeUser'}
            ],
            newComment: ''
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className='comment-section'>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput 
                    addNewComment={this.addNewComment} 
                    handleChange={this.addNewComment}
                />
            </div>
        );
    }
}

CommentSection.PropTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;