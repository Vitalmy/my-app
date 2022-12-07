import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
  ]
  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-cam'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yoo'},
    {id: 5, message: 'Wow'},
]
  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
let messagesElements = messages.map( m => <Message message={m.message} />);

  return (
  <div className={s.dialogs}>
<div className={s.dialogsItems}>
{ dialogsElements}
</div>
<div className={s.messages}>
  {messagesElements}
</div>
    </div>
    
  );
};
export default Dialogs;
