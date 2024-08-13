// src/components/Auth/Register.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message);
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



// src/components/Auth/Register.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message);
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <div>
        
//       <h2>Register</h2>
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
//         <button type="submit">Register</button>
//       </form>
      
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './logreg.css'; // Ensure your CSS file is correctly imported
// import AuthOptions from './AuthOptions';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message);
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <section>
//        <AuthOptions/>
//       {[...Array(100)].map((_, index) => (
//         <span key={index}></span>
//       ))}

//       <div className="signin">
//         <div className="content">
//           <h2>Register</h2>
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
//               <input
//                 type="submit"
//                 value="Register"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;



// src/components/Auth/Register.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthOptions from './AuthOptions';
// import './logreg.css';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message);
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <AuthOptions />
//       <h2>Register</h2>
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



// src/components/Auth/Register.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './logreg.css';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert(data.message);
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Register error:', error);
//     }
//   };

//   return (
//     <section>
//       {[...Array(100)].map((_, index) => (
//         <span key={index}></span>
//       ))}
//       <div className="auth-container">
//         <div className="content">
//           <h2>Register</h2>
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
//               <input type="submit" value="Register" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;


// src/components/Auth/Register.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './logreg.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <section>
      {[...Array(100)].map((_, index) => (
        <span key={index}></span>
      ))}
      <div className="auth-container">
        <div className="content">
          <h2>Register</h2>
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
              <input type="submit" value="Register" />
            </div>
          </form>
          <div className="links">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
