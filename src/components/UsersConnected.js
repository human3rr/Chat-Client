import React, { useEffect, useState } from 'react';
//import './Messages.css';

function UsersConnected({ socket }) {
  const [usersConnected, setUsersConnected] = useState(1);

  useEffect(() => {
    console.log("in useeffect5")
    const usersConnectedListener = (connected) => {
        console.log("connected = " + connected)
        setUsersConnected(connected);
    };

    socket.on('usersConnected', usersConnectedListener);

  }, []);

  return (
    <div className="message-list">
      Users connected: {usersConnected}
    </div>
  );
}

export default UsersConnected;
