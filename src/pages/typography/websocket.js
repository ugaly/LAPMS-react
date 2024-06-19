import { useState, useEffect } from 'react';

function useWebSocket(url) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    // Handle incoming messages
    ws.onmessage = (event) => {
      // Pass the event data to the caller component
      if (typeof onMessage === 'function') {
        onMessage(event);
      }
    };

    return () => {
      ws.close();
    };
  }, [url]);

  return socket;
}

export default useWebSocket;
