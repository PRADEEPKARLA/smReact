// src/components/Auth/Login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './logreg.css'; // Ensure your CSS file is correctly imported
// import AuthOptions from './AuthOptions';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <AuthOptions/>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// src/components/Auth/Login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthOptions from './AuthOptions';
// import './logreg.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <AuthOptions />
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// src/components/Auth/Login.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './logreg.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <section>
//       {[...Array(100)].map((_, index) => (
//         <span key={index}></span>
//       ))}
//       <div className="auth-container">
//         <div className="content">
//           <h2>Login</h2>
//           <form className="form" onSubmit={handleSubmit}>
//             <div className="inputBox">
//               <input
//                 type="text"
//                 required
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <i>Username</i>
//             </div>
//             <div className="inputBox">
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <i>Password</i>
//             </div>
//             <div className="inputBox">
//               <input type="submit" value="Login" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;



// src/components/Auth/Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './logreg.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <section>
      {[...Array(100)].map((_, index) => (
        <span key={index}></span>
      ))}
      <div className="auth-container">
        <div className="content">
          <h2>Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i>Username</i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i>Password</i>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
          </form>
          <div className="links">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
