import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import { Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostContainer = props => {
	// alert('made it!');
	// console.log('dummy datalist: ', props.dummy);
  return (
  	<div className="postWrapper">
  		{props.dummy.map((post, index) => 		
				<Card className="card" key={index}>
						<div className="cardHeader">
							<img src={post.thumbnailUrl} alt="thumbnail logo"/>
							<CardTitle key={index}>{post.username}</CardTitle>
						</div>
					<CardImg className="cardImg" src={post.imageUrl} placeholder={post.username}/>
					<CardBody className="cardBody">
						<div> <i className="far fa-heart"></i><i className="far fa-comment"></i></div>
						<div><strong>{post.likes} likes</strong></div>
						<CommentSection key={index} commentList={post.comments} />
					</CardBody>
				</Card>
  		)}
  	</div>
  );
}

export default PostContainer;
