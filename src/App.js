import { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://resback-1.onrender.com/echo', { message });
    setResponse(res.data.echoedMessage);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Message Echo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default App;
