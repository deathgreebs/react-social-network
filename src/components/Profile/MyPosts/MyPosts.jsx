import React from "react";
import classes from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map(post =>
        <Post
            message={post.message}
            likesCount={post.likesCount}
            key={post.id}
        />)

    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} name="" id="" cols="25" rows="3" />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts