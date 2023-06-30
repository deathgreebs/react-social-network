import classes from './Post.module.scss'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img className={classes.avatar} src="https://static.vecteezy.com/system/resources/previews/011/893/987/large_2x/neumorphic-circle-icon-neumorphism-ui-button-free-png.png" alt="" />
      {props.message}
      <div className={classes.likes}>
        <span>likes: {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post