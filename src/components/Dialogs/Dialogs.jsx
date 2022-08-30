import React from 'react';
import style from './dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItems/DialogItems';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/state';

//{messages: Array(3), dialogs: Array(6)}

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />);
  let messageElements = state.messages.map((el) => <Message message={el.message} link={el.link} key={el.id} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };

  let onNewMessageChange = (evt) => {
    let body = evt.target.value;
    console.log(body)
    props.store.dispatch(updateNewMessageBodyCreater(body));
  };

  return (
    <div className={style.dialogs}>
      <h2 className={style.title}>My posts</h2>
      <div className={style.wrapper}>
        <ul className={style.items}>{dialogsElements}</ul>
        <ul className={style.messages}>
          {messageElements}
          <div>
            <div>
              <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
