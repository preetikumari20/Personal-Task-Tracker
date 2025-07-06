import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';


const App = () => {
  const [username, setUsername] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  if (username === undefined) return null;

  return (
    <>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            !username ? <Login setUsername={setUsername} /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route
          path="/dashboard"
          element={
            username ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </>
  );
};

export default App;





