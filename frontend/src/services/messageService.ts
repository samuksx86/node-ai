import type { Message } from '../types';
import axios from 'axios';

export const generateResponseMessage = async (query: string): Promise<Message> => {
  const {data} = await axios.post('http://localhost:8080/chat', {
    message: query
  })

  return {
    id: (Date.now() + 1).toString(),
    role: 'assistant',
    content: data.message
  };
};

export const createUserMessage = (content: string): Message => {
  return {
    id: Date.now().toString(),
    role: 'user',
    content: content.trim()
  };
};


