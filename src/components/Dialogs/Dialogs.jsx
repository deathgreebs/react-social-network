import classes from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = props.state.messages.map((message, counter = 0) => <Message counter={counter++} message={message.message} key={message.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea name="" id="" cols="10" rows="10"></textarea>
                <button>Send Message</button>
            </div>
        </div>
    );
}

export default Dialogs