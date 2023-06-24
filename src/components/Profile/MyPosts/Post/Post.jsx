import classes from './Post.module.scss'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.imgflip.com/7ey570.jpg?a468504" alt="" />
      {props.message}
      <div>
        <span>likes: {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post