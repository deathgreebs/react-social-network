import classes from './../Dialogs.module.scss'

const Message = (props) => {
    if(props.counter % 2 === 0) {
        return (
            <div className={classes.wrapperLeft}>
                <img className={classes.img} src='https://static.vecteezy.com/system/resources/previews/011/893/987/large_2x/neumorphic-circle-icon-neumorphism-ui-button-free-png.png' alt='logo' />
                <div className={`${classes.message} ${classes.left}`}>{props.message}</div>
            </div>

        );
    } else {
        return (
            <div className={classes.wrapperRight}>
                <div className={`${classes.message} ${classes.right}`}>{props.message}</div>
                <img className={classes.img} src='https://static.vecteezy.com/system/resources/previews/011/893/987/large_2x/neumorphic-circle-icon-neumorphism-ui-button-free-png.png' alt='logo' />
            </div>

        );
    }

}

export default Message