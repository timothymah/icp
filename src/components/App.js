import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import SensorData from './SensorData';

const ENDPOINT = "http://localhost:3000";

const App = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on("FromAPI", data => {
        setResponse(data);
      });
    }, []);

    
    return (
    <div>
        <SensorData/>
        It's <time dateTime={response}>{response}</time>
    </div>

    
  );
};

export default App;
