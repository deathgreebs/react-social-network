import classes from "./Sidebar.module.scss";
import FriendElement from "./FriendElement/FriendElement";

const Sidebar = (props) => {
    let friendsElements = props.friends.map(friend =>
        <FriendElement name={friend.name} key={friend.id}/>
    )
    return (
        <div className={classes.friends}>
            {/*<h2>Friends</h2>*/}
            <div className={classes.sidebar}>
                {friendsElements}
            </div>
        </div>

    );
}

export default Sidebar
