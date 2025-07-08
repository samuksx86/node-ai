import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { Message } from '../types';

type ChatHistoryProps = {
  messages: Message[];
  isLoading: boolean;
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="chat-messages">
      {messages.length === 0 && (
        <ChatMessage 
          role="assistant" 
          content="Olá! Sou seu assistente de conversação. Como posso ajudar você hoje?" 
        />
      )}

      {messages.map((message) => (
        <ChatMessage 
          key={message.id} 
          role={message.role} 
          content={message.content} 
        />
      ))}

      {isLoading && (
        <ChatMessage role="assistant" content="Pensando..." />
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
