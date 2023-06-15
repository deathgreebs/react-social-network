import classes from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img className={classes.humanImg} src='https://freefrontend.com/assets/img/css-neumorphism-examples/02-11-2022-neumorphic-shadows.png' />
      </div>
      <div  className={classes.container}>
      <div>
        <img className={classes.catImg} src='https://freefrontend.com/assets/img/css-neumorphism-examples/02-11-2022-neumorphic-shadows.png' />
      </div>
      <div>
        My Posts
        <div>New Posts</div>
        <div className={classes.posts}>
          <div className={classes.item}>post.1</div>
          <div className={classes.item}>post.2</div>
          <div className={classes.item}>post.3</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile