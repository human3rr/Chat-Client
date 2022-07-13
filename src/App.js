import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from './components/Messages';
import MessageInput from './components/MessageInput';
import UsersConnected from './components/UsersConnected';

import './App.css';

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log("in useeffect1")
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">
        React Chat
      </header>
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
          <UsersConnected socket={socket} /> 
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
