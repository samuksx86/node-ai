import React from 'react';

type ChatMessageProps = {
  role: 'user' | 'assistant';
  content: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  return (
    <div className={`message ${role}-message`}>
      <div className="message-content">
        <div className={`avatar ${role}-avatar`}>
          {role === 'user' ? 'U' : 'A'}
        </div>
        <div className="message-text">{content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
