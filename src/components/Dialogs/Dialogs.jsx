import React from 'react';
import c from './dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItems/DialogItems';
const Dialogs = () => {
  let dialogs = [
    { id: 1, name: 'Mariya' },
    { id: 2, name: 'Pavel' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Pavel' },
    { id: 5, name: 'Mariya' },
    { id: 6, name: 'Dima' },
  ];
  
  let messages = [
    { id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
    { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet?', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
    { id: 3, message: 'Lorem ipsum dolor sit.', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
  ];
  let dialogElements = dialogs.map((el) => <DialogItem name={el.name} id={el.id} />);
  let messageElements = messages.map((el) => <Message message={el.message} link={el.link} />);
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
