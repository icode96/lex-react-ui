import React from 'react';
import { Popover, Icon } from 'antd';

import styles from './chat-bubble.css';
export default function ChatBubble(props: React.Props<Record<string, unknown>>) {
  const botName: string = props['botName'];

  return (
    <Popover placement="topRight" title={botName} content={<div>sdasd</div>} trigger="click">
      <div className={styles.chatBubbleWrapper}>
        <Icon type="message" style={{ margin: 'auto', fontSize: '35px' }} theme="twoTone" />
      </div>
    </Popover>
  );
}
