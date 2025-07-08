import { useState } from 'react';
import './App.css';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import { createUserMessage, generateResponseMessage } from './services/messageService';
import type { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() === '' || isLoading) return;

    const userMessage = createUserMessage(input);

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(async () => {
      const assistantMessage = await generateResponseMessage(userMessage.content);

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h1 className="app-title">Bino</h1>

      <ChatHistory 
        messages={messages} 
        isLoading={isLoading} 
      />

      <ChatInput 
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit} 
        isLoading={isLoading} 
      />
    </div>
  );
}

export default App;
