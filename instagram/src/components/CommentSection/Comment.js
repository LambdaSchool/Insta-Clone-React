import React from 'react';
import './CommentSection.css';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
    margin: 5px 0;
`;

const Span = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

const Comment = props => {
        return (
            <CommentDiv>
                <Span>{props.username}</Span>
                {props.text}
            </CommentDiv>
        );

}

// CommentSection.propTypes = {
//     comment: PropTypes.shape({
//         username: PropTypes.string,
//         text: PropTypes.string
//     })
// }


export default Comment;