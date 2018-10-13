import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments
		};
	}

	render() {
		return (
			<div>
				{this.state.comments.map((c, i) => 
					<Comment
						key={i}
						comment={c}
					/>
				)}
				<CommentInput />
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayof(
		PropTypes.shape({
			text: PropTypes.string,
			username: PropTypes.string
		})
	)
};

export default CommentSection;
