import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileIfo';
import classes from './Profile.module.scss'

const Profile = (props) => {

  return (
    <div>
      <div className={classes.container}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
      </div>
    </div>
  );
}

export default Profile