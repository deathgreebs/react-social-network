import classes from './ProfileInfo.module.scss'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.MainImg} src='https://freefrontend.com/assets/img/css-neumorphism-examples/02-11-2022-neumorphic-shadows.png' alt="img"/>
      </div>
      <div>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo