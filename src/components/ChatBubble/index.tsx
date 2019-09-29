import React from 'react';
import { Popover, Icon } from 'antd';
import ChatWindow from '../ChatWindow';

import styles from './chat-bubble.css';
export default function ChatBubble(props: any) {
  const botName: string = props['botName'];
  const placeholder: string = props['placeholder'];

  const chatWindow = (<ChatWindow placeholder={placeholder}/>)
  return (
    <Popover placement="topRight" title={botName} content={chatWindow} trigger="click">
      <div className={styles.chatBubbleWrapper}>
        <Icon type="message" style={{ margin: 'auto', fontSize: '35px' }} theme="twoTone" />
      </div>
    </Popover>
  );
}
