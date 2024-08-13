// src/components/Auth/AuthOptions.js

import React from 'react';
import { Link } from 'react-router-dom';

const AuthOptions = () => {
  return (
    <div className="auth-options">
      <Link to="/login" className="auth-link">Login</Link>
      <Link to="/register" className="auth-link">Register</Link>
    </div>
  );
};

export default AuthOptions;
