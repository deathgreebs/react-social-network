import classes from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map(post =>
        <Post
            message={post.message}
            likesCount={post.likesCount}
            key={post.id}
        />)

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="25" rows="3"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts