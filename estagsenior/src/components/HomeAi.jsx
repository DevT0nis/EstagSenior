import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #464545;
  border-left: 1px solid #ddd;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${(props) => (props.isUser ? '#5fec6d' : '#e47ded')};
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #1e1c1c;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #56a4f8;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomeAi = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    // Add user message to messages
    const newMessage = { text: inputValue, isUser: true };
    setMessages([...messages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { text: 'Resposta da IA para: ' + inputValue, isUser: false };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);

    setInputValue('');
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            {message.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <SendButton onClick={handleSend}>Enviar</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default HomeAi;
