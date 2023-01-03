import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageText = state.newMessageText;

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageText"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
