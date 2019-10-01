import React, { useState } from 'react';
import { Avatar, Icon } from 'antd';
import ContentEditable from 'react-contenteditable';

import { 
  chatWindowWrapper, chatInputHolder, chatInputField, chatSendMessage,
  chatListHolder, chatBlock, me, them,
  avatarWrapper, messageContainer, messageBlock
 } from './chat-window.css';
export default function ChatWindow(props: any) {
  const placeholder: string = props['placeholder'];
  const [message, setMessage] = useState('');

  return ( 
    <div className={chatWindowWrapper}>
      <div className={chatInputHolder}>
        <ContentEditable
                className={chatInputField}
                html={message}
                placeholder={placeholder}
                disabled={false}       
                onChange={e => { setMessage(e.target.value) }} 
                tagName='div'
              />
          {
            !message || (message && (message.trim() === '' || message.length <=0)) ?
              <Icon className={chatSendMessage} type="audio" /> :
              <Icon className={chatSendMessage} type="right-circle" />
          }
      </div> 
      <div className={chatListHolder}>
        {
          [...new Array(5)].map((i) => (
            <>
              <div className={`${chatBlock} ${them}`}>
          <div className={avatarWrapper}>
            <Avatar size={28} icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <div className={messageContainer}>
            <div className={messageBlock}>hello them {i}</div>
          </div>
        </div>
        <div className={`${chatBlock} ${me}`}>
          <div className={messageContainer}>
            <div className={messageBlock}>hello me {i}</div>
          </div>
        </div>
            </>
          ))
        }
      </div>
    </div>
  );
}
