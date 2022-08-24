import React from 'react';
import c from './dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItems/DialogItems';

//{messages: Array(3), dialogs: Array(6)}

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((el) => <DialogItem name={el.name} id={el.id} />);
  let messageElements = props.messages.map((el) => <Message message={el.message} link={el.link} />);

  return (
    <div className={c.dialogs}>
      <h2 className={c.title}>My posts</h2>
      <div className={c.wrapper}>
        <ul className={c.items}>{dialogElements}</ul>
        <ul className={c.messages}>{messageElements}</ul>
      </div>
    </div>
  );
};

export default Dialogs;
