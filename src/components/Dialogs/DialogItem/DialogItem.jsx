import classes from './../Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.dialog}>
                <NavLink to={`/dialogs/${props.id}`} className={navData => navData.isActive ? classes.active : classes.dialog}>
                    <img className={classes.img} src='https://static.vecteezy.com/system/resources/previews/011/893/987/large_2x/neumorphic-circle-icon-neumorphism-ui-button-free-png.png' alt='logo' />
                    {props.name}
                </NavLink>
            </div>
        </div>

    );
}


export default DialogItem