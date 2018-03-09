import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/fontawesome-free-solid';
import { faHeart as farHeart } from '@fortawesome/fontawesome-free-regular';
import { faComment as farComment } from '@fortawesome/fontawesome-free-regular';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';

const PostContainer = (props) => {
    const post = props.post;
    return (
    <div>
        <Container>
            <Row className="justify-content-center">
                <Card className="PostContainer">
                    <CardBody>
                        <CardTitle className="PostContainer__thumbnail justify-content-start">
                            <img src={post.thumbnailUrl} className="rounded-circle" />

                            <span> {post.username}</span>
                        </CardTitle>
                    </CardBody>
                    <CardImg width="100%" className="PostContainer__img" src={post.imageUrl} />

                    <CardBody className="PostContainer__misc">
                        <CommentSection comments={post.comments} />
                    </CardBody>
                </Card>
            </Row>
        </Container>
    </div>
    );
}

export default PostContainer;