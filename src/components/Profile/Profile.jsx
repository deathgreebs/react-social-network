import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileIfo';
import classes from './Profile.module.scss'

const Profile = (props) => {

  return (
    <div>
      <div className={classes.container}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
      </div>
    </div>
  );
}

export default Profile