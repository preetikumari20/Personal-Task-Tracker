import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUsername }) => {
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      localStorage.setItem('username', input.trim());
      setUsername(input.trim());
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        className={visible ? 'fade-in' : ''}
      >
        <input
          type="text"
          placeholder="Enter username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
