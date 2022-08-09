import React from 'react';
import c from './dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItems/DialogItems';


const Dialogs = (props) => {
  
  let dialogElements = props.dialogs.map((el) => <DialogItem name={el.name} id={el.id} />);
  let messageElements = props.messages.map((el) => <Message message={el.message} link={el.link} />);

  return (
    <div className={c.dialogs}>
      <h2 className={c.title}>My posts</h2> 
      <div className={c.wrapper}>
        <ul className={c.items}>
          {dialogElements}
          {/* <DialogItem name="Mariya" id="1" />
          <DialogItem name="Mariya" id="2" />
          <DialogItem name="Mariya" id="3" />
          <DialogItem name="Mariya" id="4" /> */}
        </ul>
        <ul className={c.messages}>
          {messageElements}
          {/* <Message link="" message="" />
          <Message link="" message="" />
          <Message link="" message="" /> */}
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
