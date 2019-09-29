import ChatBubble from './components/ChatBubble';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './global-styles.css';
import styles from './index.css';

const LexChatSnippet = (props: React.Props<Record<string, unknown>>) =>
  ReactDOM.createPortal(
    <>
      <div className={styles.lexReactUiHolder}>
        <ChatBubble {...props} />
      </div>
    </>,
    document.body
  );

LexChatSnippet.defaultProps = {
  botAlias: '$LATEST'
};

LexChatSnippet.propTypes = {
  botName: PropTypes.string.isRequired,
  botAlias: PropTypes.string
};

export default LexChatSnippet;
