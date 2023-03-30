import React, { useState } from 'react';
import Success from './Success';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const country = localStorage.getItem('country');
    if (country === 'PK') {
      setLoggedIn(true);
    } 
    else {
      alert('You are not eligible!');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {loggedIn && <Success />}
    </div>
  );
}

export default Login;
