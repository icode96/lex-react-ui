import React from 'react';
// import { Input } from 'antd';

import styles from './chat-window.css';
export default function ChatWindow(props: any) {
  const placeholder: string = props['placeholder'];

  return ( 
    <div className={styles.chatWindowWrapper}>
      <div className={styles.chatInputHolder}>
        <div className={styles.chatInputField} contentEditable={true} data-placeholder={placeholder}></div>
      </div> 
    </div>
  );
}
