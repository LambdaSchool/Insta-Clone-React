import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
    border-radius: 50%;
    margin-right: 10px;
`;

const Header = styled.div`
    position: relative;
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const PostHeader = props => {
    return (
            <Header><Thumbnail src={props.post.thumbnailUrl} className="thumbnail" width="30" alt="User thumbnail"/>
            {props.post.username}
            </Header>
    );
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string
    })
};

export default PostHeader;
