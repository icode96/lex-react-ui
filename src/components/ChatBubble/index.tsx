import React, { useState } from 'react';
import { Popover, Icon } from 'antd';
import ChatWindow from '../ChatWindow';

import styles from './chat-bubble.css';
export default function ChatBubble(props: any) {
  const [isShowChatWindow, showChatWindow] = useState(false);
  
  const botName: string = props['botName'];
  const placeholder: string = props['placeholder'];

  const chatWindow = (<ChatWindow placeholder={placeholder}/>)
  return (
    <Popover placement="topRight" title={botName} content={chatWindow} trigger="click" visible={isShowChatWindow}>
      <div className={styles.chatBubbleWrapper} onClick={() => { showChatWindow(!isShowChatWindow) }}>
        <Icon type={`${isShowChatWindow ? 'close' : 'message'}`} style={{ color: '#fff', margin: 'auto', fontSize: '30px' }} />
      </div>
    </Popover>
  );
}
 