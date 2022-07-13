import React, { useEffect, useState } from 'react';
//import './Messages.css';

function Messages({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("in useeffect")
    const messageListener = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
  /*
    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };*/
  
    socket.on('chat message', messageListener);/*
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };*/
  }, []);

  return (
    <div className="message-list">
      {[...Object.values(messages)]
        .map((message) => (
          <div
            key={message.id}
            className="message-container"
          >
              {message}
            <span className="message">{message.value}</span>
          </div>
        ))
      }
    </div>
  );
}

export default Messages;
