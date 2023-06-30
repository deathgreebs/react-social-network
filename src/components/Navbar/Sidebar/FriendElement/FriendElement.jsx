import classes from "../Sidebar.module.scss";

const FriendElement = (props) => {
    return (
        <div>
            <div className={classes.friendCircle}>
                <img src="https://static.vecteezy.com/system/resources/previews/011/893/987/large_2x/neumorphic-circle-icon-neumorphism-ui-button-free-png.png" alt=""/>
                {props.name}
            </div>

        </div>
    )
}

export default FriendElement