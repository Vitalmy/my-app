import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { type } from "@testing-library/user-event/dist/type";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageText = props.dialogsPage.newMessageText;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea placeholder="Enter your message"
            onChange={onMessageChange}
            ref={newMessageElement}
            value={newMessageText}
          />
          <div>
            <button onClick={addMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
