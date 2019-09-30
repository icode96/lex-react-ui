import React, { useState } from 'react';
import { Icon } from 'antd';
import ContentEditable from 'react-contenteditable';

import { 
  chatWindowWrapper, chatInputHolder, chatInputField, chatSendMessage,
  chatListHolder, chatBlock, me, them
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
        <div className={`${chatBlock} ${them}`}>Hello 1</div>
        <div className={`${chatBlock} ${me}`}>Hello 2</div>
      </div>
    </div>
  );
}
