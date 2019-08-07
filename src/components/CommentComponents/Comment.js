import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
	return (
        <div key={props.comment.text} className='comments'>
            <p>
                <strong>{props.comment.username}</strong> {props.comment.text}
            </p>
        </div>
	);
};

Comment.propTypes = {
	comment: PropTypes.shape({
		text: PropTypes.string,
		username: PropTypes.string,
	}),
};

export default Comment;