import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import CommentContainer from '../CommentSection/CommentContainer'
import dummyData from '../../dummy-data'


class PostPage extends React.Component{
    constructor(){
        super()
        this.state = {
                counter: dummyData.likes 
    }
    }
    

    addLike = () => {
        let counter = this.state.counter + 1
        this.setState({
        counter: counter 
        },
        
        console.log(this.state.likes))
    }
   render(){
        return(


        <div className='cmntSectionDiv'>
        {this.props.data.map(item => 
        <div key={item.username}>

              <PostHeader username={item.username} avatar={item.thumbnailUrl} />
               <Post post={item.imageUrl} timestamp={item.timestamp} />
               <i onClick={this.addLike} className="far fa-heart"></i>
               <i className="far fa-comment"></i>
               <LikeSection likes={item.likes} />
               
               <CommentContainer data={this.props.data} comments={item.comments} 

               />
        </div>
      
       
        )}



        </div>
    )
   }
   
}
// const PostPage = (props) => {
//         return(
//             <div>
//             {props.data.map(item => 
            
//             <PostHeader key={item.username}
            
//             avatar={item.imageUrl} 

//             username={item.username}


                
//             /> )};

//             {props.data.map(item => <Post key={item.username} comments={item.comments.map( item =>
//             <div key={item.index}>item.username
//             item.text
            
//             </div>
            
//             )} />)};

//             {props.data.map(item => <LikeSection likes={item.likes} />)}
                
//             </div>
//         )
// }

export default PostPage 