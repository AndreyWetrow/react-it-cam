import React from "react";
import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogMessage/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });
  let messageElements = state.messages.map((message) => {
    return <Message message={message.message} key={message.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
