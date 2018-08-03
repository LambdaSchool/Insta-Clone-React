import React from 'react';
import './CommentSection.css';
// import PropTypes from 'prop-types';


class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.array
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.add}  className="comment-field">
                    <input placeholder="Add a comment..." className="add-comment" name="comment" type="text" value={this.props.comment} onChange={this.props.input} onClick={event => event.stopPropagation()}/><img src="img/ellipsis.png" alt="ellipsis" className="ellipsis"/>
                </form>
            </div>
        );
    }
}

// PostContainer.propTypes = {
//     post: PropTypes.shape({
//         comments: PropTypes.arrayOf(PropTypes.object)
//     })
// };

export default CommentInput;
